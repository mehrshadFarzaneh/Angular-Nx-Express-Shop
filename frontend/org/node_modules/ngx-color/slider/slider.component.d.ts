import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./slider-swatch.component";
import * as i2 from "./slider-swatches.component";
import * as i3 from "@angular/common";
import * as i4 from "ngx-color";
export declare class SliderComponent extends ColorWrap {
    pointer: Record<string, string>;
    radius: number;
    constructor();
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "color-slider", never, { "pointer": { "alias": "pointer"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorSliderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSliderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorSliderModule, [typeof SliderComponent, typeof i1.SliderSwatchComponent, typeof i2.SliderSwatchesComponent], [typeof i3.CommonModule, typeof i4.HueModule, typeof i4.SwatchModule], [typeof SliderComponent, typeof i1.SliderSwatchComponent, typeof i2.SliderSwatchesComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorSliderModule>;
}
