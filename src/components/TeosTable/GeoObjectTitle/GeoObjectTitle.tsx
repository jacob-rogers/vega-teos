import React from 'react';
import { GeoScenario } from '@app/interfaces/TreeInterfaces';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './GeoObjectTitle.css';

export const cn = block('GeoObjectTitle');

interface IProps {
  title: string;
}

export const GeoObjectTitle: React.FC<IProps> = (props) => {
  const { title } = props;
  // TODO: это мок, брать данные с бэка
  const objectScenarios: GeoScenario[] = [
    {
      title: 'Вариант 1',
    },
  ];

  return (
    <div className={`${cn()} ${cnMixSpace({ mB: 'xl' })}`}>
      <Text size="m" weight="bold">
        {title}
      </Text>
      {objectScenarios.length ? (
        <Text size="s" view="secondary">
          Для добавления сценария перейдите на вкладку геологические сценарии.
        </Text>
      ) : (
        <Button
          view="primary"
          label="Добавить сценарий"
          onClick={() => {}}
          className={cnMixSpace({ mT: 'l' })}
        />
      )}
    </div>
  );
};
