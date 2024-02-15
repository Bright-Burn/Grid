import {ColDef, Row} from "../core";

export class DataManager {
    private _initRows: Row[] = [];
    private _rows: Row[] = [];
    private _initColumns: ColDef[] = [];

    getRows() {
        return this._rows;
    }

    getInitRows() {
        return this._rows;
    }

    resetRows() {
        this._rows = [...this._initRows];
    }

    getRowById(rowId: string) {
        return this._initRows.find(({ id }) => id === rowId);
    }

    initRows(rows: Row[]) {
        this._initRows = [...rows];
        this._rows = [...rows];
    }

    setRows(rows: Row[]) {
        this._rows = [...rows];
    }

    addRow(row: Row) {
        this._initRows.push(row);
        this._rows.push(row);
    }

    removeRow(rowId: string) {
        this._initRows = this._initRows.filter((row) => row.id !== rowId);
        this._rows = this._rows.filter((row) => row.id !== rowId);
    }

    getColumns() {
        return this._initColumns;
    }

    initColumns(columns: ColDef[]) {
        this._initColumns = columns;
    }
}
