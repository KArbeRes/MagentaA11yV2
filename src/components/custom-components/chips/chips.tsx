import React from 'react';
import { closeOutlined } from 'shared/icons-svg-exports';
import { IChipGroup, IChipSelectable } from './chips.types';

import './chips.scss';

const Chips: React.FC<IChipGroup> = ({
  variant,
  chips,
  legend,
  name,
  size,
  onSelect,
  onDelete,
}) => {
  return (
    <div className="MagentaA11y-chips" data-size={size}>
      {chips.length > 0 && (
        <fieldset>
          {legend && (
            <legend className="MagentaA11y-chips__legend">{legend}</legend>
          )}
          {chips.map((chip: IChipSelectable) => (
            <div key={chip.id} className="MagentaA11y-chip-container">
              <button
                aria-label={`${chip.label}, delete`}
                id={chip.id}
                onClick={() => onDelete(chip.id)}>
                <span className="MagentaA11y-chip">
                  <span className="MagentaA11y-chip__label--wrapper">
                    <span className="MagentaA11y-chip__label">
                      <span className="MagentaA11y-chip__label--text">
                        {chip.label}
                      </span>
                      {closeOutlined({})}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          ))}
        </fieldset>
      )}
    </div>
  );
};

export default Chips;
