import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { ProjectState } from './StoreTypes';

const factory = actionCreatorFactory('project');

const actions = {
  updateProjectName: factory<string>('UPDATE_PROJECT_NAME'),
};

export const projectStoreInitialState: ProjectState = {
  name: '',
};

const reducer = reducerWithInitialState<ProjectState>(projectStoreInitialState)
  .case(actions.updateProjectName, (state, payload) => ({
    ...state,
    name: payload,
  }));

export default {
  reducer,
  actions,
  epics: [],
};
