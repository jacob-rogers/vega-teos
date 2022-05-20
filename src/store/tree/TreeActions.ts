import { TreeItemData } from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('tree');

export const TreeActions = {
  initProjectTree: factory('INIT_PROJECT_TREE'),
  initCreateOrUpdateVariant: factory<string>('INIT_CREATE_OR_UPDATE_VARIANT'),
  setProjectTree: factory<TreeItem<TreeItemData>[]>('SET_PROJECT_TREE'),
  setCurrentTreeItem: factory<TreeItem<TreeItemData>>('SET_CURRENT_TREE_ITEM'),
  unsetCurrentTreeItem: factory('UNSET_CURRENT_GEO_OBJECT'),
};
