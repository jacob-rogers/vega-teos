import { TreeItemData } from '@app/helpers/TreeHelper';
import { ProjectService } from '@app/services/ProjectService';
import { TreeFilter } from '@app/types/TreeTypes';
import { GridCollection, TreeItem } from '@gpn-prototypes/vega-ui';
import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { LoaderStore } from './loader/LoaderActions';
import { TreeStore } from './tree/TreeActions';

export interface RootState {
  tree: TreeStore;
  table: GridCollection;
  loader: LoaderStore;
}

export interface ProjectState {
  name: string;
}

export interface TreeState {
  parentNode: TreeFilter;
  projectTree: TreeItem<TreeItemData>[];
}

export type StoreDependencies = {
  projectService: ProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};
