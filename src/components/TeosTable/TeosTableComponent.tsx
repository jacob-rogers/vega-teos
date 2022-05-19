import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import { RootState } from '../../store/StoreTypes';

import './TeosTableComponent.css';

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

type Props = Record<string, never>;

export default React.forwardRef<HTMLDivElement, Props>(function Workspace(
  props,
  ref,
): React.ReactElement {
  const { key, label } = useSelector(({ tree }: RootState) => tree.parentNode);

  const isWidgetShown = !['0', '1'].includes(key); // no parents for root leaf / zero key

  return isWidgetShown ? (
    <div className={cn('CreateScenarioWidget')} ref={ref}>
      <Text weight="bold">{label}</Text>
      <Button size="xs" label="Добавить сценарий" />
    </div>
  ) : (
    <TeosTableComponent />
  );
});
