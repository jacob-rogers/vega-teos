import { RootState } from '@app/store/StoreTypes';
import { combineReducers } from 'redux';

import { LoaderReducers } from './loader/loaderReducers';
import { TableReducers } from './table/TableReducers';
import TreeReducers from './tree/treeReducers';
import ProjectEpic from './ProjectEpic';

export default combineReducers<RootState>({
  loader: LoaderReducers,
  project: ProjectEpic.reducer,
  table: TableReducers,
  tree: TreeReducers,
});
