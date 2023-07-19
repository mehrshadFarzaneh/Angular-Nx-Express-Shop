import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./circle-swatch.component";
import * as i2 from "@angular/common";
import * as i3 from "ngx-color";
export declare class CircleComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    colors: string[];
    /** Value for circle size */
    circleSize: number;
    /** Value for spacing between circles */
    circleSpacing: number;
    constructor();
    isActive(color: string): boolean;
    handleBlockChange({ hex, $event }: {
        hex: string;
        $event: Event;
    }): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircleComponent, "color-circle", never, { "width": { "alias": "width"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "circleSize": { "alias": "circleSize"; "required": false; }; "circleSpacing": { "alias": "circleSpacing"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorCircleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorCircleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorCircleModule, [typeof CircleComponent, typeof i1.CircleSwatchComponent], [typeof i2.CommonModule, typeof i3.SwatchModule], [typeof CircleComponent, typeof i1.CircleSwatchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorCircleModule>;
}
