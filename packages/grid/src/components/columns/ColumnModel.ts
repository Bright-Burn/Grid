import { IColumnModel, IDataStore} from "../../core";

export class ColumnModel implements IColumnModel {
    private dataStore: IDataStore
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore
    }
    sort(name: string, type: 'asc' | 'desc') {
        const rows = this.dataStore.getRows()
        if(type === 'asc' )
            rows.sort((a,b) => b[name]-a[name])
        else
            rows.sort((a,b) => a[name] - b[name])
        this.dataStore.setRows(rows)
    }
    getCols() {
        return this.dataStore.getCols()
    }
}