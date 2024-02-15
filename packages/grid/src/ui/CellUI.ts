import {RenderOptionsCompose} from "../core";
import {isColumnRenderOptions} from "../commonServices/renderTypeGuard.ts";

export class CellUI {
    private element: HTMLElement;
    private value: string | HTMLElement = '';
    private renderOptions: RenderOptionsCompose | undefined;
    constructor(
        value: string | HTMLElement = '',
        renderOptions?: RenderOptionsCompose
    ) {
        this.value = value;
        this.renderOptions = renderOptions;
        this.element = this.create();
    }

    get() {
        return this.element;
    }

    private applyRenderOptions(element: HTMLDivElement) {
        if (!this.renderOptions) return;

        if (
            isColumnRenderOptions(this.renderOptions) &&
            this.renderOptions.isSticky
        ) {
            element.classList.add('sticky');
            element.classList.add('sticky-column');
        }
    }

    private create() {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        this.applyRenderOptions(cellElement);

        if (typeof this.value === 'string') {
            cellElement.textContent = this.value;
            cellElement.setAttribute('title', this.value);
        } else {
            cellElement.appendChild(this.value);
        }

        return cellElement;
    }
}
