import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, toState, AlphaModule, CheckboardModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class AlphaPickerComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 316;
    /** Pixel value for picker height */
    height = 16;
    direction = 'horizontal';
    pointer = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
    constructor() {
        super();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: AlphaPickerComponent, selector: "color-alpha-picker", inputs: { width: "width", height: "height", direction: "direction" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AlphaPickerComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => AlphaPickerComponent)
            }
        ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
    <div class="alpha-picker {{ className }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-alpha
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        [direction]="direction"
        (onChange)="handlePickerChange($event)"
      ></color-alpha>
    </div>
  `, isInline: true, styles: [".alpha-picker{position:relative}.color-alpha{radius:2px}\n"], dependencies: [{ kind: "component", type: i1.AlphaComponent, selector: "color-alpha", inputs: ["hsl", "rgb", "pointer", "shadow", "radius", "direction"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-alpha-picker', template: `
    <div class="alpha-picker {{ className }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-alpha
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        [direction]="direction"
        (onChange)="handlePickerChange($event)"
      ></color-alpha>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => AlphaPickerComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => AlphaPickerComponent)
                        }
                    ], styles: [".alpha-picker{position:relative}.color-alpha{radius:2px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], direction: [{
                type: Input
            }] } });
class ColorAlphaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorAlphaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorAlphaModule, declarations: [AlphaPickerComponent], imports: [CommonModule, AlphaModule, CheckboardModule], exports: [AlphaPickerComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorAlphaModule, imports: [CommonModule, AlphaModule, CheckboardModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorAlphaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlphaPickerComponent],
                    exports: [AlphaPickerComponent],
                    imports: [CommonModule, AlphaModule, CheckboardModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AlphaPickerComponent, ColorAlphaModule };
//# sourceMappingURL=ngx-color-alpha.mjs.map
