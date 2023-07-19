import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./sketch-fields.component";
import * as i2 from "./sketch-preset-colors.component";
import * as i3 from "@angular/common";
import * as i4 from "ngx-color";
export declare class SketchComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha: boolean;
    /** Hex strings for default colors at bottom of picker */
    presetColors: string[];
    /** Width of picker */
    width: number;
    activeBackground: string;
    constructor();
    afterValidChange(): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    handleBlockChange({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SketchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SketchComponent, "color-sketch", never, { "disableAlpha": { "alias": "disableAlpha"; "required": false; }; "presetColors": { "alias": "presetColors"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorSketchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSketchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorSketchModule, [typeof SketchComponent, typeof i1.SketchFieldsComponent, typeof i2.SketchPresetColorsComponent], [typeof i3.CommonModule, typeof i4.AlphaModule, typeof i4.CheckboardModule, typeof i4.EditableInputModule, typeof i4.HueModule, typeof i4.SaturationModule, typeof i4.SwatchModule], [typeof SketchComponent, typeof i1.SketchFieldsComponent, typeof i2.SketchPresetColorsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorSketchModule>;
}
