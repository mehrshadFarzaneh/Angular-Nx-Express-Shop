import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, isValidHex, EditableInputModule, RaisedModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class MaterialComponent extends ColorWrap {
    HEXinput = {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: 'rgb(51, 51, 51)',
        padding: '0px',
        'border-width': '0px 0px 2px',
        outline: 'none',
        height: '30px',
    };
    HEXlabel = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: 'rgb(153, 153, 153)',
        'text-transform': 'capitalize',
    };
    RGBinput = {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        'border-bottom': '1px solid #eee',
        outline: 'none',
        height: '30px',
    };
    RGBlabel = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        'text-transform': 'capitalize',
    };
    zDepth = 1;
    radius = 1;
    background = '#fff';
    disableAlpha = true;
    constructor() {
        super();
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleInputChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.handleValueChange({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.handleValueChange({
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
    afterValidChange() {
        this.HEXinput['border-bottom-color'] = this.hex;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MaterialComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: MaterialComponent, selector: "color-material", inputs: { zDepth: "zDepth", radius: "radius", background: "background" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MaterialComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => MaterialComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="material-picker {{ className }}">
      <color-editable-input label="hex" [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: HEXinput, label: HEXlabel}"
      ></color-editable-input>
      <div class="material-split">
        <div class="material-third">
          <color-editable-input label="r" [value]="rgb.r"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="g" [value]="rgb.g"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="b" [value]="rgb.b"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
      </div>
    </div>
  </color-raised>
  `, isInline: true, styles: [".material-picker{width:130px;height:130px;padding:16px;font-family:Roboto}.material-split{display:flex;margin-right:-10px;padding-top:11px}.material-third{flex:1 1 0%;padding-right:10px}\n"], dependencies: [{ kind: "component", type: i1.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }, { kind: "component", type: i1.RaisedComponent, selector: "color-raised", inputs: ["zDepth", "radius", "background"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MaterialComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-material', template: `
  <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="material-picker {{ className }}">
      <color-editable-input label="hex" [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: HEXinput, label: HEXlabel}"
      ></color-editable-input>
      <div class="material-split">
        <div class="material-third">
          <color-editable-input label="r" [value]="rgb.r"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="g" [value]="rgb.g"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="b" [value]="rgb.b"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
      </div>
    </div>
  </color-raised>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => MaterialComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => MaterialComponent),
                        },
                    ], styles: [".material-picker{width:130px;height:130px;padding:16px;font-family:Roboto}.material-split{display:flex;margin-right:-10px;padding-top:11px}.material-third{flex:1 1 0%;padding-right:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class ColorMaterialModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorMaterialModule, declarations: [MaterialComponent], imports: [CommonModule, EditableInputModule, RaisedModule], exports: [MaterialComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorMaterialModule, imports: [CommonModule, EditableInputModule, RaisedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [MaterialComponent],
                    declarations: [MaterialComponent],
                    imports: [CommonModule, EditableInputModule, RaisedModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorMaterialModule, MaterialComponent };
//# sourceMappingURL=ngx-color-material.mjs.map
