import { EventEmitter, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CircleSwatchComponent implements OnChanges {
    color: string;
    circleSize: number;
    circleSpacing: number;
    focus: boolean;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    focusStyle: Record<string, string>;
    swatchStyle: Record<string, string>;
    ngOnChanges(): void;
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircleSwatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircleSwatchComponent, "color-circle-swatch", never, { "color": { "alias": "color"; "required": false; }; "circleSize": { "alias": "circleSize"; "required": false; }; "circleSpacing": { "alias": "circleSpacing"; "required": false; }; "focus": { "alias": "focus"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
