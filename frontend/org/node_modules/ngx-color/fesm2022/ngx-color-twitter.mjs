import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i2 from 'ngx-color';
import { ColorWrap, isValidHex, SwatchModule, EditableInputModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class TwitterComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 276;
    /** Color squares to display */
    colors = [
        '#FF6900',
        '#FCB900',
        '#7BDCB5',
        '#00D084',
        '#8ED1FC',
        '#0693E3',
        '#ABB8C3',
        '#EB144C',
        '#F78DA7',
        '#9900EF',
    ];
    triangle = 'top-left';
    swatchStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '4px',
        fontSize: '0',
    };
    input = {
        borderRadius: '4px',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
        border: '1px solid #e6ecf0',
        boxSizing: 'border-box',
        display: 'inline',
        fontSize: '14px',
        height: '30px',
        padding: '0',
        paddingLeft: '6px',
        width: '100%',
        color: '#657786',
    };
    disableAlpha = true;
    constructor() {
        super();
    }
    focus(color) {
        return { boxShadow: `0 0 4px ${color}` };
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: TwitterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: TwitterComponent, selector: "color-twitter", inputs: { width: "width", colors: "colors", triangle: "triangle" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TwitterComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => TwitterComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="twitter-picker {{ triangle }}-triangle {{ className }}" [style.width.px]="width">
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <div class="twitter-body">
      <div class="twitter-swatch" *ngFor="let color of colors">
        <color-swatch
          [color]="color"
          [style]="swatchStyle"
          [focusStyle]="focus(color)"
          (onClick)="handleBlockChange($event)"
          (onHover)="onSwatchHover.emit($event)"
        ></color-swatch>
      </div>
      <div class="twitter-hash">
        <div>#</div>
      </div>
      <div class="twitter-input">
        <color-editable-input
          [style]="{ input: input }"
          [value]="hex.replace('#', '')"
          (onChange)="handleValueChange($event)"
        ></color-editable-input>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".twitter-picker{background:rgb(255,255,255);border:0px solid rgba(0,0,0,.25);box-shadow:#00000040 0 1px 4px;border-radius:4px;position:relative;box-sizing:border-box}.triangleShadow{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgba(0,0,0,.1);position:absolute}.triangle{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgb(255,255,255);position:absolute}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-10px;left:12px}.top-left-triangle>.triangleShadow{top:-11px;left:12px}.top-right-triangle>.triangle{top:-10px;right:12px}.top-right-triangle>.triangleShadow{top:-11px;right:12px}.twitter-body{padding:15px 9px 9px 15px}.twitter-swatch{width:30px;height:30px;display:inline-block;margin:0 6px 0 0}.twitter-hash{background:rgb(240,240,240);height:30px;width:30px;border-radius:4px 0 0 4px;color:#98a1a4;margin-left:-3px;display:inline-block}.twitter-hash>div{position:absolute;align-items:center;justify-content:center;height:30px;width:30px;display:flex}.twitter-input{display:inline-block;margin-top:-6px;font-size:10px;height:27px;padding:0;position:relative;top:6px;vertical-align:top;width:108px;margin-left:-4px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }, { kind: "component", type: i2.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: TwitterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-twitter', template: `
  <div class="twitter-picker {{ triangle }}-triangle {{ className }}" [style.width.px]="width">
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <div class="twitter-body">
      <div class="twitter-swatch" *ngFor="let color of colors">
        <color-swatch
          [color]="color"
          [style]="swatchStyle"
          [focusStyle]="focus(color)"
          (onClick)="handleBlockChange($event)"
          (onHover)="onSwatchHover.emit($event)"
        ></color-swatch>
      </div>
      <div class="twitter-hash">
        <div>#</div>
      </div>
      <div class="twitter-input">
        <color-editable-input
          [style]="{ input: input }"
          [value]="hex.replace('#', '')"
          (onChange)="handleValueChange($event)"
        ></color-editable-input>
      </div>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TwitterComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => TwitterComponent),
                        },
                    ], styles: [".twitter-picker{background:rgb(255,255,255);border:0px solid rgba(0,0,0,.25);box-shadow:#00000040 0 1px 4px;border-radius:4px;position:relative;box-sizing:border-box}.triangleShadow{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgba(0,0,0,.1);position:absolute}.triangle{width:0px;height:0px;border-style:solid;border-width:0px 9px 10px;border-color:transparent transparent rgb(255,255,255);position:absolute}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-10px;left:12px}.top-left-triangle>.triangleShadow{top:-11px;left:12px}.top-right-triangle>.triangle{top:-10px;right:12px}.top-right-triangle>.triangleShadow{top:-11px;right:12px}.twitter-body{padding:15px 9px 9px 15px}.twitter-swatch{width:30px;height:30px;display:inline-block;margin:0 6px 0 0}.twitter-hash{background:rgb(240,240,240);height:30px;width:30px;border-radius:4px 0 0 4px;color:#98a1a4;margin-left:-3px;display:inline-block}.twitter-hash>div{position:absolute;align-items:center;justify-content:center;height:30px;width:30px;display:flex}.twitter-input{display:inline-block;margin-top:-6px;font-size:10px;height:27px;padding:0;position:relative;top:6px;vertical-align:top;width:108px;margin-left:-4px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], triangle: [{
                type: Input
            }] } });
class ColorTwitterModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorTwitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorTwitterModule, declarations: [TwitterComponent], imports: [CommonModule, SwatchModule, EditableInputModule], exports: [TwitterComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorTwitterModule, imports: [CommonModule, SwatchModule, EditableInputModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorTwitterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TwitterComponent],
                    exports: [TwitterComponent],
                    imports: [CommonModule, SwatchModule, EditableInputModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorTwitterModule, TwitterComponent };
//# sourceMappingURL=ngx-color-twitter.mjs.map
