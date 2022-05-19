import { RootState } from '../StoreTypes';

export const selectCurrentScenarioTitle = (state: RootState) =>
  state.tree.currentScenario?.title;

export const selectCurrentGeoObjectTitle = (state: RootState) =>
  state.tree.currentGeoObject?.title;

export const selectGeoObjectScenarios = (state: RootState) =>
  state.tree.geoObjectScenarios;

export const selectTreeData = (state: RootState) => state.tree.projectTree;
