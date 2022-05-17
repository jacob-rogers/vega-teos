import { reducerWithInitialState } from 'typescript-fsa-reducers';

import actions from './treeActions';
import { TreeState } from '../StoreTypes';

const treeInitialState: TreeState = {
  parentNode: {
    key: '0',
    label: '',
  },
};

const treeReducer = reducerWithInitialState<TreeState>(treeInitialState)
  .case(actions.resetState, (state) => treeInitialState)
  .case(actions.setParentNode, (state, payload) => ({
    ...state,
    parentNode: payload,
  }));

export default treeReducer;
