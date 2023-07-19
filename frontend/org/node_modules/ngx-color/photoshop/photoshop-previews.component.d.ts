import { OnChanges } from '@angular/core';
import { RGB } from 'ngx-color';
import * as i0 from "@angular/core";
export declare class PhotoshopPreviewsComponent implements OnChanges {
    rgb: RGB;
    currentColor: string;
    backgroundNew: string;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoshopPreviewsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotoshopPreviewsComponent, "color-photoshop-previews", never, { "rgb": { "alias": "rgb"; "required": false; }; "currentColor": { "alias": "currentColor"; "required": false; }; }, {}, never, never, false, never>;
}
