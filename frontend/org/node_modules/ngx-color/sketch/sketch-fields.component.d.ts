import { EventEmitter } from '@angular/core';
import { HSLA, RGBA } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class SketchFieldsComponent {
    hsl: HSLA;
    rgb: RGBA;
    hex: string;
    disableAlpha: boolean;
    onChange: EventEmitter<any>;
    input: {
        [key: string]: string;
    };
    label: {
        [key: string]: string;
    };
    round(value: any): number;
    handleChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SketchFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SketchFieldsComponent, "color-sketch-fields", never, { "hsl": { "alias": "hsl"; "required": false; }; "rgb": { "alias": "rgb"; "required": false; }; "hex": { "alias": "hex"; "required": false; }; "disableAlpha": { "alias": "disableAlpha"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
