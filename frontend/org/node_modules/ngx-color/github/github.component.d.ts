import { ColorWrap } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "./github-swatch.component";
import * as i2 from "@angular/common";
import * as i3 from "ngx-color";
export declare class GithubComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    colors: string[];
    triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right';
    constructor();
    handleBlockChange({ hex, $event }: {
        hex: string;
        $event: Event;
    }): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GithubComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GithubComponent, "color-github", never, { "width": { "alias": "width"; "required": false; }; "colors": { "alias": "colors"; "required": false; }; "triangle": { "alias": "triangle"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ColorGithubModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorGithubModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorGithubModule, [typeof GithubComponent, typeof i1.GithubSwatchComponent], [typeof i2.CommonModule, typeof i3.SwatchModule], [typeof GithubComponent, typeof i1.GithubSwatchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorGithubModule>;
}
