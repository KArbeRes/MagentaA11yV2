/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonType } from 'components/custom-components/buttons/button-types';
import IconButton from 'components/custom-components/buttons/icon-button/icon-button';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink, useNavigate } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Icon } from 'shared/Icons';
import { getMarkdownFunctionMap } from 'utils/markdownFunctions';
import { MarkdownContentProps, MediaProps } from './markdown-content.types';

import './markdown-content.scss';

const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  assetBasePath,
}) => {
  const navigate = useNavigate();
  const markdownFunctionMap = getMarkdownFunctionMap(navigate);

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
          a: (props) => {
            const fnKey = (props as any)['data-fn'];
            const eventType = (props as any)['data-event'] || 'onClick';
            const handler = fnKey && markdownFunctionMap[fnKey];
            const { href, children } = props;

            // If a function is defined via data-fn, attach it to the proper event
            if (fnKey && handler) {
              switch (eventType) {
                case 'onMouseDown':
                  return (
                    <a {...props} onMouseDown={handler}>
                      {children}
                    </a>
                  );
                case 'onMouseUp':
                  return (
                    <a {...props} onMouseUp={handler}>
                      {children}
                    </a>
                  );
                default:
                  return (
                    <a {...props} onClick={handler}>
                      {children}
                    </a>
                  );
              }
            }

            // If there's no href and no fnKey, render the <a> as-is
            if (!href) {
              return <a {...props}>{children}</a>;
            }

            // Handle internal vs external links
            const isExternal = (() => {
              try {
                const url = new URL(href, window.location.href);
                return url.origin !== window.location.origin;
              } catch {
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
              <NavLink to={href} aria-label={`Navigate to ${href}`}>
                {children}
              </NavLink>
            );
          },
          button: ({ children, ...props }) => {
            const fnKey = (props as Record<string, unknown>)?.['data-fn'] as
              | string
              | undefined;
            const fn = fnKey && markdownFunctionMap[fnKey];

            const { type: nativeType, ...rest } = props;

            const iconName = (props as Record<string, unknown>)['data-icon'] as
              | Icon
              | undefined;
            const a11yLabel = (props as Record<string, unknown>)[
              'data-label'
            ] as string | undefined;

            const onClick = typeof fn === 'function' ? () => fn() : undefined;

            if (iconName) {
              return (
                <IconButton
                  icon={iconName}
                  onClick={onClick}
                  a11yLabel={a11yLabel || ''}
                  type={
                    nativeType === ButtonType.button ||
                    nativeType === ButtonType.submit ||
                    nativeType === ButtonType.reset
                      ? (nativeType as ButtonType)
                      : undefined
                  }
                  {...rest}
                />
              );
            }

            // ✅ Fallback to regular <button> with onClick
            if (onClick) {
              return (
                <button onClick={onClick} {...props}>
                  {children}
                </button>
              );
            }

            // ✅ Fallback to plain <button>
            return <button {...props}>{children}</button>;
          },

          div: (props) => {
            const fnKey = (props as any)['data-fn'];
            const eventType = (props as any)['data-event'] || 'onClick';
            const handler = fnKey && markdownFunctionMap[fnKey];

            if (!fnKey || !handler) {
              return <div {...props}>{props.children}</div>;
            }

            const commonProps = {
              ...props,
              role: props.role || 'button',
              tabIndex: props.tabIndex ?? 0,

              children: props.children,
            };

            switch (eventType) {
              case 'onMouseDown':
                return <div {...commonProps} onMouseDown={handler} />;
              case 'onMouseUp':
                return <div {...commonProps} onMouseUp={handler} />;
              case 'onClick':
              default:
                return <div {...commonProps} onClick={handler} />;
            }
          },
        }}>
        {content || ''}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
