import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, HSVA, HSVAsource } from './helpers/color.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
export declare class SaturationComponent implements OnChanges {
    hsl: HSLA;
    hsv: HSVA;
    radius: number;
    pointer: Record<string, string>;
    circle: Record<string, string>;
    onChange: EventEmitter<{
        data: HSVAsource;
        $event: Event;
    }>;
    background: string;
    pointerTop: string;
    pointerLeft: string;
    ngOnChanges(): void;
    handleChange({ top, left, containerHeight, containerWidth, $event }: {
        top: any;
        left: any;
        containerHeight: any;
        containerWidth: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaturationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaturationComponent, "color-saturation", never, { "hsl": { "alias": "hsl"; "required": false; }; "hsv": { "alias": "hsv"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "pointer": { "alias": "pointer"; "required": false; }; "circle": { "alias": "circle"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class SaturationModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SaturationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SaturationModule, [typeof SaturationComponent], [typeof i1.CommonModule, typeof i2.CoordinatesModule], [typeof SaturationComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SaturationModule>;
}
