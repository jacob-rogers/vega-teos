import { TreeFilter } from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import actionCreatorFactory from 'typescript-fsa';

import { TreeItemData } from '../../helpers/TreeHelper';

const factory = actionCreatorFactory('tree');

export const TreeActions = {
  initProjectTree: factory<TreeItem<TreeItemData>[]>('INIT_PROJECT_TREE'),
  setProjectTree: factory<TreeItem<TreeItemData>[]>('SET_PROJECT_TREE'),
  setSelectedResource: factory<TreeFilter>('SET_SELECTED_RESOURCE'),
  unsetSelectedResource: factory('UNSET_SELECTED_RESOURCE'),
};
