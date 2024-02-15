import {Observer} from "../commonServices/Observable.ts";
import {DataGridCore} from "../components/DataGridCore.ts";
import {Row} from "../core";
import {RowPresenter} from "../components/RowPresenter.ts";
import {RowUI} from "./RowUI.ts";
import {getColumnSize} from "../commonServices/getColumnSize.ts";
import {HeaderRowUI} from "./HeaderRowUI.ts";

export class DataGridUI implements Observer {
    private rowMapUI = new Map<string, RowUI>();
    constructor(
        private root: HTMLElement,
        private dg: DataGridCore,
        private rowPresenter: RowPresenter
    ) {
        this.dg.addObserver(this);
    }

    private createRow(row: Row) {
        const rowUI = new RowUI(row, this.dg, this.rowPresenter);
        //пока что будет тут
        this.rowMapUI.set(row.id, rowUI);

        return rowUI.get();
    }

    //потом удалить
    private createButtons() {
        // NOTE - чтобы проверить rowPresenter.addRow
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Добавить строку';
        buttonElement.addEventListener(
            'click',
            this.rowPresenter.addRow.bind(this.rowPresenter)
        );
        this.root.appendChild(buttonElement);

        // NOTE - чтобы проверить rowPresenter.setSortConfig
        const buttonSortIdElement = document.createElement('button');
        buttonSortIdElement.textContent = 'Сортировать по №';
        buttonSortIdElement.addEventListener(
            'click',
            this.rowPresenter.setSortConfig.bind(this.rowPresenter, 'id')
        );
        this.root.appendChild(buttonSortIdElement);
        // NOTE - чтобы проверить rowPresenter.setSortConfig
        const buttonSortLastNameElement = document.createElement('button');
        buttonSortLastNameElement.textContent = 'Сортировать по количеству звезд';
        buttonSortLastNameElement.addEventListener(
            'click',
            this.rowPresenter.setSortConfig.bind(this.rowPresenter, 'stars')
        );
        this.root.appendChild(buttonSortLastNameElement);
        // NOTE - чтобы проверить rowPresenter.resetSort
        const buttonResetSortElement = document.createElement('button');
        buttonResetSortElement.textContent = 'Сбросить сортировку';
        buttonResetSortElement.addEventListener(
            'click',
            this.rowPresenter.resetSortConfig.bind(this.rowPresenter)
        );
        this.root.appendChild(buttonResetSortElement);
        // NOTE - чтобы проверить rowPresenter.setFilterConfig
        const buttonFilterLastNameElement = document.createElement('button');
        buttonFilterLastNameElement.textContent = 'Фильтр по количеству пакетов';
        buttonFilterLastNameElement.addEventListener(
            'click',
            this.rowPresenter.setFilterConfig.bind(this.rowPresenter, 'packages', '2')
        );
        this.root.appendChild(buttonFilterLastNameElement);
        //NOTE - чтобы проверить customFilter
        const buttonCustomFilterElement = document.createElement('button');
        buttonCustomFilterElement.textContent = 'Кастомный фильтр';
        buttonCustomFilterElement.addEventListener(
            'click',
            this.rowPresenter.setFilterConfig.bind(this.rowPresenter, 'license', '')
        );
        this.root.appendChild(buttonCustomFilterElement);

        // NOTE - чтобы проверить rowPresenter.setFilterConfig
        const buttonResetFilterElement = document.createElement('button');
        buttonResetFilterElement.textContent = 'Сбросить фильтр';
        buttonResetFilterElement.addEventListener(
            'click',
            this.rowPresenter.resetFilterConfig.bind(this.rowPresenter)
        );
        this.root.appendChild(buttonResetFilterElement);
    }

    render() {
        this.createButtons();

        const columnWidth = getColumnSize(this.dg.getColumns(), true).toString();
        const columnCount = (this.dg.getColumns().length + 2).toString(); //для css grid - чтобы занять всю ширину

        const gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.setProperty('--column-width', columnWidth);
        gridElement.style.setProperty('--column-count', columnCount);

        const headerUI = new HeaderRowUI(this.dg, this.rowPresenter);
        gridElement.appendChild(headerUI.get());

        this.dg.getRows().forEach((row) => {
            gridElement.appendChild(this.createRow(row));
        });

        this.root.appendChild(gridElement);
    }

    update(ids: string[] = []) {
        if (!ids.length) {
            this.root.innerHTML = '';
            this.render();
            return;
        }

        ids.forEach((id) => {
            const currentRowUI = this.rowMapUI.get(id);
            const currentRow = this.dg.getRowById(id);
            if (!currentRowUI) return;
            if (!currentRow) return;
            currentRowUI.update(currentRow);
        });
    }
}
