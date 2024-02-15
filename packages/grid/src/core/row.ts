import {RenderOptions} from "./common.ts";

export type Row = {
    id: string;
    rows?: Row[];
    renderOptions?: RenderRowOptions;
    [key: string]: unknown;
};
export type RenderRowOptions = RenderOptions & {
    type: RenderRowOptionsVariants;
};
export type RenderRowOptionsVariants = 'row' | 'both';