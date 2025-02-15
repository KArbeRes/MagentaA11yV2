import React from 'react';

import './chips.scss';

interface ChipsProps {
  label?: string;
  onDelete?: () => void;
}

const Chips: React.FC<ChipsProps> = ({ label, onDelete }) => {
  return (
    <div className="MagentaA11y-chips">
      <fieldset>
        <div className="MagentaA11y-chip-container">
          <button aria-label="iPhone 15, delete" className="  " id="phone_1">
            <span className="MagentaA11y-chip ">
              <span className="MagentaA11y-chip__label--wrapper">
                <span className="MagentaA11y-chip__label">
                  <span className="MagentaA11y-chip__label--text">
                    iPhone 15
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false">
                    <path d="M6.40002 18.6538L5.34619 17.6L10.9462 12L5.34619 6.40002L6.40002 5.34619L12 10.9462L17.6 5.34619L18.6538 6.40002L13.0538 12L18.6538 17.6L17.6 18.6538L12 13.0538L6.40002 18.6538Z"></path>
                  </svg>
                </span>
              </span>
            </span>
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Chips;
