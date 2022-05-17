import React from 'react';
import { Button } from '@consta/uikit/Button';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './ScenarioTitle.css';

export const cn = block('ScenarioTitle');

interface IProps {
  title: string;
}

export const ScenarioTitle: React.FC<IProps> = (props) => {
  const { title } = props;

  return (
    <div className={`${cn()} ${cnMixSpace({ mB: 'xl' })}`}>
      <Text size="m">{title}</Text>
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
