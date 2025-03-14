import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { MarkdownContentProps, MediaProps } from './markdown-content.types';

import './markdown-content.scss';

const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  assetBasePath,
}) => {
  if (!content.length) {
    return null;
  }

  return (
    <div className="MagentaA11y__content-details">
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
              <NavLink to={href || '/'} aria-label={`Navigate to ${href}`}>
                {children}
              </NavLink>
            );
          },
        }}>
        {content || ''}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
