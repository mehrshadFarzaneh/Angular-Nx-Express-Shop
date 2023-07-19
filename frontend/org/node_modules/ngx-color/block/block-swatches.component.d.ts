import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BlockSwatchesComponent {
    colors: string[];
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle: {
        width: string;
        height: string;
        float: string;
        marginRight: string;
        marginBottom: string;
        borderRadius: string;
    };
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    focusStyle(c: any): {
        boxShadow: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockSwatchesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockSwatchesComponent, "color-block-swatches", never, { "colors": { "alias": "colors"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
