export class Row {
    private _node: HTMLElement | null = null
    private _index: number = -1
    private _isInDOM = false
    private _cacheEpoch = 0
    constructor(private _item: {id: number, values: string[]}) {
    }
    update = (wrapper: HTMLElement, index: number) => {
        if (!this._node) {
            this._node = document.createElement("div")
            this._node.innerHTML = this._item.values[0]
            this._node.className = 'row'
        }

        this._index = index

        const position = index * 23
        this._node.style.transform = `translateY(${position}px)`

        if (!this._isInDOM) {
            wrapper.appendChild(this._node)
            this._isInDOM = true
        }
    }

    checkVisibility = (from: number, to: number) => {
        if (this._index < from || this._index > to) {
            this._node.remove()
            this._isInDOM = false
            this._cacheEpoch++

            if (this._cacheEpoch > 5) {
                this._node = null
                this._cacheEpoch = 0
            }
            return true
        }

        return false
    }
}