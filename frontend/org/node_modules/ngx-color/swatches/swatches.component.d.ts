import { ColorWrap, zDepth } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./swatches-group.component";
import * as i2 from "./swatches-color.component";
import * as i3 from "@angular/common";
import * as i4 from "ngx-color";
export declare class SwatchesComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    height: string | number;
    /** An array of color groups, each with an array of colors */
    colors: string[][];
    zDepth: zDepth;
    radius: number;
    background: string;
    constructor();
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwatchesComponent, "color-swatches", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "zDepth": { "alias": "zDepth"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorSwatchesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSwatchesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorSwatchesModule, [typeof SwatchesComponent, typeof i1.SwatchesGroupComponent, typeof i2.SwatchesColorComponent], [typeof i3.CommonModule, typeof i4.SwatchModule, typeof i4.RaisedModule], [typeof SwatchesComponent, typeof i1.SwatchesGroupComponent, typeof i2.SwatchesColorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorSwatchesModule>;
}
