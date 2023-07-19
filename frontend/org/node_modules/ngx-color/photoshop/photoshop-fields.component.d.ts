import { EventEmitter } from '@angular/core';
import { HSV, RGB } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class PhotoshopFieldsComponent {
    rgb: RGB;
    hsv: HSV;
    hex: string;
    onChange: EventEmitter<any>;
    RGBinput: Record<string, string>;
    RGBwrap: Record<string, string>;
    RGBlabel: Record<string, string>;
    HEXinput: Record<string, string>;
    HEXwrap: Record<string, string>;
    HEXlabel: Record<string, string>;
    round(v: any): number;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoshopFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotoshopFieldsComponent, "color-photoshop-fields", never, { "rgb": { "alias": "rgb"; "required": false; }; "hsv": { "alias": "hsv"; "required": false; }; "hex": { "alias": "hex"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
