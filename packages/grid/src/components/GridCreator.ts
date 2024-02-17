import {GridOptions, IColumnModel, IPresenter, IRowModel} from "../core";
import {ColumnModel} from "./columns/ColumnModel.ts";
import {RowModel} from "./rows/RowModel.ts";
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

        const dataStore = DataStore.getInstance()
        dataStore.setRows(gridOptions.rowData)
        dataStore.setCols(gridOptions.columnDef)
        this.presenter = new Presenter(dataStore, root)
        this.rowModel = new RowModel(dataStore, this.presenter)
        this.columnModel = new ColumnModel(dataStore, this.presenter)
    }


    render() {
        this.presenter.render()
        setTimeout(() => this.columnModel.sort('age', "asc"),3000)

    }

}