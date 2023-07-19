import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, HSLAsource } from './helpers/color.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
export declare class HueComponent implements OnChanges {
    hsl: HSLA;
    pointer: Record<string, string>;
    radius: number;
    shadow: string;
    hidePointer: boolean;
    direction: 'horizontal' | 'vertical';
    onChange: EventEmitter<{
        data: HSLAsource;
        $event: Event;
    }>;
    left: string;
    top: string;
    ngOnChanges(): void;
    handleChange({ top, left, containerHeight, containerWidth, $event }: {
        top: any;
        left: any;
        containerHeight: any;
        containerWidth: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HueComponent, "color-hue", never, { "hsl": { "alias": "hsl"; "required": false; }; "pointer": { "alias": "pointer"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "hidePointer": { "alias": "hidePointer"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class HueModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HueModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HueModule, [typeof HueComponent], [typeof i1.CommonModule, typeof i2.CoordinatesModule], [typeof HueComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HueModule>;
}
