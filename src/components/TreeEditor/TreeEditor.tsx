import React, { PropsWithChildren } from 'react';
import { Text } from '@consta/uikit/Text';
import { Tree } from '@gpn-prototypes/vega-ui';
import { cnTreeEditor } from './cn-tree-editor';

import './TreeEditor.css';

const greenIcon = (
  <svg
    width={12}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#00eeaa"
  >
    <path
      d="M0 3.5s3.5-3 7.5-3 4.5 3 4.5 3"
      stroke="#fff"
      strokeOpacity={0.2}
    />
    <path
      d="M4.5 3.5c-4 0-4.5 3-4.5 3v2C1.5 7.667 3.5 6 7 6c2.5 0 4.167 1.667 5 2.5v-2s-3.5-3-7.5-3z"
      fill="currentColor"
    />
    <path
      d="M0 10.5s1.5-1 5.5-1 6.5 1 6.5 1"
      stroke="#fff"
      strokeOpacity={0.2}
    />
  </svg>
);

/* Single icon color used for mocked data */
const icons = {
  'blue-line': greenIcon,
  'orange-line': greenIcon,
  'red-line': greenIcon,
};

interface StructureTreeEditorProps {
  treeItems: any;
  isOpen: boolean;
}

export default React.forwardRef<HTMLDivElement, StructureTreeEditorProps>(
  function TreeEditor(
    { treeItems, isOpen }: PropsWithChildren<StructureTreeEditorProps>,
    ref,
  ): React.ReactElement {
    return (
      <div className={cnTreeEditor()} ref={ref}>
        <Text
          className={cnTreeEditor('Placeholder')
            .state({ open: isOpen })
            .toString()}
          size="xs"
          color="ghost"
        >
          Дерево проекта
        </Text>
        <div className={cnTreeEditor('Content').state({ open: isOpen })}>
          <Tree
            nodeList={treeItems}
            icons={icons}
            isDndEnable={false}
            isContextMenuEnable={false}
            withVisibilitySwitcher={false}
            withMultiSelect={false}
          />
        </div>
      </div>
    );
  },
);
