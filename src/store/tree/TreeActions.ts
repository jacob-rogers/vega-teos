import {
  Attributes,
  GeoObject,
  GeoScenario,
  TreeFilter,
  TreeItemData,
} from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('tree');

export const TreeActions = {
  initProjectTree: factory<TreeItem<TreeItemData>[]>('INIT_PROJECT_TREE'),
  getGeoObjectScenarios: factory('GET_GEO_OBJECT_SCENARIOS'),
  setProjectTree: factory<TreeItem<TreeItemData>[]>('SET_PROJECT_TREE'),
  setCurrentScenario: factory<GeoScenario>('SET_CURRENT_SCENARIO'),
  setCurrentGeoObject: factory<GeoObject>('SET_CURRENT_GEO_OBJECT'),
  setCurrentAttributes: factory<Attributes>('SET_CURRENT_ATTRIBUTES'),
  setSelectedResource: factory<TreeFilter>('SET_SELECTED_RESOURCE'),
  unsetSelectedResource: factory('UNSET_SELECTED_RESOURCE'),
};
