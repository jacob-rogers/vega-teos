import React from 'react';
import { Button } from '@consta/uikit/Button';
import { block } from 'bem-cn';

import './ImportButton.css';

export const cn = block('ImportButton');

interface Props {
  handleOpen: () => void;
}

export const ImportButton: React.FC<Props> = ({ handleOpen }) => {
  return (
    <div className={cn('Header')}>
      <Button size="s" view="primary" label="Импорт" onClick={handleOpen} />
    </div>
  );
};
