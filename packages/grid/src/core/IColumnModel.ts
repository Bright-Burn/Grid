import {ColDef} from "./column.ts";

export interface IColumnModel {
    getCols: () => ColDef[]
    sort: (name: string, type: 'asc' | 'desc') => void
}