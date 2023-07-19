import { EventEmitter } from '@angular/core';
import { Shape } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class SketchPresetColorsComponent {
    colors: string[];
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle: {
        borderRadius: string;
        boxShadow: string;
    };
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    normalizeValue(val: string | Shape): Shape | {
        color: string;
    };
    focusStyle(val: string | Shape): {
        boxShadow: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SketchPresetColorsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SketchPresetColorsComponent, "color-sketch-preset-colors", never, { "colors": { "alias": "colors"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
