import { ofAction } from '@app/operators/OfAction';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import { RootState, StoreDependencies } from '../StoreTypes';

import { ExampleAction } from './ExampleAction';

const exampleEpic: Epic<AnyAction, AnyAction, RootState, StoreDependencies> = (
  action$,
  state$,
  { dispatch },
) =>
  action$.pipe(
    ofAction(ExampleAction.setExample),
    tap(() => dispatch(ExampleAction.setExample(true))),
    ignoreElements(),
  );

export const ExampleEpics = [exampleEpic];
