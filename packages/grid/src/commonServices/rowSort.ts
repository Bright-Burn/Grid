import { Row, SortColumnKey, SortOrder } from '../core';

export const rowSort = (
    data: Row[],
    columnKey: SortColumnKey,
    sortOrder: SortOrder
): Row[] => {
    if (columnKey === null) {
        return data;
    }

    data.forEach((item) => {
        if (item.rows) {
            item.rows = rowSort(item.rows, columnKey, sortOrder);
        }
    });

    return data.sort((a, b) => {
        const valueA = a[columnKey];
        const valueB = b[columnKey];

        if (valueA === valueB) {
            return 0;
        } else if (valueA === null) {
            return sortOrder === 'asc' ? 1 : -1;
        } else if (valueB === null) {
            return sortOrder === 'asc' ? -1 : 1;
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        } else {
            const valueAStr = String(valueA);
            const valueBStr = String(valueB);
            return sortOrder === 'asc'
                ? valueAStr.localeCompare(valueBStr)
                : valueBStr.localeCompare(valueAStr);
        }
    });
};
