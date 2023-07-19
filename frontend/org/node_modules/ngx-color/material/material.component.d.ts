import { ColorWrap, zDepth } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
export declare class MaterialComponent extends ColorWrap {
    HEXinput: {
        [key: string]: string;
    };
    HEXlabel: {
        [key: string]: string;
    };
    RGBinput: {
        [key: string]: string;
    };
    RGBlabel: {
        [key: string]: string;
    };
    zDepth: zDepth;
    radius: number;
    background: string;
    disableAlpha: boolean;
    constructor();
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    handleInputChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    afterValidChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialComponent, "color-material", never, { "zDepth": { "alias": "zDepth"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorMaterialModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorMaterialModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorMaterialModule, [typeof MaterialComponent], [typeof i1.CommonModule, typeof i2.EditableInputModule, typeof i2.RaisedModule], [typeof MaterialComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorMaterialModule>;
}
