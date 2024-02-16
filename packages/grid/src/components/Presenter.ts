import {IPresenter} from "../core";

export class Presenter implements IPresenter {
    root: HTMLElement
    constructor(root: HTMLElement) {
        this.root = root
    }
    render() {
    }
}