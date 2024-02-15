import {ColDef, Row} from "../core";
import {DataGridCore} from "./DataGridCore.ts";
import {RowUseCase} from "../useCases/rowUseCase.ts";
import {RowPresenter} from "./RowPresenter.ts";
import {DataGridUI} from "../ui/DataGridUI.ts";

export class DataGrid {
    constructor(private rows: Row[], private columns: ColDef[]) {}

    init(root: HTMLElement) {
        const dataGridCore = new DataGridCore(this.rows, this.columns);
        const rowUseCase = new RowUseCase(dataGridCore);
        const rowPresenter = new RowPresenter(rowUseCase);

        const grid = new DataGridUI(root, dataGridCore, rowPresenter);
        grid.render();
    }
}
