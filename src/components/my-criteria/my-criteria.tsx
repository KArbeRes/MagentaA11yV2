import Chips from 'components/custom-components/chips/chips';
import {
  ChipSize,
  ChipType,
} from 'components/custom-components/chips/chips.types';
import Divider from 'components/custom-components/divider/divider';
import { OrientationEnum } from 'components/custom-components/divider/divider.types';
import React from 'react';

import '../my-criteria/my-criteria.scss';

const MyCriteria: React.FC = () => {
  return (
    <div className="MagentaA11y__my-criteria">
      <div className="MagentaA11y__my-criteria__heading-wrapper">
        <h1 className="MagentaA11y__my-criteria__heading">My Criteria</h1>
        <p className="MagentaA11y__my-criteria__headline">
          Lorem ipsum about this
        </p>
      </div>
      <Divider orientation={OrientationEnum.HORIZONTAL} />
      <Chips
        variant={ChipType.BUTTON}
        chips={[
          {
            label: 'Navigation Landmark',
            id: 'navigation-landmark',
          },
          {
            label: 'Navigation Landmarks',
            id: 'navigation-landmarks',
          },
          {
            label: 'Navigation Landmarkss',
            id: 'navigation-landmarkss',
          },
          {
            label: 'Navigation Landmarksss',
            id: 'navigation-landmarksss',
          },
        ]}
        onDelete={(id: string) => {
          alert(
            `${id}, deleted function will be implemented when criteria saved function is available`
          );
        }}
        size={ChipSize.SMALL}></Chips>
    </div>
  );
};

export default MyCriteria;
