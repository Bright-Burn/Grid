import {FilterColumnKey, FilterValue, Row} from "../core";

export function filterData(
    data: Row[],
    columnKey: FilterColumnKey,
    filterValue: FilterValue
) {
    const newData = data.map((row) => {
        const filteredRow: Row = {
            ...row,
            rows: row.rows ? filterData(row.rows, columnKey, filterValue) : [],
        };

        if (columnKey && row.hasOwnProperty(columnKey)) {
            const isValid =
                String(filteredRow[columnKey]).toLowerCase() ===
                String(filterValue).toLowerCase();
            if (!isValid) {
                return;
            }
        }
        return filteredRow;
    });

    return newData.filter((row) => !!row) as Row[];
}
