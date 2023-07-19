import { EventEmitter, OnChanges } from '@angular/core';
import { HSL } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class SliderSwatchComponent implements OnChanges {
    hsl: HSL;
    active: boolean;
    offset: number;
    first: boolean;
    last: boolean;
    onClick: EventEmitter<any>;
    background: string;
    ngOnChanges(): void;
    handleClick($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderSwatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderSwatchComponent, "color-slider-swatch", never, { "hsl": { "alias": "hsl"; "required": false; }; "active": { "alias": "active"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; }, { "onClick": "onClick"; }, never, never, false, never>;
}
