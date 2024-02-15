import {Row} from "../core";
import {flattenRowsArray} from "../commonServices/flattenRowsArray.ts";

export class RowSelectionManager {
    private _selectedRows: Map<string, boolean> = new Map<string, boolean>();
    private _selectedAllRows: boolean = false;

    toggleRowSelection(rowId: string) {
        if (this._selectedRows.has(rowId)) {
            const isSelected = this._selectedRows.get(rowId) || false;
            this._selectedRows.set(rowId, !isSelected);
        } else {
            this._selectedRows.set(rowId, true);
        }
    }

    toggleRowAllSelection(rows: Row[]) {
        const allRows = flattenRowsArray(rows);
        allRows.forEach(({ id }) => {
            this._selectedRows.set(id, !this._selectedAllRows);
        });
        this._selectedAllRows = !this._selectedAllRows;
    }

    getRowSelection(rowId: string) {
        return this._selectedRows.get(rowId) || false;
    }

    getAllRowSelection() {
        return this._selectedAllRows;
    }
}
