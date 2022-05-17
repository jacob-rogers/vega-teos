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

const nonRootNode = (targetId: number): boolean => {
  return targetId !== 1;
}

export const searchNode = (tree: TreeItem[], targetId: number): string | undefined => {

    function search(item) {
        if (item.id === foundIdx) {
            found = item;
            return true;
        }

        return Array.isArray(item.nodeList) && item.nodeList.some(iter);
    }

    let found, foundIdx = targetId;
    found = { id: '0' };
    tree.some(search);

    foundIdx = found.parentId;
    tree.some(search);

    return found;
}


  const iter = () => {
    if (n.nodeList.length === 0) {

    }
  }



  tree.forEach((node: TreeItem) => {
    if (targetId <= 0) {
      return undefined;
    }

    if (nonRootNode(targetId) && node.id === targetId.toString()) {
      return node.parentId;
    }

    return searchParent(node.nodeList, targetId);
  });
}
