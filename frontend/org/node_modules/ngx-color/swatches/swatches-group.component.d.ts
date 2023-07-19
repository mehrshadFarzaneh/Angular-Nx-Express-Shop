import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwatchesGroupComponent {
    group: string[];
    active: string;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchesGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwatchesGroupComponent, "color-swatches-group", never, { "group": { "alias": "group"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
