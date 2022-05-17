import actionCreatorFactory from 'typescript-fsa';

import { TreeFilter } from '../StoreTypes';

const factory = actionCreatorFactory('tree');

export default {
  resetState: factory('RESET_STATE'),
  setParentNode: factory<TreeFilter>('SET_PARENT_NODE'),
};
