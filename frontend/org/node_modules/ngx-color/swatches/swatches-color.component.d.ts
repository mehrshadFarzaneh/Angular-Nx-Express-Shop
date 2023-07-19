import { EventEmitter, OnInit } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class SwatchesColorComponent implements OnInit {
    color: string;
    first: boolean;
    last: boolean;
    active: boolean;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    getContrastingColor: typeof getContrastingColor;
    colorStyle: Record<string, string>;
    focusStyle: Record<string, string>;
    ngOnInit(): void;
    handleClick($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchesColorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwatchesColorComponent, "color-swatches-color", never, { "color": { "alias": "color"; "required": false; }; "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
