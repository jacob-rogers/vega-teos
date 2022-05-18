import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextMenuId } from '@app/constants/TableConstants';
import { selectTableLoading } from '@app/store/loader/LoaderSelector';
import { selectTableData } from '@app/store/table/TableSelectors';
import { TreeActions } from '@app/store/tree/TreeActions';
import {
  selectCurrentGeoObjectTitle,
  selectCurrentScenarioTitle,
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

const DEFAULT_ROW_HEIGHT = 32;
const DELIMETER_ROW_HEIGHT = 24;

export const TeosTable: React.FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const currentScenarioTitle = useSelector(selectCurrentScenarioTitle);
  const currentGeoObjectTitle = useSelector(selectCurrentGeoObjectTitle);
  const tableDataIsLoading = useSelector(selectTableLoading);
  const tableData: GridCollection = useSelector(selectTableData);

  /** State */
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
  const [contextMenuId, setContextMenuId] = useState<ContextMenuId>(
    ContextMenuId.Row,
  );
  const [contextRef, setContextRef] = useState(null);

  /** Effects */
  useEffect(() => {
    dispatch(TreeActions.getGeoObjectScenarios());
  });

  /** Refs */
  const gridRef = useRef(null);

  /** Handlers */
  const getRowHeight = (args): number => {
    if (args.type === 'ROW') {
      return args.row.type === RowTypes.Default
        ? DEFAULT_ROW_HEIGHT
        : DELIMETER_ROW_HEIGHT;
    }

    return DEFAULT_ROW_HEIGHT;
  };

  const handleHeaderContextClick = (event, ref): void => {
    event.preventDefault();
    setContextMenuId(ContextMenuId.Header);
    setContextRef(ref);
    setIsContextMenuOpen(true);
  };

  const handleRowContextClick = (event, ref): void => {
    event.preventDefault();
    setContextMenuId(ContextMenuId.Row);
    setContextRef(ref);
    setIsContextMenuOpen(true);
  };

  return (
    <div className={cn()}>
      {currentGeoObjectTitle ? (
        <div className={cn('Container')}>
          <GeoObjectTitle />
          {currentScenarioTitle && (
            <>
              <ScenarioTitle />
              {tableDataIsLoading ? (
                <Loader size="m" data-testid="table-data-loader" />
              ) : (
                <VegaTable
                  grid={tableData}
                  gridRef={gridRef}
                  rowHeight={getRowHeight}
                  handleHeaderContextClick={handleHeaderContextClick}
                  handleRowContextClick={handleRowContextClick}
                />
              )}
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
