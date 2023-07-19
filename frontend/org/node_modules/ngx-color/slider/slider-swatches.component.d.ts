import { EventEmitter } from '@angular/core';
import { HSL } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class SliderSwatchesComponent {
    hsl: HSL;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    active(l: number, s: number): boolean;
    handleClick({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderSwatchesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderSwatchesComponent, "color-slider-swatches", never, { "hsl": { "alias": "hsl"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
