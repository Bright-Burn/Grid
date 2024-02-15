import { CheckboxUI } from './CheckboxUI';
import { CellUI } from './CellUI';
import {RowPresenter} from "../components/RowPresenter.ts";
import {DataGridCore} from '../components/DataGridCore.ts'

export class HeaderRowUI {
    private element: HTMLElement;
    constructor(
        private DataGridCore: DataGridCore,
        private rowPresenter: RowPresenter
    ) {
        this.element = this.create();
    }

    get() {
        return this.element;
    }

    private create() {
        const columns = this.DataGridCore.getColumns();
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        rowElement.classList.add('header');

        const checkboxUI = new CheckboxUI();
        const checkboxElement = checkboxUI.create();
        checkboxElement.checked = this.DataGridCore.getAllRowSelection();
        checkboxElement.addEventListener(
            'change',
            this.rowPresenter.toggleAllRowSelection.bind(this.rowPresenter)
        );
        const cellUI = new CellUI(checkboxElement);
        const cellElementWithCheckbox = cellUI.get();
        rowElement.appendChild(cellElementWithCheckbox);

        columns.forEach((column) => {
            const cellUI = new CellUI(column.title, column.renderOptions);
            const cellElement = cellUI.get();
            rowElement.appendChild(cellElement);
        });

        return rowElement;
    }
}
