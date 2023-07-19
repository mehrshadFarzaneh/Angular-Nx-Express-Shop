import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CoordinatesDirective implements OnInit, OnDestroy {
    private el;
    coordinatesChange: Subject<{
        x: number;
        y: number;
        top: number;
        left: number;
        containerWidth: number;
        containerHeight: number;
        $event: any;
    }>;
    private mousechange;
    private mouseListening;
    private sub?;
    mousemove($event: Event, x: number, y: number, isTouch?: boolean): void;
    mouseup(): void;
    mousedown($event: Event, x: number, y: number, isTouch?: boolean): void;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleChange(x: number, y: number, $event: Event, isTouch: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoordinatesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CoordinatesDirective, "[ngx-color-coordinates]", never, {}, { "coordinatesChange": "coordinatesChange"; }, never, never, false, never>;
}
export declare class CoordinatesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CoordinatesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoordinatesModule, [typeof CoordinatesDirective], never, [typeof CoordinatesDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoordinatesModule>;
}
