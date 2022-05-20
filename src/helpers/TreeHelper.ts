import {
  DevelopmentScenarioVariantL,
  DomainObjectL,
  DomainObjectPathLevel,
  DomainScenarioEnum,
  GeoLogicalScenarioVariantL,
  Maybe,
  ThicknessHistogramVariantL,
} from '@app/generated/graphql';
import { TreeItemData } from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import arrayToTree from 'array-to-tree';
import {
  get as _get,
  isEqual as _isEqual,
  mergeWith as _mergeWith,
  uniqWith as _uniqWith,
} from 'lodash';
import { v4 as uuid } from 'uuid';

const mergeCustomizer = (
  objValue: string | number | Array<string | number>,
  srcValue: string | number | Array<string | number>,
  k: string,
) => {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return objValue.concat(srcValue);
  }

  if (k === 'id') {
    return uuid();
  }

  return undefined;
};

export function mergeObjectsInUnique<T>(array: T[], properties: string[]): T[] {
  const newArray = new Map();

  array.forEach((item: T) => {
    const propertyValue = properties.reduce((prev, curr) => {
      return `${prev}${_get(curr, item as any)}`;
    }, '');

    if (newArray.has(propertyValue)) {
      newArray.set(
        propertyValue,
        _mergeWith(mergeCustomizer, item, newArray.get(propertyValue)),
      );
    } else {
      newArray.set(propertyValue, item);
    }
  });

  return Array.from(newArray.values());
}

const getScenariosList = (
  type: DomainScenarioEnum,
  domainObject,
): TreeItem<TreeItemData>[] => {
  let objectKey = '';

  switch (type) {
    case DomainScenarioEnum.GeoScenarios: {
      objectKey = 'domainObjectScenarios';

      break;
    }

    case DomainScenarioEnum.DevScenarios: {
      objectKey = 'domainObjectDevelopmentScenarios';

      break;
    }

    case DomainScenarioEnum.ThicknessHist: {
      objectKey = 'domainObjectThicknessHistogramsScenarios';

      break;
    }

    default: {
      break;
    }
  }

  const currentDomainObject = domainObject[objectKey];
  const scenariosNodeList: TreeItem<TreeItemData>[] =
    currentDomainObject &&
    Array.isArray(currentDomainObject) &&
    currentDomainObject?.length
      ? currentDomainObject.map((scenario) => {
          const treeItem: TreeItem<TreeItemData> = {
            id: scenario?.id,
            name: scenario?.name || '',
            parentId: DomainScenarioEnum.GeoScenarios,
            nodeList: [],
          };

          return treeItem;
        })
      : [];

  return scenariosNodeList;
};

type FlattenedDomainObject = {
  domainObjectId: string;
  domainObjectPath: Array<Maybe<DomainObjectPathLevel>>;
  domainObjectGeologicalScenarios:
    | Maybe<GeoLogicalScenarioVariantL>[]
    | undefined;
  domainObjectDevelopmentScenarios:
    | Maybe<DevelopmentScenarioVariantL>[]
    | undefined;
  domainObjectThicknessHistogramsScenarios:
    | Maybe<ThicknessHistogramVariantL>[]
    | undefined;
};

// Function that transforms raw domain objects lists into node tree object,
// suitable for rendering in Tree component
export const getNodeTree = (data: {
  domainObjects: Array<Maybe<DomainObjectL>>;
}): TreeItem<TreeItemData>[] => {
  const { domainObjects } = data;

  const domainObjectsWithRealPaths = domainObjects.filter((domainObject) =>
    domainObject?.domainObjectPath.some((path) => path !== null),
  );

  const domainObjectsFlattened = domainObjectsWithRealPaths
    .map(
      (domainObject): FlattenedDomainObject => ({
        domainObjectId: domainObject?.id as string,
        domainObjectPath: domainObject?.domainObjectPath as Array<
          Maybe<DomainObjectPathLevel>
        >,
        domainObjectGeologicalScenarios: domainObject?.geologicalScenarios,
        domainObjectDevelopmentScenarios: domainObject?.developmentScenarios,
        domainObjectThicknessHistogramsScenarios:
          domainObject?.thicknessHistograms,
      }),
    )
    .flat(1);

  console.log('domainObjectsFlattened', domainObjectsFlattened);

  // const customizer: _.IsEqualCustomizer = (objValue, othValue) => {
  //   const { id: objValueId, ...restObjValue } = objValue;
  //   const { id: othValueId, ...restOthValue } = othValue;

  //   return restObjValue === restOthValue;
  // };

  const treeNodesList = _uniqWith(
    domainObjectsFlattened
      .map((domainObject) =>
        domainObject.domainObjectPath.map((path, idx) => {
          const vid =
            idx === domainObject.domainObjectPath.length - 1
              ? domainObject.domainObjectId
              : path?.value;

          return {
            id: vid,
            name: path?.value || '(?) заглушка',
            parentId:
              idx === 0
                ? undefined
                : domainObject.domainObjectPath[idx - 1]?.value,
            nodeList:
              idx === domainObject.domainObjectPath.length - 1
                ? [
                    {
                      id: DomainScenarioEnum.GeoScenarios.toString(),
                      name: 'Геологические сценарии',
                      parentId: vid,
                      nodeList: getScenariosList(
                        DomainScenarioEnum.GeoScenarios,
                        domainObject,
                      ),
                    },
                    {
                      id: DomainScenarioEnum.DevScenarios.toString(),
                      name: 'Cценарии разработки',
                      parentId: vid,
                      nodeList: getScenariosList(
                        DomainScenarioEnum.DevScenarios,
                        domainObject,
                      ),
                    },
                    {
                      id: DomainScenarioEnum.GeoScenarios.toString(),
                      name: 'Гистограммы толщин',
                      parentId: vid,
                      nodeList: getScenariosList(
                        DomainScenarioEnum.ThicknessHist,
                        domainObject,
                      ),
                    },
                  ]
                : [],
          };
        }),
      )
      .flat(1) as TreeItem<TreeItemData>[],
    // .flat(1),
    _isEqual,
    // _.isEqualWith(customizer),
  );

  const resultTree = arrayToTree(treeNodesList, {
    childrenProperty: 'nodeList',
    customID: 'id',
    parentProperty: 'parentId',
  });

  return resultTree as TreeItem<TreeItemData>[];
};

export interface TreeItemSearchFilter {
  id?: string;
  name?: string;
}

// Function for searching node for specified node id in the list of tree items
export const searchNode = (
  tree: TreeItem[],
  searchFilter: TreeItemSearchFilter,
): TreeItem<TreeItemData> | undefined => {
  let found;

  function search(item) {
    if (
      (searchFilter.id && searchFilter.id === item.id) ||
      (searchFilter.name && searchFilter.name === item.name)
    ) {
      found = item;

      return true;
    }

    return Array.isArray(item.nodeList) && item.nodeList.some(search);
  }

  found = { id: '0', name: '' };

  if (searchFilter.id && searchFilter.name) {
    return found;
  }

  tree.some(search);

  return found;
};
