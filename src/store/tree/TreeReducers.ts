import { TreeItemData } from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TreeStore } from '../StoreTypes';

import { TreeActions } from './TreeActions';

const treeStoreInitialState: TreeStore = {
  currentTreeItem: undefined,
  projectTree: [],
};

export const TreeReducers = reducerWithInitialState<TreeStore>(
  treeStoreInitialState,
)
  .case(
    TreeActions.setProjectTree,
    (state, payload: TreeItem<TreeItemData>[]) => ({
      ...state,
      projectTree: payload,
    }),
  )
  .case(TreeActions.unsetCurrentTreeItem, (state) => ({
    ...state,
    currentGeoObject: undefined,
  }))
  .case(
    TreeActions.setCurrentTreeItem,
    (state, currentTreeItem: TreeItem<TreeItemData>) => {
      return {
        ...state,
        currentTreeItem,
      };
    },
  );
