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
import React, { useEffect, useRef, useState } from 'react';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Icons } from 'shared/Icons';

import '../my-criteria/my-criteria.scss';

const MyCriteria: React.FC = () => {
  const { savedCriteria, removeCriteria, clearCriteria } = useCriteria();
  const [copiedContent, setCopiedContent] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabsRef = useRef<HTMLElement>(null);
  const chipsContainerRef = useRef<HTMLDivElement>(null);

  const uniqueLabels: string[] = Array.from(
    new Set(savedCriteria.map((item) => item.tab))
  );

  const activeCriteria = React.useMemo(() => {
    return savedCriteria.filter((item) => item.tab === uniqueLabels[activeTab]);
  }, [savedCriteria, uniqueLabels, activeTab]);

  const criteriaChips: IChipSelectable[] = activeCriteria.map((criterion) => {
    return { id: criterion.id, label: criterion.label };
  });

  const handleDelete = (id: string) => {
    removeCriteria(id);
    if (activeCriteria.length === 1)
      setActiveTab((prev) => Math.max(prev - 1, 0));
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
      {savedCriteria.length > 0 && (
        <div className="MagentaA11y__my-criteria__actions">
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
                onClick={() => clearCriteria(uniqueLabels[activeTab])}
                type={ButtonType.button}
                variant={ButtonVariant.tertiary}
                size={ButtonSize.large}
                label={'Remove All'}
                id="clear-all-btn"
              />
              <Divider orientation={OrientationEnum.HORIZONTAL} />
            </div>
          )}
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

            <Button
              onClick={copyCriteria}
              type={ButtonType.button}
              variant={ButtonVariant.primary}
              size={ButtonSize.large}
              label={copiedContent ? 'Copied!' : 'Copy Criteria'}
              decoration={copiedContent ? Icons.checkmark : Icons.copyFilled}
              id="copy-criteria"
            />
          </div>
        </div>
      )}

      <MarkdownContent tabs={savedCriteria} activeTab={activeTab} />
    </div>
  );
};

export default MyCriteria;
