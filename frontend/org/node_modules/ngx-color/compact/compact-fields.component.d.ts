import { EventEmitter } from '@angular/core';
import { RGBA } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class CompactFieldsComponent {
    hex: string;
    rgb: RGBA;
    onChange: EventEmitter<any>;
    HEXWrap: {
        [key: string]: string;
    };
    HEXinput: {
        [key: string]: string;
    };
    HEXlabel: {
        [key: string]: string;
    };
    RGBwrap: {
        [key: string]: string;
    };
    RGBinput: {
        [key: string]: string;
    };
    RGBlabel: {
        [key: string]: string;
    };
    handleChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompactFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompactFieldsComponent, "color-compact-fields", never, { "hex": { "alias": "hex"; "required": false; }; "rgb": { "alias": "rgb"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
