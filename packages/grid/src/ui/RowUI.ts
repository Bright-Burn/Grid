import { CellUI } from './CellUI';
import { CheckboxUI } from './CheckboxUI';
import {Row} from "../core";
import {RowPresenter} from "../components/RowPresenter.ts";
import {DataGridCore} from '../components/DataGridCore.ts'
export class RowUI {
    private element: HTMLElement;
    constructor(
        private row: Row,
        private dg: DataGridCore,
        private rowPresenter: RowPresenter,
        private isNested = false
    ) {
        this.element = this.create();
    }

    private createSelectCheckbox(element: HTMLElement) {
        const checkboxUI = new CheckboxUI();
        const checkboxElement = checkboxUI.create();
        checkboxElement.checked = this.dg.getRowSelection(this.row.id);
        checkboxElement.addEventListener(
            'change',
            this.rowPresenter.toggleRowSelection.bind(this.rowPresenter, this.row.id)
        );
        const cellUI = new CellUI(checkboxElement);
        const cellElementWithCheckbox = cellUI.get();
        element.appendChild(cellElementWithCheckbox);
    }

    private createRowContent(element: HTMLElement) {
        const columns = this.dg.getColumns();

        columns.forEach((column) => {
            const customRenderElement = column.customRender?.(this.row);
            const value = customRenderElement ?? `${this.row[column.key] ?? ''}`;
            const cellUI = new CellUI(value, column.renderOptions);
            const cellElement = cellUI.get();
            element.appendChild(cellElement);
        });

        if (!!this.row.rows?.length) {
            this.row.rows.forEach((nestedRow) => {
                const nestedRowUI = new RowUI(
                    nestedRow,
                    this.dg,
                    this.rowPresenter,
                    true
                );
                element.appendChild(nestedRowUI.get());
            });
        }
    }

    private create() {
        const element = document.createElement('div');
        element.classList.add('row');

        if (this.isNested) {
            element.classList.add('nested');
        }

        this.createSelectCheckbox(element);
        this.createRowContent(element);

        return element;
    }

    update(row: Row) {
        this.row = row;
        this.element.innerHTML = '';
        this.createSelectCheckbox(this.element);
        this.createRowContent(this.element);
    }

    get() {
        return this.element;
    }
}
