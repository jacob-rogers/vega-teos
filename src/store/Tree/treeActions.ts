import actionCreatorFactory from 'typescript-fsa';

import { TreeFilter } from '../StoreTypes';

const factory = actionCreatorFactory('tree');

export default {
  resetState: factory('RESET_STATE'),
  setSelectedLeaf: factory<TreeFilter>('SET_SELECTED_LEAF'),
};
