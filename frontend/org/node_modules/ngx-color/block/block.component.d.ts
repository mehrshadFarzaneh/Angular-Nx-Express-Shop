import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./block-swatches.component";
import * as i2 from "@angular/common";
import * as i3 from "ngx-color";
export declare class BlockComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    colors: string[];
    triangle: 'top' | 'hide';
    input: {
        [key: string]: string;
    };
    wrap: {
        [key: string]: string;
    };
    disableAlpha: boolean;
    constructor();
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    getContrastingColor(hex: any): "#fff" | "rgba(0,0,0,0.4)" | "#000";
    handleBlockChange({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockComponent, "color-block", never, { "width": { "alias": "width"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "triangle": { "alias": "triangle"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorBlockModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorBlockModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorBlockModule, [typeof BlockComponent, typeof i1.BlockSwatchesComponent], [typeof i2.CommonModule, typeof i3.CheckboardModule, typeof i3.SwatchModule, typeof i3.EditableInputModule], [typeof BlockComponent, typeof i1.BlockSwatchesComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorBlockModule>;
}
