import { ofAction } from '@app/operators/OfAction';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { ignoreElements, map } from 'rxjs/operators';

import { RootState, StoreDependencies } from '../StoreTypes';

import { TreeActions } from './TreeActions';

const treeEpic: Epic<AnyAction, AnyAction, RootState, StoreDependencies> = (
  action$,
) =>
  action$.pipe(
    ofAction(TreeActions.setCurrentAttributes),
    map(({ payload }) => console.log('payload', payload)),
    ignoreElements(),
  );

export const TreeEpics = [treeEpic];
