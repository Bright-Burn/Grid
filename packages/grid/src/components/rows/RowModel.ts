import {IDataStore, IRowModel} from "../../core";

export class RowModel implements IRowModel{
    dataStore: IDataStore
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore
    }



}