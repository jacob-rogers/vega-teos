import { reducerWithInitialState } from 'typescript-fsa-reducers';

import actions from './treeActions';
import { TreeState } from '../StoreTypes';

const treeInitialState: TreeState = {
  parentNode: {
    key: '0',
    label: '',
  },
  projectTree: [],
};

const treeReducer = reducerWithInitialState<TreeState>(treeInitialState)
  .case(actions.setProjectTree, (state, payload) => ({
    ...state,
    projectTree: payload,
  }))
  .case(actions.setSelectedResource, (state, payload) => ({
    ...state,
    parentNode: payload,
  }))
  .case(actions.unsetSelectedResource, (state) => ({
    ...state,
    parentNode: {
      key: '0',
      label: '',
    },
  }));

export default treeReducer;
