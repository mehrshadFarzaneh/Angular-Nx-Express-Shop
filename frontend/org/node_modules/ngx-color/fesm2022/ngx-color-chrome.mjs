import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import * as i2 from 'ngx-color';
import { isValidHex, ColorWrap, AlphaModule, CheckboardModule, EditableInputModule, HueModule, SaturationModule } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class ChromeFieldsComponent {
    disableAlpha;
    hsl;
    rgb;
    hex;
    onChange = new EventEmitter();
    view = '';
    input = {
        fontSize: '11px',
        color: '#333',
        width: '100%',
        borderRadius: '2px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #dadada',
        height: '21px',
        'text-align': 'center',
    };
    label = {
        'text-transform': 'uppercase',
        fontSize: '11px',
        'line-height': '11px',
        color: '#969696',
        'text-align': 'center',
        display: 'block',
        marginTop: '12px',
    };
    ngOnInit() {
        if (this.hsl.a === 1 && this.view !== 'hex') {
            this.view = 'hex';
        }
        else if (this.view !== 'rgb' && this.view !== 'hsl') {
            this.view = 'rgb';
        }
    }
    toggleViews() {
        if (this.view === 'hex') {
            this.view = 'rgb';
        }
        else if (this.view === 'rgb') {
            this.view = 'hsl';
        }
        else if (this.view === 'hsl') {
            if (this.hsl.a === 1) {
                this.view = 'hex';
            }
            else {
                this.view = 'rgb';
            }
        }
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                const color = new TinyColor(data.hex);
                this.onChange.emit({
                    data: {
                        hex: this.disableAlpha ? color.toHex() : color.toHex8(),
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
            else if (data.a > 1) {
                data.a = 1;
            }
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
            const s = data.s && data.s.replace('%', '');
            const l = data.l && data.l.replace('%', '');
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number(s || this.hsl.s),
                    l: Number(l || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ChromeFieldsComponent, selector: "color-chrome-fields", inputs: { disableAlpha: "disableAlpha", hsl: "hsl", rgb: "rgb", hex: "hex" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex" [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r" [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g" [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b" [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s" [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l" [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path #iconUp fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path #iconDown fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".chrome-wrap{padding-top:16px;display:flex}.chrome-fields{flex:1;display:flex;margin-left:-6px}.chrome-field{padding-left:6px;width:100%}.chrome-toggle{width:32px;text-align:right;position:relative}.chrome-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative}.chrome-toggle-svg{width:24px;height:24px;border:1px transparent solid;border-radius:5px}.chrome-toggle-svg:hover{background:#eee}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-chrome-fields', template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex" [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r" [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g" [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b" [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s" [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l" [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path #iconUp fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path #iconDown fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".chrome-wrap{padding-top:16px;display:flex}.chrome-fields{flex:1;display:flex;margin-left:-6px}.chrome-field{padding-left:6px;width:100%}.chrome-toggle{width:32px;text-align:right;position:relative}.chrome-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative}.chrome-toggle-svg{width:24px;height:24px;border:1px transparent solid;border-radius:5px}.chrome-toggle-svg:hover{background:#eee}\n"] }]
        }], propDecorators: { disableAlpha: [{
                type: Input
            }], hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], hex: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class ChromeComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha = false;
    circle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
        transform: 'translate(-6px, -8px)',
    };
    pointer = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ChromeComponent, selector: "color-chrome", inputs: { disableAlpha: "disableAlpha" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ChromeComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => ChromeComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `, isInline: true, styles: [".chrome-picker{background:#fff;border-radius:2px;box-shadow:0 0 2px #0000004d,0 4px 8px #0000004d;box-sizing:initial;width:225px;font-family:Menlo}.chrome-controls{display:flex}.chrome-color{width:42px}.chrome-body{padding:14px 14px 12px}.chrome-active{position:absolute;inset:0;border-radius:20px;box-shadow:inset 0 0 0 1px #0000001a;z-index:2}.chrome-swatch{width:28px;height:28px;border-radius:15px;position:relative;overflow:hidden}.saturation{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.chrome-toggles{flex:1}.chrome-hue{height:10px;position:relative;margin-bottom:8px}.chrome-alpha{height:10px;position:relative}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i2.AlphaComponent; }), selector: "color-alpha", inputs: ["hsl", "rgb", "pointer", "shadow", "radius", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.CheckboardComponent; }), selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "component", type: i0.forwardRef(function () { return i2.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.SaturationComponent; }), selector: "color-saturation", inputs: ["hsl", "hsv", "radius", "pointer", "circle"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return ChromeFieldsComponent; }), selector: "color-chrome-fields", inputs: ["disableAlpha", "hsl", "rgb", "hex"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-chrome', template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ChromeComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => ChromeComponent),
                        },
                    ], styles: [".chrome-picker{background:#fff;border-radius:2px;box-shadow:0 0 2px #0000004d,0 4px 8px #0000004d;box-sizing:initial;width:225px;font-family:Menlo}.chrome-controls{display:flex}.chrome-color{width:42px}.chrome-body{padding:14px 14px 12px}.chrome-active{position:absolute;inset:0;border-radius:20px;box-shadow:inset 0 0 0 1px #0000001a;z-index:2}.chrome-swatch{width:28px;height:28px;border-radius:15px;position:relative;overflow:hidden}.saturation{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.chrome-toggles{flex:1}.chrome-hue{height:10px;position:relative;margin-bottom:8px}.chrome-alpha{height:10px;position:relative}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disableAlpha: [{
                type: Input
            }] } });
class ColorChromeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, declarations: [ChromeComponent, ChromeFieldsComponent], imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule], exports: [ChromeComponent, ChromeFieldsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ChromeComponent, ChromeFieldsComponent],
                    exports: [ChromeComponent, ChromeFieldsComponent],
                    imports: [
                        CommonModule,
                        AlphaModule,
                        CheckboardModule,
                        EditableInputModule,
                        HueModule,
                        SaturationModule,
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChromeComponent, ChromeFieldsComponent, ColorChromeModule };
//# sourceMappingURL=ngx-color-chrome.mjs.map
