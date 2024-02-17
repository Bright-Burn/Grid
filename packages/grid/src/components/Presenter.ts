import {ColDef, IDataStore, IPresenter} from "../core";
import './style.css'
import {ColumnUtils} from "./columns/utils.ts";
export class Presenter implements IPresenter {
    root: HTMLElement
    dataStore: IDataStore
    columnsUtil: ColumnUtils
    constructor(dataStore: IDataStore, root: HTMLElement) {
        this.root = root
        this.dataStore = dataStore
        this.columnsUtil = new ColumnUtils()
    }
    render() {
        this.root.innerHTML = ''
        const cols = this.dataStore.getCols()
        const grid = this.createElement("div")
        grid.setAttribute('class', 'container-column')


        const colsHtml = cols.map(col => {
            const tag = this.createCell(col)
            this.addAttributes(col, tag)
            return tag
        })

        const head = this.createElement("div")
        head.setAttribute('class', 'container')
        colsHtml.forEach(el => head.appendChild(el))

        const rowsHtml  = this.createRows()

        const body = this.createElement("div")
        body.setAttribute('class', 'container-column')
        rowsHtml.forEach(row => body.appendChild(row))

        grid.appendChild(head)
        grid.appendChild(body)
        this.root.appendChild(grid)
    }
    private createElement(type:  keyof HTMLElementTagNameMap): HTMLElement {
        return document.createElement(type)
    }
    private createCell(col: ColDef) {
            const tag = this.createElement("div")

            tag.setAttribute('class', 'border')
            const width= this.columnsUtil.calculateColInitialWidth(col)
            tag.setAttribute('style', `width: ${width}px`)

            return tag
    }
    private addAttributes(col: ColDef, htmlElem : HTMLElement) {
        htmlElem.setAttribute('class', col.className)
        htmlElem.textContent = col.title
    }
    private createRows() {
        const cols = this.dataStore.getCols()
        const rows = this.dataStore.getRows()
        const rowsHtml = rows.map(rowEl => {
            const row = this.createRow()
            cols.forEach(colEl => {
                const tag = this.createCell(colEl)
                tag.textContent = rowEl[colEl.name]
                tag.setAttribute('class', colEl.className)
                row.appendChild(tag)
            })
            return row
        })
        return rowsHtml

    }
    private createRow() {
        const row = this.createElement("div")
        row.setAttribute('class', 'container')
        return row
    }

}

// [{id: 1, name: 'name', title: 'имя'}, {id: 2, name: 'age', title: 'возраст'}]
// [{id: 1, name: 'петя', age: 21},{id: 2, name: 'боб', age: 24}]