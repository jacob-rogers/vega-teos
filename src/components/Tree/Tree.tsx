import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@consta/uikit/Text';
import { TargetData, Tree, TreeItem } from '@gpn-prototypes/vega-ui';
import { block } from 'bem-cn';

import {
  getNodeTreeFromAPIData,
  searchNode,
  TreeItemData,
} from '../../helpers/TreeHelper';
import projectService from '../../services/ProjectService';
import { RootState, TreeFilter } from '../../store/StoreTypes';
import TreeActions from '../../store/Tree/TreeActions';

import './Tree.css';

const cnTree = block('Tree');

interface StructureTreeEditorProps {
  isOpen: boolean;
}

export default React.forwardRef<HTMLDivElement, StructureTreeEditorProps>(
  function TreeEditor(
    { isOpen }: PropsWithChildren<StructureTreeEditorProps>,
    ref,
  ): React.ReactElement {
    /** Store */
    const dispatch = useDispatch();

    const resetState = useCallback(() => {
      dispatch(TreeActions.unsetSelectedResource());
    }, [dispatch]);

    const setSelectedLeaf = useCallback(
      (treeFilter: TreeFilter) => {
        dispatch(TreeActions.setSelectedResource(treeFilter));
      },
      [dispatch],
    );

    const initProjectTree = useCallback(
      (data: TreeItem<TreeItemData>[]) => {
        dispatch(TreeActions.initProjectTree(data));
      },
      [dispatch],
    );

    useEffect(() => {
      async function getProjectTree() {
        const data = await projectService.getProjectTree();

        if (data) {
          const nodes = getNodeTreeFromAPIData(data);

          initProjectTree(nodes);
        }
      }
      getProjectTree();
    }, [initProjectTree]);

    const sourceTree = useSelector(({ tree }: RootState) => tree.projectTree);

    /** Methods */
    const onSelect = (selectedItems: TargetData[]) => {
      console.log('selectedItems', selectedItems);
      if (selectedItems.length) {
        const parentNode = searchNode(sourceTree, selectedItems[0].id);

        if (parentNode) {
          setSelectedLeaf({
            key: parentNode.id,
            label: parentNode.name,
          });
        } else {
          resetState();
        }
      } else {
        resetState();
      }
    };

    const tree = useSelector(({ tree }: RootState) => tree.projectTree);

    const handleSetGeoScenario = () => {
      dispatch(
        TreeActions.setCurrentAttributes({
          object: { title: 'Залежь 1' },
          scenario: {
            title: 'Вариант «1»',
          },
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
      <div className={cnTree()} ref={ref}>
        <Text
          // eslint-disable-next-line newline-per-chained-call
          className={cnTree('Placeholder').state({ open: isOpen }).toString()}
          size="xs"
          view="ghost"
        >
          Дерево проекта
        </Text>
        <Button
          label="Выбрать сценарий"
          onClick={handleSetGeoScenario}
          size="xs"
        />
        <div className={cnTree('Content').state({ open: isOpen })}>
          <Tree
            nodeList={sourceTree}
            isDndEnable={false}
            isContextMenuEnable={false}
            onSelectItem={onSelect}
            withVisibilitySwitcher={false}
            withMultiSelect={false}
          />
        </div>
      </div>
    );
  },
);
