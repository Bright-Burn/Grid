import {ColDef, FilterColumnKey, FilterValue, Row} from "../core";
import {filterData} from "../commonServices/rowFilter.ts";

export class FilterManager {
    private _filterConfig: {
        columnKey: FilterColumnKey;
        filterValue: FilterValue;
    } = {
        columnKey: null,
        filterValue: null,
    };

    setFilterConfig(
        columnKey: FilterColumnKey,
        filterValue: FilterValue,
        rows: Row[],
        columns: ColDef[]
    ) {
        this._filterConfig.columnKey = columnKey;
        this._filterConfig.filterValue = filterValue;

        const customFilter = columns.find(
            (column) => column.key === columnKey
        )?.customFilter;

        if (customFilter) {
            return customFilter(filterValue, [...rows]);
        }

        return filterData([...rows], columnKey, filterValue);
    }

    resetFilterConfig() {
        this._filterConfig.columnKey = null;
        this._filterConfig.filterValue = null;
    }
}
