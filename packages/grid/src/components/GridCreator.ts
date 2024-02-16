import {GridOptions, IColumnModel, IPresenter, IRowModel} from "../core";
import {ColumnModel} from "./ColumnModel.ts";
import {RowModel} from "./RowModel.ts";
import {Presenter} from "./Presenter.ts";
import {DataStore} from "./DataStore.ts";

export function createGrid(root: HTMLElement, gridOptions: GridOptions) {
    const api = new GridCreator(root, gridOptions)
    api.render()
    return api
}
class GridCreator {
    rowModel: IRowModel
    columnModel: IColumnModel
    presenter: IPresenter
    constructor(root: HTMLElement, gridOptions: GridOptions) {
        this.presenter = new Presenter(root)

        const dataStore = DataStore.getInstance()
        dataStore.setRows(gridOptions.rowData)
        dataStore.setCols(gridOptions.columnDef)
        this.rowModel = new RowModel(dataStore, this.presenter)
        this.columnModel = new ColumnModel(dataStore, this.presenter)

    }


    render() {
        this.presenter.render()
    }

}