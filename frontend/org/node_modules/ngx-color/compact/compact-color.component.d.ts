import { EventEmitter, OnChanges } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class CompactColorComponent implements OnChanges {
    color: string;
    active: boolean;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle: Record<string, string>;
    swatchFocus: Record<string, string>;
    getContrastingColor: typeof getContrastingColor;
    ngOnChanges(): void;
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompactColorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompactColorComponent, "color-compact-color", never, { "color": { "alias": "color"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
