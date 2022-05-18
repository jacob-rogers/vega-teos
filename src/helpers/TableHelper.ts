import {
  GridCollection,
  GridColumn,
  GridRow,
  RowTypes,
} from '@gpn-prototypes/vega-ui';

export function getColumnKeysList(columns: GridColumn[]): string[] {
  return columns.map((column: GridColumn) => column.key);
}

export function addEmptyRow(currentTable: GridCollection): GridCollection {
  const emptyRow: GridRow = getColumnKeysList(currentTable.columns).reduce(
    (o, key) => ({ ...o, [key]: '' }),
    { type: RowTypes.Default },
  );

  return {
    ...currentTable,
    rows: [...currentTable.rows, emptyRow],
  };
}
