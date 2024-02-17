import {IDataStore, IRowModel} from "../../core";

export class RowModel implements IRowModel{
    private dataStore: IDataStore
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore
    }
    getRows() {
        return this.dataStore.getCols()
    }


}