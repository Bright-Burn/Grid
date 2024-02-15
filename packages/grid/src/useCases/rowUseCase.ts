import {DataGridCore} from "../components/DataGridCore.ts";
import {FilterColumnKey, FilterValue, Row, SortColumnKey, SortOrder} from "../core";

export class RowUseCase {
    constructor(private dg: DataGridCore) {}

    addRow(row: Row) {
        this.dg.addRow(row);
    }

    removeRow(rowId: string) {
        this.dg.removeRow(rowId);
    }

    toggleRowSelection(rowId: string) {
        this.dg.toggleRowSelection(rowId);
    }

    toggleAllRowSelection() {
        this.dg.toggleRowAllSelection();
    }

    setSortConfig(columnKey: SortColumnKey) {
        const config = this.dg.getSortConfig();

        if (config.columnKey === columnKey) {
            const sortOrder: SortOrder = config.sortOrder === 'asc' ? 'desc' : 'asc';
            this.dg.setSortConfig(columnKey, sortOrder);
            return;
        }

        this.dg.setSortConfig(columnKey, 'asc');
    }

    resetSortConfig() {
        this.dg.resetSortConfig();
    }

    setFilterConfig(columnKey: FilterColumnKey, filterValue: FilterValue) {
        this.dg.setFilterConfig(columnKey, filterValue);
    }

    resetFilterConfig() {
        this.dg.resetFilterConfig();
    }
}
