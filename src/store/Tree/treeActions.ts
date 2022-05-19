import { TreeItem } from '@gpn-prototypes/vega-ui';
import actionCreatorFactory from 'typescript-fsa';

import { TreeItemData } from '../../helpers/TreeHelper';
import { TreeFilter } from '../StoreTypes';

const factory = actionCreatorFactory('tree');

export default {
  initProjectTree: factory<TreeItem<TreeItemData>[]>('INIT_PROJECT_TREE'),
  setProjectTree: factory<TreeItem<TreeItemData>[]>('SET_PROJECT_TREE'),
  setSelectedResource: factory<TreeFilter>('SET_SELECTED_RESOURCE'),
  unsetSelectedResource: factory('UNSET_SELECTED_RESOURCE'),
};
