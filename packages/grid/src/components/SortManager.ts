import {ColDef, Row, SortColumnKey, SortConfig, SortOrder} from "../core";
import {rowSort} from "../commonServices/rowSort.ts";

export class SortManager {
    private _sortConfig: SortConfig = {
        columnKey: null,
        sortOrder: 'asc',
    };

    getSortConfig() {
        return this._sortConfig;
    }

    setSortConfig(
        columnKey: SortColumnKey,
        sortOrder: SortOrder,
        rows: Row[],
        columsn: ColDef[]
    ) {
        this._sortConfig.columnKey = columnKey;
        this._sortConfig.sortOrder = sortOrder;

        const customSort = columsn.find(
            (column) => column.key === columnKey
        )?.customSort;

        if (customSort) {
            return customSort(rows);
        }

        return rowSort(rows, columnKey, sortOrder);
    }

    resetSortConfig() {
        this._sortConfig = {
            columnKey: null,
            sortOrder: 'asc',
        };
    }
}
