import React, { forwardRef } from 'react';
import { ContextMenuId } from '@app/constants/TableConstants';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconComponent, IconPropSize } from '@consta/uikit/Icon';
import { IconAdd } from '@consta/uikit/IconAdd';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { IconArrowUp } from '@consta/uikit/IconArrowUp';
import { IconClose } from '@consta/uikit/IconClose';
import { IconRemove } from '@consta/uikit/IconRemove';
import { IconTrash } from '@consta/uikit/IconTrash';
import { block } from 'bem-cn';

import './TableContextMenu.css';

const cn = block('TableContextMenu');

type MenuItem = {
  name: string;
  type: 'increase' | 'decrease' | 'addUp' | 'addDown' | 'clean' | 'delete';
  icon: IconComponent;
  iconSize?: IconPropSize;
  disabled?: boolean;
};

function renderLeftSide(item: MenuItem): React.ReactNode {
  const Icon = item.icon;

  return <Icon size={item.iconSize ? item.iconSize : 's'} />;
}

interface IProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default forwardRef(({ id, isOpen, setIsOpen }: IProps, ref: any) => {
  let menuItems: MenuItem[];

  switch (id) {
    case ContextMenuId.Header:
      menuItems = [
        {
          name: 'Увеличить разрядность',
          type: 'increase',
          icon: IconAdd,
          disabled: true,
        },
        {
          name: 'Уменьшить разрядность',
          type: 'decrease',
          icon: IconRemove,
          disabled: true,
        },
      ];
      break;
    default:
      menuItems = [
        {
          name: 'Добавить строку сверху',
          type: 'addUp',
          icon: IconArrowUp,
          disabled: true,
        },
        {
          name: 'Добавить строку снизу',
          type: 'addDown',
          icon: IconArrowDown,
          disabled: true,
        },
        {
          name: 'Очистить строку',
          type: 'clean',
          icon: IconClose,
        },
        {
          name: 'Удалить строку',
          type: 'delete',
          icon: IconTrash,
        },
      ];
      break;
  }

  return (
    <div>
      {isOpen && (
        <ContextMenu
          id={id}
          items={menuItems}
          size="s"
          getLeftSideBar={renderLeftSide}
          getLabel={(item) => item.name}
          getDisabled={(item) => item.disabled}
          onClickOutside={() => setIsOpen(false)}
          anchorRef={ref}
          direction="downStartLeft"
          className={cn('Item').toString()}
        />
      )}
    </div>
  );
});
