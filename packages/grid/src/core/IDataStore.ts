import {ColDef} from "./column.ts";

export interface IDataStore {
    getRows: () => any[]
    getCols: () => ColDef[]
    setRows: (rows: any[]) => void
    setCols: (cols: ColDef[]) => void

}