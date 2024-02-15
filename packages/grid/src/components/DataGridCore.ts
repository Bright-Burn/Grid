import {Observable} from "../commonServices/Observable.ts";
import {DataManager} from "./DataManager.ts";
import {RowSelectionManager} from "./RowSelectionManager.ts";
import {SortManager} from "./SortManager.ts";
import {FilterManager} from "./FilterManager.ts";
import {ColDef, FilterColumnKey, FilterValue, Row, SortColumnKey, SortOrder} from "../core";

export class DataGridCore extends Observable {
    private _dataManager: DataManager;
    private _rowSelectionManager: RowSelectionManager;
    private _sortManager: SortManager;
    private _filterManager: FilterManager;

    constructor(rows: Row[], columns: ColDef[]) {
        super();
        this._dataManager = new DataManager();
        this._rowSelectionManager = new RowSelectionManager();
        this._sortManager = new SortManager();
        this._filterManager = new FilterManager();

        this._dataManager.initRows(rows);
        this._dataManager.initColumns(columns);
    }

    getRows() {
        return this._dataManager.getRows();
    }

    getRowById(rowId: string) {
        return this._dataManager.getRowById(rowId);
    }

    setRows(rows: Row[]) {
        this._dataManager.setRows(rows);
    }

    addRow(row: Row) {
        this._dataManager.addRow(row);
        this.notifyObservers();
    }

    removeRow(rowId: string) {
        this._dataManager.removeRow(rowId);
        this.notifyObservers();
    }

    getColumns() {
        return this._dataManager.getColumns();
    }

    toggleRowSelection(rowId: string) {
        this._rowSelectionManager.toggleRowSelection(rowId);
        this.notifyObservers([rowId]);
    }

    toggleRowAllSelection() {
        const rows = this.getRows();
        this._rowSelectionManager.toggleRowAllSelection(rows);
        const ids = rows.map((row) => row.id);
        this.notifyObservers(ids);
    }

    getRowSelection(rowId: string) {
        return this._rowSelectionManager.getRowSelection(rowId);
    }

    getAllRowSelection() {
        return this._rowSelectionManager.getAllRowSelection();
    }

    getSortConfig() {
        return this._sortManager.getSortConfig();
    }

    setSortConfig(columnKey: SortColumnKey, sortOrder: SortOrder) {
        const rows = this._dataManager.getInitRows();
        const columns = this.getColumns();
        const sortedRows = this._sortManager.setSortConfig(
            columnKey,
            sortOrder,
            rows,
            columns
        );
        this.setRows(sortedRows);
        this.notifyObservers();
    }

    resetSortConfig() {
        this._sortManager.resetSortConfig();
        this._dataManager.resetRows();
        this.notifyObservers();
    }

    setFilterConfig(columnKey: FilterColumnKey, filterValue: FilterValue) {
        const rows = this._dataManager.getInitRows();
        const columns = this.getColumns();
        const filteredRows = this._filterManager.setFilterConfig(
            columnKey,
            filterValue,
            rows,
            columns
        );
        this.setRows(filteredRows);
        this.notifyObservers();
    }

    resetFilterConfig() {
        this._filterManager.resetFilterConfig();
        this._dataManager.resetRows();
        this.notifyObservers();
    }
}
