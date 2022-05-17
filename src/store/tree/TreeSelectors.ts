import { RootState } from '../StoreTypes';

export const currentScenarioSelector = (state: RootState) =>
  state.tree.currentScenario;

export const currentGeoObjectSelector = (state: RootState) =>
  state.tree.currentGeoObject;
