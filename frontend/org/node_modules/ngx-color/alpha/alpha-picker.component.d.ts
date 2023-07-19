import { OnChanges } from '@angular/core';
import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
export declare class AlphaPickerComponent extends ColorWrap implements OnChanges {
    /** Pixel value for picker width */
    width: string | number;
    /** Pixel value for picker height */
    height: string | number;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AlphaPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlphaPickerComponent, "color-alpha-picker", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorAlphaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorAlphaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorAlphaModule, [typeof AlphaPickerComponent], [typeof i1.CommonModule, typeof i2.AlphaModule, typeof i2.CheckboardModule], [typeof AlphaPickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorAlphaModule>;
}
