import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchParentNode } from '@app/helpers/TreeHelper';
import { selectTreeLoading } from '@app/store/loader/LoaderSelectors';
import { TableActions } from '@app/store/table/TableActions';
import { TreeActions } from '@app/store/tree/TreeActions';
import { selectTreeData } from '@app/store/tree/TreeSelectors';
import { TreeFilter } from '@app/types/TreeTypes';
import { Button } from '@consta/uikit/Button';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { TargetData, Tree } from '@gpn-prototypes/vega-ui';
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

    const resetState = useCallback(() => {
      dispatch(TreeActions.unsetSelectedResource());
    }, [dispatch]);

    const setCurrentGeoObject = useCallback(
      (treeFilter: TreeFilter) => {
        dispatch(TreeActions.setCurrentGeoObject({ title: treeFilter.label }));
      },
      [dispatch],
    );

    /** Effects */
    useEffect(() => {
      dispatch(TreeActions.initProjectTree());
    }, [dispatch]);

    /** Methods */
    const onSelect = (selectedItems: TargetData[]) => {
      if (selectedItems.length) {
        const parentNode = searchParentNode(treeData, selectedItems[0].id);

        if (parentNode) {
          setCurrentGeoObject({
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
          Структура проекта
        </Text>
        {treeDataIsLoading ? (
          <Loader size="m" data-testid="table-data-loader" />
        ) : (
          <>
            {isOpen && (
              <Button
                label="Выбрать сценарий"
                onClick={handleSetGeoScenario}
                size="xs"
              />
            )}
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
          </>
        )}
      </div>
    );
  },
);
