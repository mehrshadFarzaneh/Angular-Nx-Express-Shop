import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from 'ngx-color';
import { ColorWrap, HueModule, SwatchModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class SliderSwatchComponent {
    hsl;
    active;
    offset;
    first = false;
    last = false;
    onClick = new EventEmitter();
    background;
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SliderSwatchComponent, selector: "color-slider-swatch", inputs: { hsl: "hsl", active: "active", offset: "offset", first: "first", last: "last" }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `, isInline: true, styles: [".slider-swatch{height:12px;background:rgb(121,211,166);cursor:pointer}.slider-swatch.active{transform:scaleY(1.8);border-radius:3.6px/2px}.slider-swatch.first{border-radius:2px 0 0 2px}.slider-swatch.last{border-radius:0 2px 2px 0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-slider-swatch', template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".slider-swatch{height:12px;background:rgb(121,211,166);cursor:pointer}.slider-swatch.active{transform:scaleY(1.8);border-radius:3.6px/2px}.slider-swatch.first{border-radius:2px 0 0 2px}.slider-swatch.last{border-radius:0 2px 2px 0}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], active: [{
                type: Input
            }], offset: [{
                type: Input
            }], first: [{
                type: Input
            }], last: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class SliderSwatchesComponent {
    hsl;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    active(l, s) {
        return (Math.round(this.hsl.l * 100) / 100 === l &&
            Math.round(this.hsl.s * 100) / 100 === s);
    }
    handleClick({ data, $event }) {
        this.onClick.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SliderSwatchesComponent, selector: "color-slider-swatches", inputs: { hsl: "hsl" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        [first]="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        [last]="true"
      ></color-slider-swatch>
    </div>
  </div>
  `, isInline: true, styles: [".slider-swatches{margin-top:20px}.slider-swatch-wrap{box-sizing:border-box;width:20%;padding-right:1px;float:left}\n"], dependencies: [{ kind: "component", type: SliderSwatchComponent, selector: "color-slider-swatch", inputs: ["hsl", "active", "offset", "first", "last"], outputs: ["onClick"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-slider-swatches', template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        [first]="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        [last]="true"
      ></color-slider-swatch>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".slider-swatches{margin-top:20px}.slider-swatch-wrap{box-sizing:border-box;width:20%;padding-right:1px;float:left}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class SliderComponent extends ColorWrap {
    pointer = {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
    radius = 2;
    constructor() {
        super();
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SliderComponent, selector: "color-slider", inputs: { pointer: "pointer", radius: "radius" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SliderComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => SliderComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl" [radius]="radius" [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `, isInline: true, styles: [".slider-hue{height:12px;position:relative}\n"], dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return SliderSwatchesComponent; }), selector: "color-slider-swatches", inputs: ["hsl"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-slider', template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl" [radius]="radius" [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SliderComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => SliderComponent),
                        },
                    ], styles: [".slider-hue{height:12px;position:relative}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { pointer: [{
                type: Input
            }], radius: [{
                type: Input
            }] } });
class ColorSliderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorSliderModule, declarations: [SliderComponent, SliderSwatchComponent,
            SliderSwatchesComponent], imports: [CommonModule, HueModule, SwatchModule], exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSliderModule, imports: [CommonModule, HueModule, SwatchModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SliderComponent,
                        SliderSwatchComponent,
                        SliderSwatchesComponent,
                    ],
                    exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent],
                    imports: [CommonModule, HueModule, SwatchModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorSliderModule, SliderComponent, SliderSwatchComponent, SliderSwatchesComponent };
//# sourceMappingURL=ngx-color-slider.mjs.map
