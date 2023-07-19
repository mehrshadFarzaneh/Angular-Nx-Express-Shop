import { OnChanges } from '@angular/core';
import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
export declare class ShadeSliderComponent extends ColorWrap implements OnChanges {
    /** Pixel value for picker width */
    width: string | number;
    /** Pixel value for picker height */
    height: string | number;
    pointer: {
        [key: string]: string;
    };
    constructor();
    ngOnChanges(): void;
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShadeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShadeSliderComponent, "color-shade-picker", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorShadeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorShadeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorShadeModule, [typeof ShadeSliderComponent], [typeof i1.CommonModule, typeof i2.ShadeModule], [typeof ShadeSliderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorShadeModule>;
}
