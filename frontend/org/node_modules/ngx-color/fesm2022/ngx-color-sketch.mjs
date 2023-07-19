import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import * as i2 from 'ngx-color';
import { isValidHex, ColorWrap, AlphaModule, CheckboardModule, EditableInputModule, HueModule, SaturationModule, SwatchModule } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class SketchFieldsComponent {
    hsl;
    rgb;
    hex;
    disableAlpha = false;
    onChange = new EventEmitter();
    input = {
        width: '100%',
        padding: '4px 10% 3px',
        border: 'none',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px',
    };
    label = {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize',
    };
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                const color = new TinyColor(data.hex);
                this.onChange.emit({
                    data: {
                        hex: this.disableAlpha || data.hex.length <= 6 ? color.toHex() : color.toHex8(),
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            if (this.disableAlpha) {
                data.a = 1;
            }
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchFieldsComponent, selector: "color-sketch-fields", inputs: { hsl: "hsl", rgb: "rgb", hex: "hex", disableAlpha: "disableAlpha" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-fields{display:flex;padding-top:4px}.sketch-double{flex:2 1 0%}.sketch-single,.sketch-alpha{flex:1 1 0%;padding-left:6px}:host-context([dir=rtl]) .sketch-single{padding-right:6px;padding-left:0}:host-context([dir=rtl]) .sketch-alpha{padding-right:6px;padding-left:0}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch-fields', template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".sketch-fields{display:flex;padding-top:4px}.sketch-double{flex:2 1 0%}.sketch-single,.sketch-alpha{flex:1 1 0%;padding-left:6px}:host-context([dir=rtl]) .sketch-single{padding-right:6px;padding-left:0}:host-context([dir=rtl]) .sketch-alpha{padding-right:6px;padding-left:0}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], hex: [{
                type: Input
            }], disableAlpha: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class SketchPresetColorsComponent {
    colors;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchPresetColorsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchPresetColorsComponent, selector: "color-sketch-preset-colors", inputs: { colors: "colors" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-swatches{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap{width:16px;height:16px;margin:0 10px 10px 0}:host-context([dir=rtl]) .sketch-swatches{padding-right:10px;padding-left:0}:host-context([dir=rtl]) .sketch-wrap{margin-left:10px;margin-right:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchPresetColorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch-preset-colors', template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".sketch-swatches{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap{width:16px;height:16px;margin:0 10px 10px 0}:host-context([dir=rtl]) .sketch-swatches{padding-right:10px;padding-left:0}:host-context([dir=rtl]) .sketch-wrap{margin-left:10px;margin-right:0}\n"] }]
        }], propDecorators: { colors: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class SketchComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha = false;
    /** Hex strings for default colors at bottom of picker */
    presetColors = [
        '#D0021B',
        '#F5A623',
        '#F8E71C',
        '#8B572A',
        '#7ED321',
        '#417505',
        '#BD10E0',
        '#9013FE',
        '#4A90E2',
        '#50E3C2',
        '#B8E986',
        '#000000',
        '#4A4A4A',
        '#9B9B9B',
        '#FFFFFF',
    ];
    /** Width of picker */
    width = 200;
    activeBackground;
    constructor() {
        super();
    }
    afterValidChange() {
        const alpha = this.disableAlpha ? 1 : this.rgb.a;
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${alpha})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchComponent, selector: "color-sketch", inputs: { disableAlpha: "disableAlpha", presetColors: "presetColors", width: "width" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SketchComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => SketchComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="sketch-picker {{ className }}" [style.width.px]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-picker{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container,.sketch-swatches-container{display:block}.sketch-controls{display:flex}.sketch-sliders{padding:4px 0;flex:1 1 0%}.sketch-hue{position:relative;height:10px;overflow:hidden}.sketch-alpha{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}:host-context([dir=rtl]) .sketch-color{margin-right:4px;margin-left:0}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i2.AlphaComponent; }), selector: "color-alpha", inputs: ["hsl", "rgb", "pointer", "shadow", "radius", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.CheckboardComponent; }), selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "component", type: i0.forwardRef(function () { return i2.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.SaturationComponent; }), selector: "color-saturation", inputs: ["hsl", "hsv", "radius", "pointer", "circle"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return SketchFieldsComponent; }), selector: "color-sketch-fields", inputs: ["hsl", "rgb", "hex", "disableAlpha"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return SketchPresetColorsComponent; }), selector: "color-sketch-preset-colors", inputs: ["colors"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch', template: `
  <div class="sketch-picker {{ className }}" [style.width.px]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SketchComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => SketchComponent),
                        },
                    ], styles: [".sketch-picker{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container,.sketch-swatches-container{display:block}.sketch-controls{display:flex}.sketch-sliders{padding:4px 0;flex:1 1 0%}.sketch-hue{position:relative;height:10px;overflow:hidden}.sketch-alpha{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}:host-context([dir=rtl]) .sketch-color{margin-right:4px;margin-left:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disableAlpha: [{
                type: Input
            }], presetColors: [{
                type: Input
            }], width: [{
                type: Input
            }] } });
class ColorSketchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, declarations: [SketchComponent, SketchFieldsComponent,
            SketchPresetColorsComponent], imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule,
            SwatchModule], exports: [SketchComponent, SketchFieldsComponent,
            SketchPresetColorsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule,
            SwatchModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SketchComponent,
                        SketchFieldsComponent,
                        SketchPresetColorsComponent,
                    ],
                    exports: [
                        SketchComponent,
                        SketchFieldsComponent,
                        SketchPresetColorsComponent,
                    ],
                    imports: [
                        CommonModule,
                        AlphaModule,
                        CheckboardModule,
                        EditableInputModule,
                        HueModule,
                        SaturationModule,
                        SwatchModule,
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorSketchModule, SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent };
//# sourceMappingURL=ngx-color-sketch.mjs.map
