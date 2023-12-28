import {Publisher} from "./publisher";

export class Viewport {
    private readonly _rootElement: Element
    private readonly _resizeObserver: ResizeObserver
    private _height: number

    readonly heightChanged = new Publisher<number, void>()

    constructor(rootElement: Element) {
        this._rootElement = rootElement
        this._resizeObserver = new ResizeObserver(() => {
            this._calcHeight()
            this.heightChanged.fire(this._height)
        });

        this._resizeObserver.observe(rootElement);

        this._calcHeight()
    }

    private _calcHeight = () => {
        const { height } = this._rootElement.getBoundingClientRect()
        this._height = height
    }

    setRootElement = () => {

    }

    getHeight = () => {
        return this._height
    }
}