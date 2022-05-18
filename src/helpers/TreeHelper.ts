import { TreeItem } from '@gpn-prototypes/vega-ui';
import arrayToTree from 'array-to-tree';
import { v4 as uuid } from 'uuid';

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
};

export interface DomainObjectProfileItem {
  name: string;
}

const domainObjectProfileItems = [
  {
    name: 'Геологические сценарии',
  },
  {
    name: 'Сценарии разработки',
  },
  {
    name: 'Гистограммы толщин',
  },
];

export const getNodeTreeFromAPIData = (
  data: ResultProjectTreeStructure,
  projectName,
): TreeItem<TreeItemData>[] => {
  const { domainObjects } = data;

  const nodeList: TreeItem<TreeItemData>[] = domainObjects
    .filter((domainObject) => domainObject.domainObjectPath.some((path) => path !== null))
    .map((domainObject) => {
      const [ rootDomainObject, ...restDomainObjectPath ] = domainObject.domainObjectPath;
      const rootDomainObjectId = domainObject.id || uuid();

      return {
        id: rootDomainObjectId,
        name: rootDomainObject.value || '',
        parentId: 'root',
        nodeList: arrayToTree([
          ...restDomainObjectPath.map((path, idx) => ({
            id: path.code,
            name: path.value || '',
            parentId: idx === 0 ? rootDomainObjectId : restDomainObjectPath[idx-1].code,
            nodeList: [],
          })),
          ...domainObjectProfileItems.map((profileItem: DomainObjectProfileItem) => ({
            id: uuid(),
            name: profileItem.name,
            parentId: restDomainObjectPath[restDomainObjectPath.length-1].code,
            nodeList: [],
          })),
        ], {
          childrenProperty: 'nodeList',
          customID: 'id',
          parentProperty: 'parentId',
        }),
      };
    });

  return nodeList;
}

export const searchNode = (tree: TreeItem[], targetId: string): TreeItem | undefined => {
  function search(item) {
    if (item.id === foundIdx) {
      found = item;
      return true;
    }

    return Array.isArray(item.nodeList) && item.nodeList.some(search);
  }

  let found, foundIdx = targetId;
  found = { id: '0', name: '' };
  tree.some(search);

  foundIdx = found.parentId;
  tree.some(search);

  return found;
};
