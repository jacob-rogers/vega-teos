import { DomainObject } from '@app/generated/graphql';
import { getNodeTree } from '@app/helpers/TreeHelper';
import { ofAction } from '@app/operators/OfAction';
import treeService from '@app/services/TreeService';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { from, switchMap } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';

import { LoaderAction } from '../loader/LoaderActions';
import { RootState, StoreDependencies } from '../StoreTypes';

import { TreeActions } from './TreeActions';

const handleInitProjectTree: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(TreeActions.initProjectTree),
    tap(() => dispatch(LoaderAction.setLoading('tree'))),
    switchMap(() =>
      from(treeService.getProjectTree()).pipe(
        tap((data: { domainObjects: DomainObject[] }) => {
          const nodes = getNodeTree(data);

          dispatch(TreeActions.setProjectTree(nodes));
        }),
      ),
    ),
    tap(() => dispatch(LoaderAction.setLoaded('tree'))),
    ignoreElements(),
  );

export const TreeEpics = [handleInitProjectTree];
