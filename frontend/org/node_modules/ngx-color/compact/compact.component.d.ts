import { ColorWrap, zDepth } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./compact-color.component";
import * as i2 from "./compact-fields.component";
import * as i3 from "@angular/common";
import * as i4 from "ngx-color";
export declare class CompactComponent extends ColorWrap {
    /** Color squares to display */
    colors: string[];
    zDepth: zDepth;
    radius: number;
    background: string;
    disableAlpha: boolean;
    constructor();
    handleBlockChange({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompactComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompactComponent, "color-compact", never, { "colors": { "alias": "colors"; "required": false; }; "zDepth": { "alias": "zDepth"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorCompactModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorCompactModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorCompactModule, [typeof CompactComponent, typeof i1.CompactColorComponent, typeof i2.CompactFieldsComponent], [typeof i3.CommonModule, typeof i4.EditableInputModule, typeof i4.SwatchModule, typeof i4.RaisedModule], [typeof CompactComponent, typeof i1.CompactColorComponent, typeof i2.CompactFieldsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorCompactModule>;
}
