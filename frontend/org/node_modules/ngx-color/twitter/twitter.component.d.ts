import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
export declare class TwitterComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    colors: string[];
    triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right';
    swatchStyle: {
        [key: string]: string;
    };
    input: {
        [key: string]: string;
    };
    disableAlpha: boolean;
    constructor();
    focus(color: string): {
        boxShadow: string;
    };
    handleBlockChange({ hex, $event }: any): void;
    handleValueChange({ data, $event }: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwitterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwitterComponent, "color-twitter", never, { "width": { "alias": "width"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "triangle": { "alias": "triangle"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorTwitterModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorTwitterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorTwitterModule, [typeof TwitterComponent], [typeof i1.CommonModule, typeof i2.SwatchModule, typeof i2.EditableInputModule], [typeof TwitterComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorTwitterModule>;
}
