import { EventEmitter } from '@angular/core';
import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./photoshop-previews.component";
import * as i2 from "./photoshop-button.component";
import * as i3 from "./photoshop-fields.component";
import * as i4 from "@angular/common";
import * as i5 from "ngx-color";
export declare class PhotoshopComponent extends ColorWrap {
    /** Title text */
    header: string;
    onAccept: EventEmitter<Event>;
    onCancel: EventEmitter<Event>;
    circle: {
        width: string;
        height: string;
        borderRadius: string;
        boxShadow: string;
        transform: string;
    };
    constructor();
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoshopComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotoshopComponent, "color-photoshop", never, { "header": { "alias": "header"; "required": false; }; }, { "onAccept": "onAccept"; "onCancel": "onCancel"; }, never, never, false, never>;
}
export declare class ColorPhotoshopModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPhotoshopModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorPhotoshopModule, [typeof PhotoshopComponent, typeof i1.PhotoshopPreviewsComponent, typeof i2.PhotoshopButtonComponent, typeof i3.PhotoshopFieldsComponent], [typeof i4.CommonModule, typeof i5.EditableInputModule, typeof i5.HueModule, typeof i5.AlphaModule, typeof i5.SwatchModule, typeof i5.SaturationModule], [typeof PhotoshopComponent, typeof i1.PhotoshopPreviewsComponent, typeof i2.PhotoshopButtonComponent, typeof i3.PhotoshopFieldsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorPhotoshopModule>;
}
