import {RenderColumnOptions, RenderOptionsCompose, RenderRowOptions} from "../core";

export const isRowRenderOptions = (
    renderOptions: RenderOptionsCompose
): renderOptions is RenderRowOptions => {
    return renderOptions.type === 'row';
};

export const isRowBothRenderOptions = (
    renderOptions: RenderOptionsCompose
): renderOptions is RenderRowOptions => {
    return renderOptions.type === 'both';
};

export const isColumnRenderOptions = (
    renderOptions: RenderOptionsCompose
): renderOptions is RenderColumnOptions => {
    return renderOptions.type === 'column';
};
