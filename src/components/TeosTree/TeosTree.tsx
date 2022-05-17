import React from 'react';
import { useDispatch } from 'react-redux';
import { TableActions } from '@app/store/table/TableActions';
import { TreeActions } from '@app/store/tree/TreeActions';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './TeosTree.css';

export const cn = block('TeosTree');

export const TeosTree: React.FC = () => {
  /** Store */
  const dispatch = useDispatch();

  const handleSetGeoScenario = () => {
    dispatch(
      TreeActions.setCurrentGeoObject({
        title: 'Залежь 1',
      }),
    );
    dispatch(
      TreeActions.setCurrentScenario({
        title: 'Вариант «1»',
      }),
    );
    dispatch(
      TableActions.initTableState({
        geoObjectId: '1',
        scenarioId: '1',
      }),
    );
  };

  return (
    <div className={cn()}>
      <Text size="m" view="ghost">
        Дерево
      </Text>
      <Button
        label="Выбрать сценарий"
        onClick={handleSetGeoScenario}
        size="xs"
      />
    </div>
  );
};
