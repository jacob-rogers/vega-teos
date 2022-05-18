import { Attributes, GeoObject, GeoScenario } from '@app/types/TreeTypes';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('tree');

export type TreeStore = {
  currentScenario: GeoScenario | undefined;
  currentGeoObject: GeoObject | undefined;
  geoObjectScenarios: GeoObject[];
};

export const TreeActions = {
  setCurrentScenario: factory<GeoScenario>('SET_CURRENT_SCENARIO'),
  setCurrentGeoObject: factory<GeoObject>('SET_CURRENT_GEO_OBJECT'),
  setCurrentAttributes: factory<Attributes>('SET_CURRENT_ATTRIBUTES'),
  getGeoObjectScenarios: factory('GET_GEO_OBJECT_SCENARIOS'),
};
