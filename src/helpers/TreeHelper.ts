import { DomainObject } from '@app/generated/graphql';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import arrayToTree from 'array-to-tree';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';

export const getNewTree = (
  nodes: TreeItem[],
  transferringIds: string[],
  receivingId: string,
): Array<TreeItem> => {
  const transferringElements: Array<TreeItem> = [];

  const deepClone = (nodeList: TreeItem[]): Array<TreeItem> => {
    const clone = (item: TreeItem): TreeItem => {
      type TreeItemKeysType = keyof TreeItem;
      const itemKeys = Object.keys(item) as Array<TreeItemKeysType>;

      let newTreeItem = {} as TreeItem;

      itemKeys.forEach((prop: TreeItemKeysType) => {
        const propVal = item[prop];

        if (prop === 'nodeList' && Array.isArray(propVal)) {
          newTreeItem.nodeList = deepClone(propVal);
        } else {
          newTreeItem = { ...newTreeItem, [prop]: propVal };
        }
      });

      return newTreeItem;
    };

    return nodeList.reduce((acc: Array<TreeItem>, node: TreeItem) => {
      if (transferringIds?.includes(node.id)) {
        transferringElements.push({ ...node, parentId: receivingId });

        return acc;
      }

      acc.push(clone(node));

      return acc;
    }, []);
  };

  const getReceiverElement = (
    id: string,
    nodeList: Array<TreeItem>,
  ): TreeItem | undefined => {
    let result;

    const searchObject = (list: TreeItem[]): void => {
      list.forEach((node: TreeItem) => {
        if (node.id === id) {
          result = node;
        }

        if (node.nodeList) {
          searchObject(node.nodeList);
        }
      });
    };

    searchObject(nodeList);

    return result;
  };

  const newTree = deepClone(nodes);

  const receiverElement = getReceiverElement(receivingId, newTree);

  transferringElements.forEach((element: TreeItem) =>
    receiverElement?.nodeList?.push(element),
  );

  return newTree;
};
export interface TreeItemData {
  id: string;
  name: string;
  parentId?: string;
  nodeList: TreeItemData[];
}

export interface DomainObjectProfileItem {
  name: string;
}

export const getNodeTree = (data: { domainObjects: DomainObject[] }) => {
  const { domainObjects } = data;

  const domainObjectsWithRealPaths = domainObjects.filter((domainObject) =>
    domainObject.domainObjectPath.some((path) => path !== null),
  );

  const domainObjectsFlattened = domainObjectsWithRealPaths
    .map((domainObject) => domainObject.domainObjectPath)
    .flat(1);

  const treeNodesList = _.uniqWith(
    domainObjectsFlattened.map((fdoItem, idx) => {
      const vid = fdoItem.code === 'MINE' ? uuid() : fdoItem.value;

      return {
        id: vid,
        name: fdoItem.value || '',
        parentId:
          fdoItem.code === 'AREA'
            ? undefined
            : domainObjectsFlattened[idx - 1].value,
        nodeList:
          fdoItem.code === 'MINE'
            ? [
                {
                  id: uuid(),
                  name: 'Геологические сценарии',
                  parentId: vid,
                  nodeList: [],
                },
                {
                  id: uuid(),
                  name: 'Cценарии разработки',
                  parentId: vid,
                  nodeList: [],
                },
                {
                  id: uuid(),
                  name: 'Гистограммы толщин',
                  parentId: vid,
                  nodeList: [],
                },
              ]
            : [],
      };
    }),
    _.isEqual,
  );

  const resultTree = arrayToTree(treeNodesList, {
    childrenProperty: 'nodeList',
    customID: 'id',
    parentProperty: 'parentId',
  });

  return resultTree;
};

export const searchNode = (
  tree: TreeItem[],
  targetId: string,
): TreeItem | undefined => {
  let found;
  let foundIdx = targetId;

  function search(item) {
    if (item.id === foundIdx) {
      found = item;

      return true;
    }

    return Array.isArray(item.nodeList) && item.nodeList.some(search);
  }

  found = { id: '0', name: '' };
  tree.some(search);

  foundIdx = found.parentId;
  tree.some(search);

  return found;
};
