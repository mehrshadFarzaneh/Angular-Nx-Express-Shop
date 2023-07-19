import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, isValidHex, SwatchModule } from 'ngx-color';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, blueGrey } from 'material-colors';
import { TinyColor } from '@ctrl/tinycolor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class CircleSwatchComponent {
    color;
    circleSize = 28;
    circleSpacing = 14;
    focus = false;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    focusStyle = {};
    swatchStyle = {
        borderRadius: '50%',
        background: 'transparent',
        transition: '100ms box-shadow ease 0s',
    };
    ngOnChanges() {
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}`;
        this.focusStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}, 0 0 5px ${this.color}`;
        if (this.focus) {
            this.focusStyle.boxShadow = `inset 0 0 0 3px ${this.color}, 0 0 5px ${this.color}`;
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CircleSwatchComponent, selector: "color-circle-swatch", inputs: { color: "color", circleSize: "circleSize", circleSpacing: "circleSpacing", focus: "focus" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `, isInline: true, styles: [".circle-swatch{transform:scale(1);transition:transform .1s ease}.circle-swatch:hover{transform:scale(1.2)}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-circle-swatch', template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".circle-swatch{transform:scale(1);transition:transform .1s ease}.circle-swatch:hover{transform:scale(1.2)}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], circleSize: [{
                type: Input
            }], circleSpacing: [{
                type: Input
            }], focus: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class CircleComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 252;
    /** Color squares to display */
    colors = [
        red['500'],
        pink['500'],
        purple['500'],
        deepPurple['500'],
        indigo['500'],
        blue['500'],
        lightBlue['500'],
        cyan['500'],
        teal['500'],
        green['500'],
        lightGreen['500'],
        lime['500'],
        yellow['500'],
        amber['500'],
        orange['500'],
        deepOrange['500'],
        brown['500'],
        blueGrey['500'],
    ];
    /** Value for circle size */
    circleSize = 28;
    /** Value for spacing between circles */
    circleSpacing = 14;
    constructor() {
        super();
    }
    isActive(color) {
        return new TinyColor(this.hex).equals(color);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CircleComponent, selector: "color-circle", inputs: { width: "width", colors: "colors", circleSize: "circleSize", circleSpacing: "circleSpacing" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CircleComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => CircleComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `, isInline: true, styles: [".circle-picker{display:flex;flex-wrap:wrap}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1$1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return CircleSwatchComponent; }), selector: "color-circle-swatch", inputs: ["color", "circleSize", "circleSpacing", "focus"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-circle', template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CircleComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => CircleComponent),
                        },
                    ], styles: [".circle-picker{display:flex;flex-wrap:wrap}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], circleSize: [{
                type: Input
            }], circleSpacing: [{
                type: Input
            }] } });
class ColorCircleModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, declarations: [CircleComponent, CircleSwatchComponent], imports: [CommonModule, SwatchModule], exports: [CircleComponent, CircleSwatchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, imports: [CommonModule, SwatchModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CircleComponent, CircleSwatchComponent],
                    exports: [CircleComponent, CircleSwatchComponent],
                    imports: [CommonModule, SwatchModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CircleComponent, CircleSwatchComponent, ColorCircleModule };
//# sourceMappingURL=ngx-color-circle.mjs.map
