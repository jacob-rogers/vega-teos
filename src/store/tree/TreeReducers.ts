import { GeoObject, GeoScenario } from '@app/interfaces/TreeInterfaces';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TreeActions, TreeStore } from './TreeActions';

export const treeStoreInitialState: TreeStore = {
  currentScenario: undefined,
  currentGeoObject: undefined,
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
  );
