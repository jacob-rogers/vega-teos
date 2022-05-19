import { ofAction } from '@app/operators/OfAction';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { map } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';

import { LoaderAction } from '../loader/LoaderActions';
import { RootState, StoreDependencies } from '../StoreTypes';

import { ProjectActions } from './ProjectActions';

const handleUpdateProjectName: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(ProjectActions.updateProjectName),
    tap(() => dispatch(LoaderAction.setLoading('table'))),
    map(({ payload: projectPayload }) =>
      dispatch(ProjectActions.updateProjectName(projectPayload)),
    ),
    tap(() => dispatch(LoaderAction.setLoaded('table'))),
    ignoreElements(),
  );

export const ProjectEpics = [handleUpdateProjectName];
