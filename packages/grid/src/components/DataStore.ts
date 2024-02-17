import {ColDef, IDataStore} from "../core";

export class DataStore implements IDataStore {
    private static instance: DataStore;
    private rows: any[] = []
    private cols: ColDef[] = []
    private constructor() { }
    public static getInstance(): DataStore {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }

        return DataStore.instance;
    }

    getRows() { return this.rows }
    getCols() { return this.cols }
    setRows(rows: any) {  this.rows = rows }
    setCols(cols: ColDef[]) {  this.cols = cols }
}
