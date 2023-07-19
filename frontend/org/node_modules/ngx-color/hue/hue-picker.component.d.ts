import { OnChanges } from '@angular/core';
import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
export declare class HuePickerComponent extends ColorWrap implements OnChanges {
    /** Pixel value for picker width */
    width: string | number;
    /** Pixel value for picker height */
    height: string | number;
    radius: number;
    direction: 'horizontal' | 'vertical';
    pointer: {
        [key: string]: string;
    };
    constructor();
    ngOnChanges(): void;
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HuePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HuePickerComponent, "color-hue-picker", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorHueModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorHueModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorHueModule, [typeof HuePickerComponent], [typeof i1.CommonModule, typeof i2.HueModule], [typeof HuePickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorHueModule>;
}
