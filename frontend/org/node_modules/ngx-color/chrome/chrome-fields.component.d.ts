import { EventEmitter, OnInit } from '@angular/core';
import { HSLA, RGBA } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class ChromeFieldsComponent implements OnInit {
    disableAlpha: boolean;
    hsl: HSLA;
    rgb: RGBA;
    hex: string;
    onChange: EventEmitter<any>;
    view: string;
    input: Record<string, string>;
    label: Record<string, string>;
    ngOnInit(): void;
    toggleViews(): void;
    round(value: any): number;
    handleChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChromeFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChromeFieldsComponent, "color-chrome-fields", never, { "disableAlpha": { "alias": "disableAlpha"; "required": false; }; "hsl": { "alias": "hsl"; "required": false; }; "rgb": { "alias": "rgb"; "required": false; }; "hex": { "alias": "hex"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
