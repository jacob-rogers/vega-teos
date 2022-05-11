import React from 'react';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './TeosTreeComponent.css';

export const cn = block('TeosTreeComponent');

export const TeosTreeComponent: React.FC = () => {
  return (
    <div className={cn()}>
      <Text size="m" view="ghost">
        Дерево
      </Text>
    </div>
  );
};
