import Divider from 'components/custom-components/divider/divider';
import { OrientationEnum } from 'components/custom-components/divider/divider.types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { MarkdownContentProps, MediaProps } from './markdown-content.types';

import './markdown-content.scss';

const MarkdownContent: React.FC<MarkdownContentProps> = ({
  tabs,
  activeTab,
  assetBasePath,
}) => {
  if (!tabs.length) {
    return null;
  }

  // Group tabs by their `tab` property
  const groupedTabs = tabs.reduce((acc, tab) => {
    if (!acc[tab.tab]) {
      acc[tab.tab] = [];
    }
    acc[tab.tab].push(tab);
    return acc;
  }, {} as Record<string, typeof tabs>);

  return (
    <>
      {Object.entries(groupedTabs).map(([groupKey, groupTabs], index) => {
        const formattedGroupKey = groupKey.toLowerCase().replace(/\s+/g, '-');
        return (
          <div
            key={groupKey}
            className="MagentaA11y__content-details"
            id={`${formattedGroupKey}-tabpanel`}
            role="tabpanel"
            aria-labelledby={`${formattedGroupKey}-tab`}
            style={{
              display:
                activeTab === undefined || activeTab === index
                  ? 'block'
                  : 'none',
            }}>
            {groupTabs.map((tab, index) => {
              return (
                <React.Fragment key={`${tab.label}-${index}`}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ src, alt }: MediaProps) => {
                        const resolvedSrc = src?.startsWith('http')
                          ? src
                          : `${assetBasePath}/${src}`;
                        return resolvedSrc ? (
                          <img src={resolvedSrc} alt={alt} loading="lazy" />
                        ) : (
                          <span>{alt}</span>
                        );
                      },
                      video: ({ poster, children }: MediaProps) => {
                        let posterPath = poster
                          ? `${assetBasePath}/${poster}`
                          : 'MagentaA11yV2/movie.svg';
                        return (
                          <video controls preload="none" poster={posterPath}>
                            {children}
                          </video>
                        );
                      },
                      source: ({ src, type }: MediaProps) => {
                        const resolvedSrc = src?.startsWith('http')
                          ? src
                          : `${assetBasePath}/${src}`;
                        return <source src={resolvedSrc} type={type} />;
                      },
                      a: ({ href, children }) => {
                        const isExternal = (() => {
                          if (!href) return false;
                          try {
                            const url = new URL(href, window.location.href);
                            return url.origin !== window.location.origin;
                          } catch (e) {
                            return false;
                          }
                        })();

                        return isExternal ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${href} in a new tab`}>
                            {children}
                          </a>
                        ) : (
                          <NavLink
                            to={href || '/'}
                            aria-label={`Navigate to ${href}`}>
                            {children}
                          </NavLink>
                        );
                      },
                    }}>
                    {tab.content || ''}
                  </ReactMarkdown>

                  {index < groupTabs.length - 1 && (
                    <Divider orientation={OrientationEnum.HORIZONTAL} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default MarkdownContent;
