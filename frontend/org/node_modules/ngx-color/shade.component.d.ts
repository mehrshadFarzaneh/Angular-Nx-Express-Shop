import { EventEmitter, OnChanges } from '@angular/core';
import { HSLA, RGBA } from './helpers/color.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
export declare class ShadeComponent implements OnChanges {
    hsl: HSLA;
    rgb: RGBA;
    pointer: Record<string, string>;
    shadow: string;
    radius: string;
    onChange: EventEmitter<any>;
    gradient: Record<string, string>;
    pointerLeft: number;
    pointerTop?: number;
    ngOnChanges(): void;
    handleChange({ left, containerWidth, $event }: {
        left: any;
        containerWidth: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShadeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShadeComponent, "color-shade", never, { "hsl": { "alias": "hsl"; "required": false; }; "rgb": { "alias": "rgb"; "required": false; }; "pointer": { "alias": "pointer"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class ShadeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ShadeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ShadeModule, [typeof ShadeComponent], [typeof i1.CommonModule, typeof i2.CoordinatesModule], [typeof ShadeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ShadeModule>;
}
