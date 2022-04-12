import { ProjectService } from '@app/services/ProjectService';
import { History } from 'history';
import { AnyAction, Dispatch } from 'redux';

import { ExampleStore } from './example/ExampleAction';

export interface RootState {
  example: ExampleStore;
}

export type StoreDependencies = {
  projectService: ProjectService;
  history: History;
  dispatch: Dispatch<AnyAction>;
};
