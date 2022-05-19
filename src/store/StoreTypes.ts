import { ProjectService } from '@app/services/ProjectService';
import {
  GeoObject,
  GeoScenario,
  TreeFilter,
  TreeItemData,
} from '@app/types/TreeTypes';
import { GridCollection, TreeItem } from '@gpn-prototypes/vega-ui';
import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { LoadingKeyValue } from './loader/LoaderActions';

export interface RootState {
  loader: LoaderStore;
  project: ProjectStore;
  table: GridCollection;
  tree: TreeStore;
}

export interface LoaderStore {
  loaded: LoadingKeyValue;
  loading: LoadingKeyValue;
}

export interface ProjectStore {
  name: string;
}

export interface TreeStore {
  parentNode: TreeFilter;
  projectTree: TreeItem<TreeItemData>[];
  currentScenario?: GeoScenario;
  currentGeoObject?: GeoObject;
  geoObjectScenarios: GeoObject[];
}

export type StoreDependencies = {
  projectService: ProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};
