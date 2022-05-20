import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchNode, TreeItemSearchFilter } from '@app/helpers/TreeHelper';
import { selectTreeLoading } from '@app/store/loader/LoaderSelectors';
import { TreeActions } from '@app/store/tree/TreeActions';
import { selectTreeData } from '@app/store/tree/TreeSelectors';
import { TreeItemData } from '@app/types/TreeTypes';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { TargetData, Tree, TreeItem } from '@gpn-prototypes/vega-ui';
import { block } from 'bem-cn';

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
    const treeDataIsLoading = useSelector(selectTreeLoading);
    const treeData = useSelector(selectTreeData);

    const setCurrentTreeItem = useCallback(
      (currentTreeItem: TreeItem<TreeItemData>) => {
        dispatch(TreeActions.setCurrentTreeItem(currentTreeItem));
      },
      [dispatch],
    );

    const unsetCurrentGeoObject = useCallback(() => {
      dispatch(TreeActions.unsetCurrentTreeItem());
    }, [dispatch]);

    /** Effects */
    useEffect(() => {
      dispatch(TreeActions.initProjectTree());

      return unsetCurrentGeoObject;
    }, [dispatch, unsetCurrentGeoObject]);

    /** Methods */
    const onSelect = (selectedItems: TargetData[]) => {
      if (selectedItems.length) {
        const selectedNode = searchNode(treeData, {
          id: selectedItems[0].id,
        } as TreeItemSearchFilter);

        if (selectedNode) {
          setCurrentTreeItem(selectedNode);
        }
      } else {
        unsetCurrentGeoObject();
      }
    };

    return (
      <div className={cnTree()} ref={ref}>
        <Text
          // eslint-disable-next-line newline-per-chained-call
          className={cnTree('Placeholder').state({ open: isOpen }).toString()}
          size="xs"
          view="ghost"
        >
          Структура проекта
        </Text>
        {treeDataIsLoading ? (
          <Loader size="m" data-testid="table-data-loader" />
        ) : (
          <div className={cnTree('Content').state({ open: isOpen })}>
            <Tree
              nodeList={treeData}
              isDndEnable={false}
              isContextMenuEnable={false}
              onSelectItem={onSelect}
              withVisibilitySwitcher={false}
              withMultiSelect={false}
            />
          </div>
        )}
      </div>
    );
  },
);
