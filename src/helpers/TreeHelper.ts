import { DomainObject } from '@app/generated/graphql';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import arrayToTree from 'array-to-tree';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';

// Function that transforms raw domain objects lists into node tree object,
// suitable for rendering in Tree component
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

// Function for searching parent node for specified node id
// in the list of tree items
export const searchParentNode = (
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
