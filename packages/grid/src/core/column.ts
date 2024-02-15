import {Row} from "./row.ts";
import {FilterValue, RenderOptions} from "./common.ts";


export type RenderColumnOptionsVariants = 'column';

export type ColDef = {
    title: string;
    key: string;
    renderOptions?: RenderColumnOptions;
    width?: number;
    customRender?: (row: Row) => HTMLElement | string;
    customSort?: (rows: Row[]) => Row[];
    customFilter?: (filterValue: FilterValue, rows: Row[]) => Row[];
};

export type RenderColumnOptions = RenderOptions & {
    type: RenderColumnOptionsVariants;
    isHidden?: boolean;
};

export type FilterColumnKey = string | null;
export type SortOrder = 'asc' | 'desc';
export type SortColumnKey = string | null;
export type SortConfig = {
    columnKey: SortColumnKey;
    sortOrder: SortOrder;
};