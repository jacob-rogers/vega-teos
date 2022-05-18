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
    const { key, label } = useSelector(({ tree }: RootState) => tree.parentNode)

    const isWidgetShown = !['0', '1'].includes(key); // no parents for root leaf / zero key

    return isWidgetShown ?  (
      <div className={cn('CreateScenarioWidget')} ref={ref}>
        <Text>
          [{key}] || {label}
        </Text>
        <Button size='xs' label="Добавить сценарий" />
      </div>
    ) : <TeosTableComponent />;
  }
);