import {ColDef} from "../../core";

export class ColumnUtils {
    public calculateColMinWidth(colDef: ColDef): number {
        //Todo надо решить насчет ветки если, пока заглушка 50
        return colDef.minWidth != null ? colDef.minWidth : 50;
    }
    public calculateColMaxWidth(colDef: ColDef): number {
        return colDef.maxWidth != null ? colDef.maxWidth : Number.MAX_SAFE_INTEGER;
    }
    public calculateColInitialWidth(colDef: ColDef): number {
        const minColWidth = this.calculateColMinWidth(colDef);
        const maxColWidth = this.calculateColMaxWidth(colDef);

        let width : number;
        const colDefWidth = colDef.width;
        const colDefInitialWidth = colDef.initialWidth;

        if (colDefWidth != null) {
            width = colDefWidth;
        } else if (colDefInitialWidth != null) {
            width = colDefInitialWidth;
        } else {
            width = 200;
        }

        return Math.max(Math.min(width, maxColWidth), minColWidth);
    }
}