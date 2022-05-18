import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentGeoObjectTitle,
  selectGeoObjectScenarios,
} from '@app/store/tree/TreeSelectors';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './GeoObjectTitle.css';

export const cn = block('GeoObjectTitle');

export const GeoObjectTitle: React.FC = () => {
  /** Store */
  const currentGeoObjectTitle = useSelector(selectCurrentGeoObjectTitle);
  const geoObjectScenarios = useSelector(selectGeoObjectScenarios);

  return (
    <div className={cn()}>
      <Text size="m" weight="bold">
        {currentGeoObjectTitle}
      </Text>
      {geoObjectScenarios.length ? (
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
