import { TreeItem } from '@gpn-prototypes/vega-ui';
import arrayToTree from 'array-to-tree';
import _ from 'lodash';

import { ResultProjectTreeStructure } from '../generated/graphql';

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
  nodeList: TreeItemData[];
}

export interface DomainObjectProfileItem {
  name: string;
}

export const getNodeTreeFromAPIData = (
  data: ResultProjectTreeStructure,
): TreeItem<{
  parentId: string | undefined;
  __typename?: 'ResultTeosDomainObjectPath' | undefined;
  code: string;
  value?: string | undefined;
}>[] => {
  const { domainObjects } = data;

  const nodeList = domainObjects.filter((domainObject) =>
    domainObject.domainObjectPath.some((path) => path !== null),
  );

  const flatDO = nodeList
    .map((domainObject) => domainObject.domainObjectPath)
    .flat(1);

  const finalDO = _.uniqWith(
    flatDO.map((fdoItem, idx) => {
      return {
        ...fdoItem,
        name: fdoItem.value,
        parentId: fdoItem.code === 'AREA' ? undefined : flatDO[idx - 1].value,
        nodeList: [],
      };
    }),
    _.isEqual,
  );

  const finalDOTree = arrayToTree(finalDO, {
    childrenProperty: 'nodeList',
    customID: 'value',
    parentProperty: 'parentId',
  });

  return finalDOTree as unknown as any;
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
