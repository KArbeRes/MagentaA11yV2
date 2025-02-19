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
  const { savedCriteria, removeCriteria } = useCriteria();
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  const chipsContainerRef = useRef<HTMLDivElement>(null);

  const criteriaChips: IChipSelectable[] = savedCriteria.map((criteria) => {
    return { id: criteria.id, label: criteria.id.replaceAll('-', ' ') };
  });

  const handleDelete = (id: string) => {
    const chipButtons =
      chipsContainerRef.current?.querySelectorAll<HTMLButtonElement>('button');

    if (!chipButtons || chipButtons.length === 0) {
      removeCriteria(id);
      return;
    }

    const index = Array.from(chipButtons).findIndex(
      (chip) => chip.dataset.id === id
    );

    removeCriteria(id);

    if (chipButtons.length > 1) {
      const nextChip =
        chipButtons[index] || chipButtons[index - 1] || chipButtons[0];
      nextChip?.focus();
    }
  };

  const copyCriteria = (): void => {
    if (savedCriteria.length === 0) return;

    const combinedContent = savedCriteria
      .map((criteria) => criteria.content.trim())
      .join('\n\n---\n\n');

    navigator.clipboard
      .writeText(combinedContent)
      .then(() => {
        setCopiedContent(combinedContent);
      })
      .catch((err) => console.error('Failed to copy content:', err));
  };

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
      <div ref={chipsContainerRef}>
        <Chips
          variant={ChipType.BUTTON}
          chips={criteriaChips}
          onDelete={handleDelete}
          size={ChipSize.SMALL}
        />
      </div>
      {savedCriteria.length > 0 && (
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

      <MarkdownContent tabs={savedCriteria} />
    </div>
  );
};

export default MyCriteria;
