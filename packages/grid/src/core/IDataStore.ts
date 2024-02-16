import {ColDef} from "./column.ts";

export interface IDataStore {
    rows: any[]
    cols: ColDef[]

    getRows: () => any[]
    getCols: () => ColDef[]
    setRows: (rows: any[]) => void
    setCols: (cols: ColDef[]) => void

}