import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TreeState } from '../StoreTypes';

import { TreeActions } from './TreeActions';

const treeInitialState: TreeState = {
  parentNode: {
    key: '0',
    label: '',
  },
  projectTree: [],
};

const treeReducer = reducerWithInitialState<TreeState>(treeInitialState)
  .case(TreeActions.initProjectTree, (state, payload) => ({
    ...state,
    projectTree: payload,
  }))
  .case(TreeActions.setProjectTree, (state, payload) => ({
    ...state,
    projectTree: payload,
  }))
  .case(TreeActions.setSelectedResource, (state, payload) => ({
    ...state,
    parentNode: payload,
  }))
  .case(TreeActions.unsetSelectedResource, (state) => ({
    ...state,
    parentNode: {
      key: '0',
      label: '',
    },
  }));

export default treeReducer;
