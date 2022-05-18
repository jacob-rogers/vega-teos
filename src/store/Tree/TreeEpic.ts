import { ofAction } from '@app/operators/OfAction';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { RootState, StoreDependencies } from '../StoreTypes';
import TreeActions from './TreeActions';
import { LoaderAction } from '../loader/loaderActions';

const treeEpic: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(TreeActions.setProjectTree),
    tap(() => dispatch(LoaderAction.setLoading('project-tree'))),
    tap(() => dispatch(LoaderAction.setLoaded('project-tree'))),
    ignoreElements(),
  );

export const TreeEpics = [
  treeEpic,
];