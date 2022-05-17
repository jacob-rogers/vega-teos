import { ofAction } from '@app/operators/OfAction';
import tableService from '@app/services/TableService';
import { GridCollection } from '@gpn-prototypes/vega-ui';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { from, switchMap } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';

import { LoaderAction } from '../loader/LoaderActions';
import { RootState, StoreDependencies } from '../StoreTypes';

import { TableActions } from './TableActions';

const handleInitTableData: Epic<
  AnyAction,
  AnyAction,
  RootState,
  StoreDependencies
> = (action$, state$, { dispatch }) =>
  action$.pipe(
    ofAction(TableActions.initTableState),
    tap(() => dispatch(LoaderAction.setLoading('table'))),
    switchMap(({ payload: tableDataPayload }) =>
      from(tableService.getTableData(tableDataPayload)).pipe(
        tap((data: GridCollection) => {
          dispatch(TableActions.setTableData(data));
        }),
      ),
    ),
    tap(() => dispatch(LoaderAction.setLoaded('table'))),
    ignoreElements(),
  );

export const TableEpics = [handleInitTableData];
