import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateVariantLoading } from '@app/store/loader/LoaderSelectors';
import { TreeActions } from '@app/store/tree/TreeActions';
import { selectCurrentVariant } from '@app/store/tree/TreeSelectors';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { block } from 'bem-cn';

import './VariantName.css';

export const cn = block('VariantName');

type Props = {
  isEditing: boolean;
  setIsEditing(isEditing: boolean): void;
};

export const VariantName: React.FC<Props> = ({ isEditing, setIsEditing }) => {
  /** Store */
  const dispatch = useDispatch();
  const currentVariantName = useSelector(selectCurrentVariant)?.name;
  const isVariantUpdating = useSelector(selectUpdateVariantLoading);

  /** State */
  const [newVariantName, setNewVariantName] = useState<string | null>(
    currentVariantName || '',
  );

  /** Handlers */
  const handleRename = () => {
    if (newVariantName) {
      setIsEditing(false);
      dispatch(TreeActions.initCreateOrUpdateVariant(newVariantName));
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleRename();
    }
  };

  return (
    <div className={cn()}>
      {isEditing ? (
        <>
          <TextField
            size="xs"
            view="default"
            placeholder=""
            width="full"
            value={newVariantName}
            required
            onChange={({ value }) => {
              setNewVariantName(value);
            }}
            disabled={isVariantUpdating}
            onKeyUp={handleKeyUp}
            onBlur={handleRename}
          />
          <Button
            onlyIcon
            iconLeft={IconClose}
            size="xs"
            view="clear"
            onClick={() => setIsEditing(!isEditing)}
            className={cnMixSpace({ mL: 'xs' })}
          />
        </>
      ) : (
        currentVariantName && (
          <>
            <Text size="m">{currentVariantName}</Text>
            <div className={cn('Buttons')}>
              <Button
                onlyIcon
                iconLeft={IconEdit}
                size="xs"
                view="clear"
                onClick={() => setIsEditing(true)}
              />
              <Button
                onlyIcon
                iconLeft={IconTrash}
                size="xs"
                view="clear"
                onClick={() => {}}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};
