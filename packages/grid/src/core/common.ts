import {RenderRowOptions} from "./row.ts";
import {RenderColumnOptions} from "./column.ts";

export type RenderOptionsVariants = 'row' | 'column' | 'both';
export type RenderOptions = {
    type: RenderOptionsVariants;
    isSticky?: boolean;
};
export type FilterValue = unknown;
export type RenderOptionsCompose = RenderRowOptions | RenderColumnOptions;