import { ProjectService } from '@app/services/ProjectService';
import { TreeItemData } from '@app/types/TreeTypes';
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
  projectTree: TreeItem<TreeItemData>[];
  currentTreeItem?: TreeItem<TreeItemData>;
}

export type StoreDependencies = {
  projectService: ProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};
