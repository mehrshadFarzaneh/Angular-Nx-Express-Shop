import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./chrome-fields.component";
import * as i2 from "@angular/common";
import * as i3 from "ngx-color";
export declare class ChromeComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha: boolean;
    circle: Record<string, string>;
    pointer: Record<string, string>;
    activeBackground: string;
    constructor();
    afterValidChange(): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChromeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChromeComponent, "color-chrome", never, { "disableAlpha": { "alias": "disableAlpha"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorChromeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorChromeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorChromeModule, [typeof ChromeComponent, typeof i1.ChromeFieldsComponent], [typeof i2.CommonModule, typeof i3.AlphaModule, typeof i3.CheckboardModule, typeof i3.EditableInputModule, typeof i3.HueModule, typeof i3.SaturationModule], [typeof ChromeComponent, typeof i1.ChromeFieldsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorChromeModule>;
}
