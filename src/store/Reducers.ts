import { RootState } from '@app/store/StoreTypes';
import { combineReducers } from 'redux';

import { LoaderReducers } from './loader/LoaderReducers';
import { TableReducers } from './table/TableReducers';
import { TreeReducers } from './tree/TreeReducers';

export default combineReducers<RootState>({
  tree: TreeReducers,
  table: TableReducers,
  loader: LoaderReducers,
});
