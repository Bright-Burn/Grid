import {RowUseCase} from "../useCases/rowUseCase.ts";
import {FilterColumnKey, FilterValue, SortColumnKey} from "../core";

export class RowPresenter {
    constructor(private rowUseCase: RowUseCase) {}

    addRow() {
        //TODO - для примера, потом удалить
        const row = {id: Date.now.toString()}
        this.rowUseCase.addRow(row);
    }

    removeRow(rowId: string) {
        this.rowUseCase.removeRow(rowId);
    }

    toggleRowSelection(rowId: string) {
        this.rowUseCase.toggleRowSelection(rowId);
    }

    toggleAllRowSelection() {
        this.rowUseCase.toggleAllRowSelection();
    }

    setSortConfig(columnKey: SortColumnKey) {
        this.rowUseCase.setSortConfig(columnKey);
    }

    resetSortConfig() {
        this.rowUseCase.resetSortConfig();
    }

    setFilterConfig(columnKey: FilterColumnKey, filterValue: FilterValue) {
        this.rowUseCase.setFilterConfig(columnKey, filterValue);
    }

    resetFilterConfig() {
        this.rowUseCase.resetFilterConfig();
    }
}
