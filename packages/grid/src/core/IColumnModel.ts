import {IDataStore} from "./IDataStore.ts";

export interface IColumnModel {
    dataStore: IDataStore
    sort: (name: string, type: 'asc' | 'desc') => void
}