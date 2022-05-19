import {
  Attributes,
  GeoObject,
  GeoScenario,
  TreeFilter,
  TreeItemData,
} from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TreeStore } from '../StoreTypes';

import { TreeActions } from './TreeActions';

const treeStoreInitialState: TreeStore = {
  currentScenario: undefined,
  currentGeoObject: undefined,
  geoObjectScenarios: [],
  parentNode: {
    key: '0',
    label: '',
  },
  projectTree: [],
};

export const TreeReducers = reducerWithInitialState<TreeStore>(
  treeStoreInitialState,
)
  .case(
    TreeActions.initProjectTree,
    (state, payload: TreeItem<TreeItemData>[]) => ({
      ...state,
      projectTree: payload,
    }),
  )
  .case(
    TreeActions.setProjectTree,
    (state, payload: TreeItem<TreeItemData>[]) => ({
      ...state,
      projectTree: payload,
    }),
  )
  .case(TreeActions.setSelectedResource, (state, payload: TreeFilter) => ({
    ...state,
    parentNode: payload,
  }))
  .case(TreeActions.unsetSelectedResource, (state) => ({
    ...state,
    parentNode: {
      key: '0',
      label: '',
    },
  }))
  .case(
    TreeActions.setCurrentScenario,
    (state, currentScenario: GeoScenario) => {
      return {
        ...state,
        currentScenario,
      };
    },
  )
  .case(
    TreeActions.setCurrentGeoObject,
    (state, currentGeoObject: GeoObject) => {
      return {
        ...state,
        currentGeoObject,
      };
    },
  )
  .case(TreeActions.setCurrentAttributes, (state, payload: Attributes) => {
    return {
      ...state,
      currentScenario: payload.scenario,
      currentGeoObject: payload.object,
    };
  })
  .case(TreeActions.getGeoObjectScenarios, (state) => {
    return {
      ...state,
      // TODO грузить список в эпике с бэкенда
      geoObjectScenarios: [
        {
          title: 'Вариант 1',
          currentScenario: {
            title: 'Залежь 1',
          },
        },
      ],
    };
  });
