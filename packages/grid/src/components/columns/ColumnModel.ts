import { IColumnModel, IDataStore} from "../../core";

export class ColumnModel implements IColumnModel {
    private dataStore: IDataStore
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore
    }
    sort(name: string) {
        const rows = this.dataStore.getRows()
        rows.sort((a,b) => b[name]-a[name])
        this.dataStore.setRows(rows)
    }
    getCols() {
        return this.dataStore.getCols()
    }
}