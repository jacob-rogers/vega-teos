import { Attributes, GeoObject, GeoScenario } from '@app/types/TreeTypes';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TreeActions, TreeStore } from './TreeActions';

export const treeStoreInitialState: TreeStore = {
  currentScenario: undefined,
  currentGeoObject: undefined,
  geoObjectScenarios: [],
};

export const TreeReducers = reducerWithInitialState<TreeStore>(
  treeStoreInitialState,
)
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
