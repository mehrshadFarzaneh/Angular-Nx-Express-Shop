import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class CheckboardComponent implements OnInit {
    white: string;
    size: number;
    grey: string;
    boxShadow: string;
    borderRadius: string;
    gridStyles: Record<string, string>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboardComponent, "color-checkboard", never, { "white": { "alias": "white"; "required": false; }; "size": { "alias": "size"; "required": false; }; "grey": { "alias": "grey"; "required": false; }; "boxShadow": { "alias": "boxShadow"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class CheckboardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CheckboardModule, [typeof CheckboardComponent], [typeof i1.CommonModule], [typeof CheckboardComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CheckboardModule>;
}
