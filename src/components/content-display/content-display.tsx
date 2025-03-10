/* eslint-disable jsx-a11y/no-redundant-roles */
import {
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from 'components/custom-components/buttons/button-types';
import Button from 'components/custom-components/buttons/button/button';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink, useLocation } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Icons } from 'shared/Icons';
import { Platforms } from 'shared/types/shared-types';
import Cards from '../custom-components/cards/cards';
import { SideNavItem } from '../navigation/nav.types';

import '../../styles/_code-blocks.scss';
import './content-display.scss';

interface ContentDisplayProps {
  platform: Platforms;
  items: SideNavItem[];
}

type MediaProps = {
  src?: string;
  alt?: string;
  type?: string;
  children?: React.ReactNode;
  poster?: string;
};

const ASSET_BASE_PATH = '/MagentaA11yV2/content/assets';

const ContentDisplay: React.FC<ContentDisplayProps> = ({ platform, items }) => {
  const location = useLocation();
  const tabsRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  const { savedCriteria, saveCriteria, removeCriteria } = useCriteria();

  const handleToggleCriteria = () => {
    const activeLabel = tabs[activeTab]?.label;
    const activeContent = tabs[activeTab]?.content;
    const componentName = location.pathname.split('/').slice(-1)[0];

    if (!activeContent) return;

    const criteriaId = `${componentName}-${activeLabel.toLowerCase()}`;

    // Check if the criteria is already saved
    const isAlreadySaved = savedCriteria.some((item) => item.id === criteriaId);

    if (isAlreadySaved) {
      removeCriteria(criteriaId); // Remove if already saved
    } else {
      saveCriteria({
        id: criteriaId,
        label: activeLabel,
        content: activeContent,
        savedAt: new Date(),
      });
    }
  };

  // Helper function to find the active item
  const findItemByPath = (
    items: SideNavItem[],
    path: string,
    parentPath = `/${platform}-criteria`
  ): SideNavItem | null => {
    for (const item of items) {
      const fullPath = `${parentPath}/${item.name}`;
      if (path === fullPath || path === `${fullPath}/overview`) return item;

      if (item.children) {
        const found = findItemByPath(item.children, path, fullPath);
        if (found) return found;
      }
    }
    return null;
  };

  // Get the current item based on the route
  const currentItem = findItemByPath(items, location.pathname);

  // Check if the current route is an overview route
  const isOverviewRoute = location.pathname.endsWith('/overview');

  useEffect(() => {
    const interval = setInterval(async () => {
      if (copiedContent) {
        const isStillInClipboard = await isContentInClipboard(copiedContent);
        if (!isStillInClipboard) {
          setCopiedContent(null);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [copiedContent]);

  // Track active tab changes
  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const tabIndex = (
        event.target as HTMLElement & { activeTabIndex: number }
      ).activeTabIndex;
      setActiveTab(tabIndex);
    };

    const tabs = tabsRef.current;

    if (tabs) {
      tabs.addEventListener('change', handleTabChange);
    }
    return () => {
      if (tabs) {
        setActiveTab(0);
        tabs.removeEventListener('change', handleTabChange);
      }
    };
  }, [location.pathname]);

  if (!currentItem) return <div>No content available</div>;

  const {
    label,
    generalNotes,
    gherkin,
    condensed,
    criteria,
    videos,
    developerNotes,
    androidDeveloperNotes,
    iosDeveloperNotes,
    children,
  } = currentItem;

  const tabs = [
    { content: condensed, label: 'Condensed' },
    { content: gherkin, label: 'Gherkin' },
    { content: criteria, label: 'Criteria' },
    { content: developerNotes, label: 'Developer Notes' },
    { content: androidDeveloperNotes, label: 'Android Developer Notes' },
    { content: iosDeveloperNotes, label: 'iOS Developer Notes' },
    { content: videos, label: 'Videos' },
  ].filter((tab) => tab.content);

  const copyTabContent = (content: string) => {
    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setCopiedContent(content);
        })
        .catch((err) => {
          console.error('Failed to copy content: ', err);
        });
    }
  };

  const isContentInClipboard = async (content: string) => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      return clipboardText === content;
    } catch (err) {
      console.error('Failed to read clipboard content: ', err);
      return false;
    }
  };

  let actionsButtonsVisible = ['Condensed', 'Gherkin', 'Criteria'].includes(
    tabs[activeTab]?.label
  );

  let criteriaIsCopied = copiedContent === tabs[activeTab]?.content;
  const isCriteriaSaved = savedCriteria.some(
    (item) =>
      item.id ===
      `${location.pathname.split('/').slice(-1)[0]}-${tabs[
        activeTab
      ]?.label.toLowerCase()}`
  );

  return (
    <div className="MagentaA11y__nav-display">
      <div className="MagentaA11y__nav-display__intro">
        <h1 className="MagentaA11y__nav-display__title">{label}</h1>

        {generalNotes && !isOverviewRoute && (
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p {...props} />,
              table: ({ node, ...props }) => <table {...props} />,
              th: ({ node, ...props }) => <th {...props} />,
              td: ({ node, ...props }) => <td {...props} />,
              tr: ({ node, ...props }) => <tr {...props} />,
            }}>
            {generalNotes}
          </ReactMarkdown>
        )}

        <Button
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          type={ButtonType.button}
          variant={ButtonVariant.secondary}
          size={ButtonSize.large}
          label={'Criteria'}
          decoration={Icons.listOutlined}
          id="criteria-button"></Button>
      </div>

      {isOverviewRoute && children && children.length > 0 && (
        <Cards
          items={children.map((child) => ({
            title: child.label,
            description: child.generalNotes || undefined,
            link: `${location.pathname.replace(/\/overview$/, '')}/${
              child.name
            }`,
          }))}
        />
      )}

      {!isOverviewRoute && tabs.length > 0 && (
        <div className="MagentaA11y__nav-display__content">
          <div className="MagentaA11y__nav-display__content-actions">
            {/* Tabs */}
            <md-tabs
              ref={tabsRef}
              aria-label="Content options for syntax"
              role="tablist">
              {tabs.map((tab, index) => (
                <md-primary-tab
                  key={tab.label}
                  aria-selected={activeTab === index ? 'true' : 'false'}
                  id={`${tab.label.toLowerCase().replace(' ', '-')}-tab`}
                  role="tab">
                  {tab.label}
                </md-primary-tab>
              ))}
            </md-tabs>
            {actionsButtonsVisible && (
              <div className="MagentaA11y__nav-display__content-actions__buttons">
                <Button
                  onClick={() => copyTabContent(tabs[activeTab].content || '')}
                  type={ButtonType.button}
                  variant={ButtonVariant.primary}
                  size={ButtonSize.large}
                  label={criteriaIsCopied ? 'Copied!' : 'Copy Criteria'}
                  decoration={
                    criteriaIsCopied ? Icons.checkmark : Icons.copyFilled
                  }></Button>
                <Button
                  onClick={handleToggleCriteria}
                  type={ButtonType.button}
                  variant={ButtonVariant.tertiary}
                  size={ButtonSize.large}
                  label={isCriteriaSaved ? 'Remove Criteria' : 'Save Criteria'}
                  decoration={
                    isCriteriaSaved
                      ? Icons.trashcanFilled
                      : Icons.bookmarkFilled
                  }></Button>
              </div>
            )}
          </div>

          <div className="MagentaA11y__nav-display__content-details">
            {tabs.map((tab, index) => {
              return (
                <div
                  key={tab.label}
                  style={{ display: activeTab === index ? 'block' : 'none' }}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => <p {...props} />,
                      table: ({ node, ...props }) => <table {...props} />,
                      th: ({ node, ...props }) => <th {...props} />,
                      td: ({ node, ...props }) => <td {...props} />,
                      tr: ({ node, ...props }) => <tr {...props} />,
                      img: ({ src, alt }: MediaProps) => {
                        const resolvedSrc = src?.startsWith('http')
                          ? src
                          : `${ASSET_BASE_PATH}/${src}`;
                        return resolvedSrc ? (
                          <img src={resolvedSrc} alt={alt} loading="lazy" />
                        ) : (
                          <span>{alt}</span>
                        );
                      },
                      video: ({ poster, children }: MediaProps) => {
                        let posterPath = poster
                          ? `${ASSET_BASE_PATH}/${poster}`
                          : 'MagentaA11yV2/movie.svg';

                        return (
                          <video
                            controls
                            preload="none"
                            poster={`${posterPath}`}>
                            {children}
                          </video>
                        );
                      },
                      source: ({ src, type }: MediaProps) => {
                        const resolvedSrc = src?.startsWith('http')
                          ? src
                          : `${ASSET_BASE_PATH}/${src}`;
                        return <source src={resolvedSrc} type={type} />;
                      },
                      a: ({ href, children }) => {
                        const isExternal = (() => {
                          if (!href) return false; // Treat undefined href as relative
                          try {
                            const url = new URL(href, window.location.href);
                            return url.origin !== window.location.origin; // External if origins differ
                          } catch (e) {
                            return false; // Invalid URLs are treated as relative
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
                            to={href ? href : '/'}
                            aria-label={`Navigate to ${href}`}>
                            {children}
                          </NavLink>
                        );
                      },
                    }}>
                    {tab.content || ''}
                  </ReactMarkdown>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
