export type GridCellValue = string; // TODO: or | number | null | boolean;

export type GridRowData = Record<string, GridCellValue>;

export type GridColumnDefs = {
    field: string;
};

export type GridOption = {
    rowData: GridRowData[],
    columnDefs: GridColumnDefs[],
}