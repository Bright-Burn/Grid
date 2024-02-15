import {ColDef} from "../core";

export const getColumnSize = (
    columns: ColDef[],
    withSelectCheckbox?: boolean
) => {
    const widths = columns
        .map((column) => (column.width ? column.width : 'auto'))
        .join(' ');

    if (withSelectCheckbox) {
        return `auto ${widths}`;
    }

    return widths;
};
