import { ProjectService } from '@app/services/ProjectService';
import { GridCollection } from '@gpn-prototypes/vega-ui';
import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { LoaderStore } from './loader/LoaderActions';
import { TreeStore } from './tree/TreeActions';

export interface RootState {
  tree: TreeStore;
  table: GridCollection;
  loader: LoaderStore;
}

export type StoreDependencies = {
  projectService: ProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};
