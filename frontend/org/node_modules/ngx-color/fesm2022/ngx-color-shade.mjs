import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, toState, ShadeModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class ShadeSliderComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 316;
    /** Pixel value for picker height */
    height = 16;
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
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ShadeSliderComponent, selector: "color-shade-picker", inputs: { width: "width", height: "height" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ShadeSliderComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => ShadeSliderComponent),
            },
        ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
    <div class="shade-slider {{ className || '' }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-shade
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-shade>
    </div>
  `, isInline: true, styles: [".shade-slider{position:relative}\n"], dependencies: [{ kind: "component", type: i1.ShadeComponent, selector: "color-shade", inputs: ["hsl", "rgb", "pointer", "shadow", "radius"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-shade-picker', template: `
    <div class="shade-slider {{ className || '' }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-shade
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-shade>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ShadeSliderComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => ShadeSliderComponent),
                        },
                    ], styles: [".shade-slider{position:relative}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });
class ColorShadeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorShadeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorShadeModule, declarations: [ShadeSliderComponent], imports: [CommonModule, ShadeModule], exports: [ShadeSliderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorShadeModule, imports: [CommonModule, ShadeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorShadeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShadeSliderComponent],
                    exports: [ShadeSliderComponent],
                    imports: [CommonModule, ShadeModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorShadeModule, ShadeSliderComponent };
//# sourceMappingURL=ngx-color-shade.mjs.map
