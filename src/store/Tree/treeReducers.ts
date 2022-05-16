import { reducerWithInitialState } from 'typescript-fsa-reducers';

import actions from './treeActions';
import { TreeState } from '../StoreTypes';

const treeInitialState: TreeState = {
  selectedLeaf: {
    key: '0',
    label: '',
  },
};

const treeReducer = reducerWithInitialState<TreeState>(treeInitialState)
  .case(actions.resetState, (state) => treeInitialState)
  .case(actions.setSelectedLeaf, (state, payload) => ({
    ...state,
    selectedLeaf: payload,
  }));

export default treeReducer;
