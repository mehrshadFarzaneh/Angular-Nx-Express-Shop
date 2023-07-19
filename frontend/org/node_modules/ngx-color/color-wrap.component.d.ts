import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Color, HSLA, HSVA, RGBA } from './helpers/color.interfaces';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export interface ColorEvent {
    $event: Event;
    color: Color;
}
export declare enum ColorMode {
    HEX = "hex",
    HSL = "hsl",
    HSV = "hsv",
    RGB = "rgb"
}
export declare class ColorWrap implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    className?: string;
    /**
     * Descriptors the return color format if the component is used with two-way binding
     */
    mode: ColorMode;
    color: HSLA | HSVA | RGBA | string;
    colorChange: EventEmitter<string | RGBA | HSLA | HSVA>;
    onChange: EventEmitter<ColorEvent>;
    onChangeComplete: EventEmitter<ColorEvent>;
    onSwatchHover: EventEmitter<ColorEvent>;
    oldHue: number;
    hsl: HSLA;
    hsv: HSVA;
    rgb: RGBA;
    hex: string;
    source: string;
    currentColor: string;
    changes?: Subscription;
    disableAlpha?: boolean;
    private _onChangeCompleteSubscription;
    private _onSwatchHoverSubscription;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    setState(data: any): void;
    handleChange(data: any, $event: any): void;
    /** hook for components after a complete change */
    afterValidChange(): void;
    handleSwatchHover(data: any, $event: any): void;
    registerOnChange(fn: (hex: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(hex: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWrap, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorWrap, "color-wrap", never, { "className": { "alias": "className"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, { "colorChange": "colorChange"; "onChange": "onChange"; "onChangeComplete": "onChangeComplete"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
export declare class ColorWrapModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWrapModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorWrapModule, [typeof ColorWrap], [typeof i1.CommonModule], [typeof ColorWrap]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorWrapModule>;
}
