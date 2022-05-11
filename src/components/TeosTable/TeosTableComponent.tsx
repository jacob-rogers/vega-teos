import React from 'react';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './TeosTableComponent.css';

export const cn = block('TeosTableComponent');

export const TeosTableComponent: React.FC = () => {
  return (
    <div className={cn()}>
      <Text size="m" view="ghost">
        Выберите объект в структуре проекта
      </Text>
    </div>
  );
};
