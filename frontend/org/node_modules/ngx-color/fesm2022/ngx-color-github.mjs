import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, isValidHex, SwatchModule } from 'ngx-color';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class GithubSwatchComponent {
    color;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    focusStyle = {
        position: 'relative',
        'z-index': '2',
        outline: '2px solid #fff',
        'box-shadow': '0 0 5px 2px rgba(0,0,0,0.25)',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: GithubSwatchComponent, selector: "color-github-swatch", inputs: { color: "color" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <div class="github-swatch">
      <color-swatch
        [color]="color"
        [focusStyle]="focusStyle"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, isInline: true, styles: [".github-swatch{width:25px;height:25px;font-size:0}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-github-swatch', template: `
    <div class="github-swatch">
      <color-swatch
        [color]="color"
        [focusStyle]="focusStyle"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".github-swatch{width:25px;height:25px;font-size:0}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class GithubComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 212;
    /** Color squares to display */
    colors = [
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#008B02',
        '#006B76',
        '#1273DE',
        '#004DCF',
        '#5300EB',
        '#EB9694',
        '#FAD0C3',
        '#FEF3BD',
        '#C1E1C5',
        '#BEDADC',
        '#C4DEF6',
        '#BED3F3',
        '#D4C4FB',
    ];
    triangle = 'top-left';
    constructor() {
        super();
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: GithubComponent, selector: "color-github", inputs: { width: "width", colors: "colors", triangle: "triangle" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => GithubComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => GithubComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `, isInline: true, styles: [".github-picker{background:rgb(255,255,255);border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;position:relative;padding:5px;display:flex;flex-wrap:wrap;box-sizing:border-box}.triangleShadow{position:absolute;border-width:8px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.15);border-image:initial}.triangle{position:absolute;border-width:7px;border-style:solid;border-color:transparent transparent rgb(255,255,255);border-image:initial}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-14px;left:10px}.top-left-triangle>.triangleShadow{top:-16px;left:9px}.top-right-triangle>.triangle{top:-14px;right:10px}.top-right-triangle>.triangleShadow{top:-16px;right:9px}.bottom-right-triangle>.triangle{top:35px;right:10px;transform:rotate(180deg)}.bottom-right-triangle>.triangleShadow{top:37px;right:9px;transform:rotate(180deg)}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1$1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return GithubSwatchComponent; }), selector: "color-github-swatch", inputs: ["color"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-github', template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => GithubComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => GithubComponent),
                        },
                    ], styles: [".github-picker{background:rgb(255,255,255);border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;position:relative;padding:5px;display:flex;flex-wrap:wrap;box-sizing:border-box}.triangleShadow{position:absolute;border-width:8px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.15);border-image:initial}.triangle{position:absolute;border-width:7px;border-style:solid;border-color:transparent transparent rgb(255,255,255);border-image:initial}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-14px;left:10px}.top-left-triangle>.triangleShadow{top:-16px;left:9px}.top-right-triangle>.triangle{top:-14px;right:10px}.top-right-triangle>.triangleShadow{top:-16px;right:9px}.bottom-right-triangle>.triangle{top:35px;right:10px;transform:rotate(180deg)}.bottom-right-triangle>.triangleShadow{top:37px;right:9px;transform:rotate(180deg)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], triangle: [{
                type: Input
            }] } });
class ColorGithubModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, declarations: [GithubComponent, GithubSwatchComponent], imports: [CommonModule, SwatchModule], exports: [GithubComponent, GithubSwatchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, imports: [CommonModule, SwatchModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GithubComponent, GithubSwatchComponent],
                    exports: [GithubComponent, GithubSwatchComponent],
                    imports: [CommonModule, SwatchModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorGithubModule, GithubComponent, GithubSwatchComponent };
//# sourceMappingURL=ngx-color-github.mjs.map
