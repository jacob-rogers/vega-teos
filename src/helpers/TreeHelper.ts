import { TreeItem } from '@gpn-prototypes/vega-ui';

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
