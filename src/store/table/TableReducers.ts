import { TableDataPayload } from '@app/types/TableTypes';
import { GridCollection } from '@gpn-prototypes/vega-ui';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { TableActions } from './TableActions';

export const tableStoreInitialState: GridCollection = {
  columns: [],
  rows: [],
  filteredDataKeys: {
    columnsKeys: [],
    rowsKeys: [],
  },
};

export const TableReducers = reducerWithInitialState<GridCollection>(
  tableStoreInitialState,
)
  .case(TableActions.initTableState, (state, payload: TableDataPayload) => {
    console.log('table payload in reducer ', payload);

    return {
      ...tableStoreInitialState,
    };
  })

  .case(TableActions.setTableData, (state, payload: GridCollection) => {
    console.log('table payload in reducer ', payload);

    return {
      ...payload,
    };
  });
