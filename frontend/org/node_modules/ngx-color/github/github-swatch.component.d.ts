import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GithubSwatchComponent {
    color: string;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    focusStyle: {
        position: string;
        'z-index': string;
        outline: string;
        'box-shadow': string;
    };
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GithubSwatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GithubSwatchComponent, "color-github-swatch", never, { "color": { "alias": "color"; "required": false; }; }, { "onClick": "onClick"; "onSwatchHover": "onSwatchHover"; }, never, never, false, never>;
}
