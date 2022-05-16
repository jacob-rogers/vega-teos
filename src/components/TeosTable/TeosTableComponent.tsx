import React, { PropsWithChildren } from 'react';
import { block } from 'bem-cn';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import './TeosTableComponent.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/StoreTypes';

export const cn = block('TeosTableComponent');

const TeosTableComponent: React.FC = () => {
  return (
    <div className={cn()}>
      <Text size="m" view="ghost">
        Выберите объект в структуре проекта
      </Text>
    </div>
  );
};

interface WorkspaceProps {
  dummy: boolean;
}

export default React.forwardRef<HTMLDivElement, WorkspaceProps>(
  function Workspace(
    { dummy }: PropsWithChildren<WorkspaceProps>,
    ref,
  ): React.ReactElement {
    const { key, label } = useSelector(({ tree }: RootState) => tree.selectedLeaf)
    return key === '0' ? <TeosTableComponent /> : (
      <div className={cn()} ref={ref}>
        <Text>
          [{key}] || {label}
        </Text>
        <Button label="Добавить сценарий" />
      </div>
    );
  }
);
