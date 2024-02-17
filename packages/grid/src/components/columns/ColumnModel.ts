import { IColumnModel, IDataStore} from "../../core";

export class ColumnModel implements IColumnModel {
    dataStore: IDataStore
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore
    }
    sort(name: string) {
        const rows = this.dataStore.getRows()
        rows.sort((a,b) => b[name]-a[name])
        this.dataStore.setRows(rows)
    }

}