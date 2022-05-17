import { GeoObject, GeoScenario } from '@app/interfaces/TreeInterfaces';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('tree');

export type TreeStore = {
  currentScenario: GeoScenario | undefined;
  currentGeoObject: GeoObject | undefined;
};

export const TreeActions = {
  setCurrentScenario: factory<GeoScenario>('SET_CURRENT_SCENARIO'),
  setCurrentGeoObject: factory<GeoObject>('SET_CURRENT_GEO_OBJECT'),
};
