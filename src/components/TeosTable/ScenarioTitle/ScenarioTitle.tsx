import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentScenarioTitle } from '@app/store/tree/TreeSelectors';
import { Button } from '@consta/uikit/Button';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './ScenarioTitle.css';

export const cn = block('ScenarioTitle');

export const ScenarioTitle: React.FC = () => {
  /** Store */
  const currentScenarioTitle = useSelector(selectCurrentScenarioTitle);

  return (
    <div className={cn()}>
      <Text size="m">{currentScenarioTitle}</Text>
      <div className={cn('Buttons')}>
        <Button
          onlyIcon
          iconLeft={IconEdit}
          size="xs"
          view="clear"
          onClick={() => {}}
        />
        <Button
          onlyIcon
          iconLeft={IconTrash}
          size="xs"
          view="clear"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
