import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, RGBA } from './helpers/color.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./checkboard.component";
import * as i3 from "./coordinates.directive";
export declare class AlphaComponent implements OnChanges {
    hsl: HSLA;
    rgb: RGBA;
    pointer: Record<string, string>;
    shadow: string;
    radius: number | string;
    direction: 'horizontal' | 'vertical';
    onChange: EventEmitter<any>;
    gradient: Record<string, string>;
    pointerLeft: number;
    pointerTop: number;
    ngOnChanges(): void;
    handleChange({ top, left, containerHeight, containerWidth, $event }: {
        top: any;
        left: any;
        containerHeight: any;
        containerWidth: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlphaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlphaComponent, "color-alpha", never, { "hsl": { "alias": "hsl"; "required": false; }; "rgb": { "alias": "rgb"; "required": false; }; "pointer": { "alias": "pointer"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class AlphaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AlphaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlphaModule, [typeof AlphaComponent], [typeof i1.CommonModule, typeof i2.CheckboardModule, typeof i3.CoordinatesModule], [typeof AlphaComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlphaModule>;
}
