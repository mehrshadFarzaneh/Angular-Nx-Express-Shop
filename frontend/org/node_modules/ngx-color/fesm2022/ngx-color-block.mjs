import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ngx-color';
import { ColorWrap, getContrastingColor, isValidHex, CheckboardModule, SwatchModule, EditableInputModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class BlockSwatchesComponent {
    colors;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockSwatchesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: BlockSwatchesComponent, selector: "color-block-swatches", inputs: { colors: "colors" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, isInline: true, styles: [".block-swatches{margin-right:-10px}.clear{clear:both}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockSwatchesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-block-swatches', template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, styles: [".block-swatches{margin-right:-10px}.clear{clear:both}\n"] }]
        }], propDecorators: { colors: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });

class BlockComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 170;
    /** Color squares to display */
    colors = [
        '#D9E3F0',
        '#F47373',
        '#697689',
        '#37D67A',
        '#2CCCE4',
        '#555555',
        '#dce775',
        '#ff8a65',
        '#ba68c8',
    ];
    triangle = 'top';
    input = {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box',
    };
    wrap = {
        position: 'relative',
        width: '100%',
    };
    disableAlpha = true;
    constructor() {
        super();
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    getContrastingColor(hex) {
        return getContrastingColor(hex);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: BlockComponent, selector: "color-block", inputs: { width: "width", colors: "colors", triangle: "triangle" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BlockComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => BlockComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="block-card block-picker {{ className }}">
    <div class="block-triangle" *ngIf="triangle !== 'hide'"
      [style.border-color]="'transparent transparent ' + this.hex + ' transparent'"
    ></div>

    <div class="block-head" [style.background]="hex">
      <color-checkboard *ngIf="hex === 'transparent'"
        borderRadius="6px 6px 0 0"
      ></color-checkboard>
      <div class="block-label" [style.color]="getContrastingColor(hex)">
        {{ hex }}
      </div>
    </div>

    <div class="block-body">
      <color-block-swatches [colors]="colors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-block-swatches>
      <color-editable-input [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: input, wrap: wrap}"
      ></color-editable-input>
    </div>
  </div>
  `, isInline: true, styles: [".block-card{background:#fff;border-radius:6px;box-shadow:0 1px #0000001a;position:relative}.block-head{align-items:center;border-radius:6px 6px 0 0;display:flex;height:110px;justify-content:center;position:relative}.block-body{padding:10px}.block-label{font-size:18px;position:relative}.block-triangle{border-style:solid;border-width:0 10px 10px 10px;height:0;left:50%;margin-left:-10px;position:absolute;top:-10px;width:0}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i2.CheckboardComponent; }), selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "component", type: i0.forwardRef(function () { return i2.EditableInputComponent; }), selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return BlockSwatchesComponent; }), selector: "color-block-swatches", inputs: ["colors"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-block', template: `
  <div class="block-card block-picker {{ className }}">
    <div class="block-triangle" *ngIf="triangle !== 'hide'"
      [style.border-color]="'transparent transparent ' + this.hex + ' transparent'"
    ></div>

    <div class="block-head" [style.background]="hex">
      <color-checkboard *ngIf="hex === 'transparent'"
        borderRadius="6px 6px 0 0"
      ></color-checkboard>
      <div class="block-label" [style.color]="getContrastingColor(hex)">
        {{ hex }}
      </div>
    </div>

    <div class="block-body">
      <color-block-swatches [colors]="colors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-block-swatches>
      <color-editable-input [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: input, wrap: wrap}"
      ></color-editable-input>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BlockComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => BlockComponent),
                        },
                    ], styles: [".block-card{background:#fff;border-radius:6px;box-shadow:0 1px #0000001a;position:relative}.block-head{align-items:center;border-radius:6px 6px 0 0;display:flex;height:110px;justify-content:center;position:relative}.block-body{padding:10px}.block-label{font-size:18px;position:relative}.block-triangle{border-style:solid;border-width:0 10px 10px 10px;height:0;left:50%;margin-left:-10px;position:absolute;top:-10px;width:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], triangle: [{
                type: Input
            }] } });
class ColorBlockModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorBlockModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorBlockModule, declarations: [BlockComponent, BlockSwatchesComponent], imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule], exports: [BlockComponent, BlockSwatchesComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorBlockModule, imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorBlockModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BlockComponent, BlockSwatchesComponent],
                    exports: [BlockComponent, BlockSwatchesComponent],
                    imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BlockComponent, BlockSwatchesComponent, ColorBlockModule };
//# sourceMappingURL=ngx-color-block.mjs.map
