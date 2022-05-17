import React, { PropsWithChildren, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { TargetData, Tree, TreeItem } from '@gpn-prototypes/vega-ui';
import { block } from 'bem-cn';

import { useTreeApi } from '../../hooks/useTreeApi';
import { TreeFilter } from '../../store/StoreTypes';
import { TableActions } from '../../store/table/TableActions';
import TreeActions from '../../store/tree/TreeActions';

import './Tree.css';

const cnTree = block('Tree');

/* Mocked tree items data */
const rootProps: TreeItem[] = [
  {
    name: 'Участок 1',
    isDraggable: false,
    isDropZone: false,
    id: '1',
    nodeList: [
      {
        name: 'Поднятие 44-23',
        id: '2',
        parentId: '1',
        isDraggable: false,
        nodeList: [
          {
            name: 'Залежь - 78',
            id: '10',
            parentId: '2',
            nodeList: [
              {
                name: 'Ловушка 100',
                isDropZone: false,
                id: '21',
                nodeList: [
                  {
                    name: 'Еще что-нибудь',
                    id: '12',
                    isDropZone: false,
                    isDraggable: false,
                    parentId: '21',
                    nodeList: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Залежь - 79',
            id: '30',
            parentId: '2',
            nodeList: [
              {
                name: 'Ловушка 101',
                id: '17',
                isDropZone: false,
                parentId: '30',
                nodeList: [],
              },
            ],
          },
          {
            name: 'Залежь - 56',
            id: '11',
            parentId: '2',
            nodeList: [],
          },
          {
            name: 'Залежь - 11',
            id: '20',
            parentId: '2',
            nodeList: [],
          },
          {
            name: 'Залежь - 1',
            id: '9',
            parentId: '2',
            nodeList: [],
          },
        ],
      },
      {
        name: 'Поднятие 55-100',
        id: '3',
        parentId: '1',
        isDraggable: false,
        nodeList: [
          {
            name: 'Залежь - 78',
            id: '7',
            parentId: '3',
            nodeList: [],
          },
          {
            name: 'Залежь - 79',
            id: '77',
            parentId: '3',
            nodeList: [],
          },
          {
            name: 'Залежь - 56',
            id: '24',
            parentId: '3',
            nodeList: [],
          },
          {
            name: 'Залежь - 11',
            id: '25',
            parentId: '3',
            nodeList: [],
          },
          {
            name: 'Залежь - 1',
            id: '26',
            parentId: '3',
            nodeList: [],
          },
        ],
      },
      {
        name: 'Поднятие 23-32',
        isDraggable: false,
        id: '4',
        parentId: '1',
        nodeList: [
          {
            name: 'Залежь - 44',
            id: '27',
            parentId: '4',
            nodeList: [],
          },
          {
            name: 'Залежь - 79',
            id: '31',
            parentId: '4',
            nodeList: [],
          },
          {
            name: 'Залежь - 45',
            id: '32',
            parentId: '4',
            nodeList: [],
          },
          {
            name: 'Залежь - 46',
            id: '33',
            parentId: '4',
            nodeList: [
              {
                name: 'Ловушка - 1',
                isDropZone: false,
                id: '41',
                parentId: '33',
                nodeList: [
                  {
                    name: 'Данные по Ловушка - 1',
                    isDropZone: false,
                    id: '34',
                    parentId: '41',
                    nodeList: [],
                  },
                ],
              },
              {
                name: 'Ловушка - 2',
                isDropZone: false,
                id: '43',
                parentId: '33',
                nodeList: [],
              },
              {
                name: 'Ловушка - 3',
                isDropZone: false,
                id: '44',
                parentId: '33',
                nodeList: [],
              },
              {
                name: 'Ловушка - 4',
                isDropZone: false,
                id: '45',
                parentId: '33',
                nodeList: [],
              },
              {
                name: 'Ловушка - 5',
                isDropZone: false,
                id: '46',
                parentId: '33',
                nodeList: [],
              },
            ],
          },
          {
            name: 'Залежь - 1',
            id: '47',
            parentId: '4',
            nodeList: [],
          },
        ],
      },
    ],
  },
];

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
      dispatch(TreeActions.resetState());
    }, [dispatch]);

    const setSelectedLeaf = useCallback(
      (treeFilter: TreeFilter) => {
        dispatch(TreeActions.setParentNode(treeFilter));
      },
      [dispatch],
    );

    /** Methods */
    const onSelect = (selectedItems: TargetData[]) => {
      if (selectedItems.length) {
        // const node = searchInTree(tree, selectedItems[0].id);
        const parentNode = searchNode(rootProps, selectedItems[0].id);

        setSelectedLeaf({
          key: selectedItems[0].id,
          label: selectedItems[0].ref?.current?.innerText || '',
        });
      } else {
        resetState();
      }
    };

    const { sourceTree } = useTreeApi(rootProps);

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
          className={cnTree('Placeholder').state({ open: isOpen })}
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
