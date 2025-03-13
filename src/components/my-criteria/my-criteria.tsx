import MarkdownContent from 'components/content-display/markdown-content/markdown-content';
import {
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from 'components/custom-components/buttons/button-types';
import Button from 'components/custom-components/buttons/button/button';
import Chips from 'components/custom-components/chips/chips';
import {
  ChipSize,
  ChipType,
  IChipSelectable,
} from 'components/custom-components/chips/chips.types';
import Divider from 'components/custom-components/divider/divider';
import { OrientationEnum } from 'components/custom-components/divider/divider.types';
import { getFirstOverviewLink } from 'components/navigation/top-nav/top-nav';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Icons } from 'shared/Icons';
import { Platforms } from 'shared/types/shared-types';

import '../my-criteria/my-criteria.scss';

const MyCriteria: React.FC = () => {
  const { savedCriteria, removeCriteria, clearCriteria } = useCriteria();
  const [copiedContent, setCopiedContent] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const uniqueLabels = useMemo(() => ['Condensed', 'Gherkin'], []);

  const tabsRef = useRef<HTMLElement>(null);
  const chipsContainerRef = useRef<HTMLDivElement>(null);
  const emptyStateRef = useRef<HTMLDivElement>(null);

  const activeCriteria = React.useMemo(() => {
    return savedCriteria.filter((item) => item.tab === uniqueLabels[activeTab]);
  }, [savedCriteria, uniqueLabels, activeTab]);

  const criteriaChips: IChipSelectable[] = activeCriteria.map((criterion) => {
    return { id: criterion.id, label: criterion.label };
  });

  const focusFirstLinkInEmptyState = () => {
    if (emptyStateRef.current) {
      const firstLink = emptyStateRef.current.querySelector('a');
      if (firstLink) {
        (firstLink as HTMLElement).focus();
      }
    }
  };

  const handleDelete = (id: string) => {
    const index = criteriaChips.findIndex((chip) => chip.id === id);
    const updatedChips = criteriaChips.filter((chip) => chip.id !== id);
    let nextFocusIndex = Math.min(index, updatedChips.length - 1);

    removeCriteria(id);

    setTimeout(() => {
      if (updatedChips.length > 0 && chipsContainerRef.current) {
        const chipButtons =
          chipsContainerRef.current.querySelectorAll('button');
        if (chipButtons[nextFocusIndex]) {
          (chipButtons[nextFocusIndex] as HTMLElement).focus();
        }
      } else if (updatedChips.length === 0) {
        focusFirstLinkInEmptyState();
      }
    }, 0);
  };

  const copyCriteria = (): void => {
    if (savedCriteria.length === 0) return;

    const combinedContent = activeCriteria
      .map((criterion) => criterion.content.trim())
      .join('\n\n---\n\n');

    navigator.clipboard
      .writeText(combinedContent)
      .then(() => {
        setCopiedContent(combinedContent);
      })
      .catch((err) => console.error('Failed to copy content:', err));
  };

  const handleClearCriteria = () => {
    clearCriteria(uniqueLabels[activeTab]);

    setTimeout(() => {
      focusFirstLinkInEmptyState();
    }, 0);
  };

  useEffect(() => {
    if (!copiedContent) return;

    const interval = setInterval(async () => {
      const isStillInClipboard = await isContentInClipboard(copiedContent);
      if (!isStillInClipboard) setCopiedContent(null);
    }, 3000);

    return () => clearInterval(interval);
  }, [copiedContent]);

  const isContentInClipboard = async (content: string) => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      return clipboardText === content;
    } catch (err) {
      console.error('Failed to read clipboard content:', err);
      return false;
    }
  };

  return (
    <div className="MagentaA11y__my-criteria">
      <div className="MagentaA11y__my-criteria__heading-wrapper">
        <h1 className="MagentaA11y__my-criteria__heading">My Criteria</h1>
        <p className="MagentaA11y__my-criteria__headline">
          Lorem ipsum about this
        </p>
      </div>
      <Divider orientation={OrientationEnum.HORIZONTAL} />
      <div className="MagentaA11y__my-criteria__actions">
        <div className="MagentaA11y__my-criteria__tab-container">
          <md-tabs ref={tabsRef} aria-label="Criteria options" role="tablist">
            {uniqueLabels.map((label, index) => {
              const formattedLabel = label.toLowerCase().replace(/\s+/g, '-');

              return (
                <md-primary-tab
                  key={label}
                  aria-selected={activeTab === index ? 'true' : 'false'}
                  id={`${formattedLabel}-tab`}
                  role="tab"
                  aria-controls={`${formattedLabel}-tabpanel`}
                  onClick={() => setActiveTab(index)}>
                  {label}
                </md-primary-tab>
              );
            })}
          </md-tabs>

          {criteriaChips.length > 0 && (
            <Button
              onClick={copyCriteria}
              type={ButtonType.button}
              variant={ButtonVariant.primary}
              size={ButtonSize.large}
              label={copiedContent ? 'Copied!' : 'Copy Criteria'}
              decoration={copiedContent ? Icons.checkmark : Icons.copyFilled}
              id="copy-criteria"
            />
          )}
        </div>
        <Chips
          variant={ChipType.BUTTON}
          chips={criteriaChips}
          onDelete={handleDelete}
          size={ChipSize.SMALL}
          legend="Saved Criteria"
          ref={chipsContainerRef}
        />
        {activeCriteria.length > 1 && (
          <div className="w-100">
            <Button
              onClick={handleClearCriteria}
              type={ButtonType.button}
              variant={ButtonVariant.tertiary}
              size={ButtonSize.large}
              label={`Remove All (${criteriaChips.length})`}
              id="clear-all-btn"
            />
            <Divider orientation={OrientationEnum.HORIZONTAL} />
          </div>
        )}
      </div>

      {activeCriteria.length > 0 ? (
        <MarkdownContent tabs={activeCriteria} />
      ) : (
        <div className="MagentaA11y__my-criteria--empty" ref={emptyStateRef}>
          <p>
            No Criteria Available, check out{' '}
            <Link to={`${getFirstOverviewLink(Platforms.WEB)}`}>
              Web Criteria
            </Link>{' '}
            or{' '}
            <Link to={`${getFirstOverviewLink(Platforms.NATIVE)}`}>
              Native Criteria
            </Link>{' '}
            to save some criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyCriteria;
