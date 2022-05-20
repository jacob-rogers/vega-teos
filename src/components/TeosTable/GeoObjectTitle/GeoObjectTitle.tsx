import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTreeItemName } from '@app/store/tree/TreeSelectors';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './GeoObjectTitle.css';

export const cn = block('GeoObjectTitle');

export const GeoObjectTitle: React.FC = () => {
  /** Store */
  const currentTreeItemName = useSelector(selectCurrentTreeItemName);

  return (
    <div className={cn()}>
      {currentTreeItemName && (
        <Text size="m" weight="bold">
          {currentTreeItemName}
        </Text>
      )}
    </div>
  );
};
