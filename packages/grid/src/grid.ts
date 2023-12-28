import {Viewport} from "./viewport";
import {Row} from "./row";

export class Grid {
    private _viewport: Viewport
    private _wrapper: HTMLElement
    private _items: {id: number, values: string[]}[]
    private readonly _rows = new Map<number, Row>()
    private readonly _visibleRows = new Set<Row>()
    private _scrollTop = 0
    constructor(private _root: Element) {
        this._viewport = new Viewport(_root);

        this._wrapper = document.createElement("div")
        this._wrapper.className = 'wrapper'
        this._root.appendChild(this._wrapper)

        this._viewport.heightChanged.subscribe(height => {
            this._render()
        })

        this._root.addEventListener('scroll', () => {
            this._scrollTop = this._root.scrollTop
            this._render()
        })
    }

    setItems = (items: {id: number, values: string[]}[]) => {
        this._items = items
        this._wrapper.style.height = `${this._items.length * 23}px`
        this._render()
    }

    private _provideRow = (index: number): Row => {
        const item = this._items[index]
        const id = item.id

        if (this._rows.has(id)) {
            return this._rows.get(id)
        }

        const row = new Row(item)
        this._rows.set(id, row)
        return row
    }

    private _render = () => {
        const from = Math.floor(this._scrollTop / 23)
        const to = Math.ceil((this._scrollTop + this._viewport.getHeight()) / 23)
        const total = this._items.length



        this._visibleRows.forEach(row => {
            const isRemoved = row.checkVisibility(from, to)
            if (isRemoved) {
                this._visibleRows.delete(row)
            }
        })

        for (let i = Math.min(from, total - 1); i <= Math.min(total - 1, to); i++) {
            const row = this._provideRow(i)
            this._visibleRows.add(row)
            row.update(this._wrapper, i)
        }
    }
}