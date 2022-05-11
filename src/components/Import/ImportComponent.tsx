import React from 'react';
import { Button } from '@consta/uikit/Button';
import { block } from 'bem-cn';

import './ImportComponent.css';

export const cn = block('ImportComponent');

interface Props {
  handleOpen: () => void;
}

export const ImportComponent: React.FC<Props> = ({ handleOpen }) => {
  return (
    <div className={cn('Header')}>
      <Button size="s" view="primary" label="Импорт" onClick={handleOpen} />
    </div>
  );
};
