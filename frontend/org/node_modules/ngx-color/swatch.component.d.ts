import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./checkboard.component";
export declare class SwatchComponent implements OnInit {
    color: string;
    style: Record<string, string>;
    focusStyle: Record<string, string>;
    focus: boolean;
    onClick: EventEmitter<any>;
    onHover: EventEmitter<any>;
    divStyles: Record<string, string>;
    focusStyles: Record<string, string>;
    inFocus: boolean;
    ngOnInit(): void;
    currentStyles(): Record<string, string>;
    handleFocusOut(): void;
    handleFocus(): void;
    handleHover(hex: string, $event: any): void;
    handleClick(hex: string, $event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwatchComponent, "color-swatch", never, { "color": { "alias": "color"; "required": false; }; "style": { "alias": "style"; "required": false; }; "focusStyle": { "alias": "focusStyle"; "required": false; }; "focus": { "alias": "focus"; "required": false; }; }, { "onClick": "onClick"; "onHover": "onHover"; }, never, ["*"], false, never>;
}
export declare class SwatchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SwatchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SwatchModule, [typeof SwatchComponent], [typeof i1.CommonModule, typeof i2.CheckboardModule], [typeof SwatchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SwatchModule>;
}
