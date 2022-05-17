import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContextMenuId } from '@app/constants/TableConstants';
import { selectTableLoading } from '@app/store/loader/LoaderSelector';
import { tableDataSelector } from '@app/store/table/TableSelectors';
import {
  currentGeoObjectSelector,
  currentScenarioSelector,
} from '@app/store/tree/TreeSelectors';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { GridCollection, RowTypes, VegaTable } from '@gpn-prototypes/vega-ui';
import { block } from 'bem-cn';

import { GeoObjectTitle } from './GeoObjectTitle/GeoObjectTitle';
import { ScenarioTitle } from './ScenarioTitle/ScenarioTitle';
import TableContextMenu from './TableContextMenu/TableContextMenu';

import './TeosTable.css';

export const cn = block('TeosTable');

export const TeosTable: React.FC = () => {
  /** Store */
  const currentScenarioTitle = useSelector(currentScenarioSelector)?.title;
  const currentGeoObjectTitle = useSelector(currentGeoObjectSelector)?.title;
  const tableDataIsLoading = useSelector(selectTableLoading);
  const tableData: GridCollection = useSelector(tableDataSelector);

  /** State */
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
  const [contextMenuId, setContextMenuId] = useState<ContextMenuId>(
    ContextMenuId.Row,
  );
  const [contextRef, setContextRef] = useState(null);

  /** Refs */
  const gridRef = useRef(null);

  /** Handlers */
  const getRowHeight = (args): number => {
    if (args.type === 'ROW') {
      return args.row.type === RowTypes.Default ? 32 : 24;
    }

    return 32;
  };

  /** Callbacks */
  const onHeaderContextClick = useCallback((event, ref): void => {
    event.preventDefault();
    setContextMenuId(ContextMenuId.Header);
    setContextRef(ref);
    setIsContextMenuOpen(true);
  }, []);

  const onRowContextClick = useCallback((event, ref): void => {
    event.preventDefault();
    setContextMenuId(ContextMenuId.Row);
    setContextRef(ref);
    setIsContextMenuOpen(true);
  }, []);

  const handleSelectedCellChange = useCallback(
    (event): void => {
      const rowKey = tableData.rows[event.rowIdx].key!;
      const columnKey = tableData.columns[event.idx].key;

      localStorage.setItem(
        'selectedCell',
        JSON.stringify({
          rowKey,
          rowIdx: event.rowIdx,
          columnKey,
          columnIdx: event.idx,
        }),
      );
    },
    [tableData.columns, tableData.rows],
  );

  /* Memo */
  const Table = useMemo(() => {
    return tableDataIsLoading ? (
      <Loader size="m" data-testid="table-data-loader" />
    ) : (
      <VegaTable
        grid={tableData}
        gridRef={gridRef}
        rowHeight={getRowHeight}
        handleHeaderContextClick={onHeaderContextClick}
        handleRowContextClick={onRowContextClick}
        handleSelectedCellChange={handleSelectedCellChange}
      />
    );
  }, [
    tableDataIsLoading,
    tableData,
    onHeaderContextClick,
    onRowContextClick,
    handleSelectedCellChange,
  ]);

  return (
    <div className={cn()}>
      {currentGeoObjectTitle ? (
        <div className={cn('Container')}>
          <GeoObjectTitle title={currentGeoObjectTitle} />
          {currentScenarioTitle && (
            <>
              <ScenarioTitle title={currentScenarioTitle} />
              {Table}
              <TableContextMenu
                id={contextMenuId}
                ref={contextRef}
                isOpen={isContextMenuOpen}
                setIsOpen={setIsContextMenuOpen}
              />
            </>
          )}
        </div>
      ) : (
        <Text size="m" view="ghost">
          Выберите объект в структуре проекта
        </Text>
      )}
    </div>
  );
};
