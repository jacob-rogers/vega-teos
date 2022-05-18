import { TableDataPayload } from '@app/types/TableTypes';
import { GridCollection } from '@gpn-prototypes/vega-ui';
import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('table');

export const TableActions = {
  initTableState: factory<TableDataPayload>('INIT_TABLE_STATE'),
  getTableData: factory<TableDataPayload>('GET_TABLE_DATA'),
  setTableData: factory<GridCollection>('SET_TABLE_DATA'),
};
