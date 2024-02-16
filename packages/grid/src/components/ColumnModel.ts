import { IColumnModel, IDataStore, IPresenter} from "../core";

export class ColumnModel implements IColumnModel {
    dataStore: IDataStore
    presenter: IPresenter
    constructor(dataStore: IDataStore, presenter: IPresenter) {
        this.dataStore = dataStore
        this.presenter = presenter
    }


}