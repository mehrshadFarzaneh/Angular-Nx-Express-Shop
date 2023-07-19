import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, forwardRef, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { getContrastingColor, isValidHex, ColorWrap, EditableInputModule, SwatchModule, RaisedModule } from 'ngx-color';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class CompactColorComponent {
    color;
    active;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer',
    };
    swatchFocus = {};
    getContrastingColor = getContrastingColor;
    ngOnChanges() {
        this.swatchStyle.background = this.color;
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
        if (this.color.toLowerCase() === '#ffffff') {
            this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactColorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CompactColorComponent, selector: "color-compact-color", inputs: { color: "color", active: "active" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `, isInline: true, styles: [".compact-dot{position:absolute;inset:5px;border-radius:50%;opacity:0}.compact-dot.active{opacity:1}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactColorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-compact-color', template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".compact-dot{position:absolute;inset:5px;border-radius:50%;opacity:0}.compact-dot.active{opacity:1}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], active: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class CompactFieldsComponent {
    hex;
    rgb;
    onChange = new EventEmitter();
    HEXWrap = {
        marginTop: '-3px',
        marginBottom: '-3px',
        // flex: '6 1 0%',
        position: 'relative',
    };
    HEXinput = {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
    };
    HEXlabel = {
        display: 'none',
    };
    RGBwrap = {
        marginTop: '-3px',
        marginBottom: '-3px',
        // flex: '3 1 0%',
        position: 'relative',
    };
    RGBinput = {
        width: '80%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
    };
    RGBlabel = {
        position: 'absolute',
        top: '6px',
        left: '0px',
        'line-height': '16px',
        'text-transform': 'uppercase',
        fontSize: '12px',
        color: '#999',
    };
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else {
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
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CompactFieldsComponent, selector: "color-compact-fields", inputs: { hex: "hex", rgb: "rgb" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
  <div class="compact-fields">
    <div class="compact-active" [style.background]="hex"></div>
    <div style="flex: 6 1 0%;">
      <color-editable-input
        [style]="{ wrap: HEXWrap, input: HEXinput, label: HEXlabel }"
        label="hex"
        [value]="hex"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
  </div>
  `, isInline: true, styles: [".compact-fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.compact-active{position:absolute;top:6px;left:5px;height:9px;width:9px}\n"], dependencies: [{ kind: "component", type: i1.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-compact-fields', template: `
  <div class="compact-fields">
    <div class="compact-active" [style.background]="hex"></div>
    <div style="flex: 6 1 0%;">
      <color-editable-input
        [style]="{ wrap: HEXWrap, input: HEXinput, label: HEXlabel }"
        label="hex"
        [value]="hex"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".compact-fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.compact-active{position:absolute;top:6px;left:5px;height:9px;width:9px}\n"] }]
        }], propDecorators: { hex: [{
                type: Input
            }], rgb: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class CompactComponent extends ColorWrap {
    /** Color squares to display */
    colors = [
        '#4D4D4D',
        '#999999',
        '#FFFFFF',
        '#F44E3B',
        '#FE9200',
        '#FCDC00',
        '#DBDF00',
        '#A4DD00',
        '#68CCCA',
        '#73D8FF',
        '#AEA1FF',
        '#FDA1FF',
        '#333333',
        '#808080',
        '#cccccc',
        '#D33115',
        '#E27300',
        '#FCC400',
        '#B0BC00',
        '#68BC00',
        '#16A5A5',
        '#009CE0',
        '#7B64FF',
        '#FA28FF',
        '#000000',
        '#666666',
        '#B3B3B3',
        '#9F0500',
        '#C45100',
        '#FB9E00',
        '#808900',
        '#194D33',
        '#0C797D',
        '#0062B1',
        '#653294',
        '#AB149E',
    ];
    zDepth = 1;
    radius = 1;
    background = '#fff';
    disableAlpha = true;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CompactComponent, selector: "color-compact", inputs: { colors: "colors", zDepth: "zDepth", radius: "radius", background: "background" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CompactComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => CompactComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <color-raised class="color-compact" [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `, isInline: true, styles: [".color-compact{background:#f6f6f6;radius:4px}.compact-picker{padding-top:5px;padding-left:5px;box-sizing:border-box;width:245px}.compact-clear{clear:both}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1$1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return i1.RaisedComponent; }), selector: "color-raised", inputs: ["zDepth", "radius", "background"] }, { kind: "component", type: i0.forwardRef(function () { return CompactColorComponent; }), selector: "color-compact-color", inputs: ["color", "active"], outputs: ["onClick", "onSwatchHover"] }, { kind: "component", type: i0.forwardRef(function () { return CompactFieldsComponent; }), selector: "color-compact-fields", inputs: ["hex", "rgb"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-compact', template: `
  <color-raised class="color-compact" [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CompactComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => CompactComponent),
                        },
                    ], styles: [".color-compact{background:#f6f6f6;radius:4px}.compact-picker{padding-top:5px;padding-left:5px;box-sizing:border-box;width:245px}.compact-clear{clear:both}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { colors: [{
                type: Input
            }], zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class ColorCompactModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, declarations: [CompactComponent, CompactColorComponent,
            CompactFieldsComponent], imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule], exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CompactComponent,
                        CompactColorComponent,
                        CompactFieldsComponent,
                    ],
                    exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
                    imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorCompactModule, CompactColorComponent, CompactComponent, CompactFieldsComponent };
//# sourceMappingURL=ngx-color-compact.mjs.map
