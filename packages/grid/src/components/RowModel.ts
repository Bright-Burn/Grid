import {IDataStore, IPresenter, IRowModel} from "../core";

export class RowModel implements IRowModel{
    dataStore: IDataStore
    presenter: IPresenter
    constructor(dataStore: IDataStore, presenter: IPresenter) {
        this.dataStore = dataStore
        this.presenter = presenter
    }



}