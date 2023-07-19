import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export type zDepth = 0 | 1 | 2 | 3 | 4 | 5;
export declare class RaisedComponent {
    zDepth: zDepth;
    radius: number;
    background: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RaisedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RaisedComponent, "color-raised", never, { "zDepth": { "alias": "zDepth"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class RaisedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RaisedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RaisedModule, [typeof RaisedComponent], [typeof i1.CommonModule], [typeof RaisedComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RaisedModule>;
}
