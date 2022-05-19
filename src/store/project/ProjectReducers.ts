import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { ProjectStore } from '../StoreTypes';

import { ProjectActions } from './ProjectActions';

export const projectStoreInitialState: ProjectStore = {
  name: '',
};

export const ProjectReducers = reducerWithInitialState<ProjectStore>(
  projectStoreInitialState,
).case(ProjectActions.updateProjectName, (state, payload: string) => ({
  ...state,
  name: payload,
}));
