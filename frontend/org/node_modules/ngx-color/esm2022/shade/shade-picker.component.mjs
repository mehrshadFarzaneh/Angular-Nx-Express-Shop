import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, ShadeModule, toState } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
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
export { ShadeSliderComponent };
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
export { ColorShadeModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorShadeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShadeSliderComponent],
                    exports: [ShadeSliderComponent],
                    imports: [CommonModule, ShadeModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2hhZGUvc2hhZGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVuRCxNQWtDYSxvQkFBcUIsU0FBUSxTQUFTO0lBQ2pELG1DQUFtQztJQUMxQixLQUFLLEdBQW9CLEdBQUcsQ0FBQztJQUN0QyxvQ0FBb0M7SUFDM0IsTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDdEMsT0FBTyxHQUE0QjtRQUNqQyxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxTQUFTLEVBQUUsaUNBQWlDO0tBQzdDLENBQUM7SUFFRjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzt1R0FyQlUsb0JBQW9COzJGQUFwQixvQkFBb0IsMkZBWnBCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbkQsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ3BEO1NBQ0Ysc0VBOUJTOzs7Ozs7Ozs7O0dBVVQ7O1NBc0JVLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQWxDaEMsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEI7Ozs7Ozs7Ozs7R0FVVCxtQkFRZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7eUJBQ3BEO3FCQUNGOzBFQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7O0FBb0JSLE1BS2EsZ0JBQWdCO3VHQUFoQixnQkFBZ0I7d0dBQWhCLGdCQUFnQixpQkE3QmhCLG9CQUFvQixhQTJCckIsWUFBWSxFQUFFLFdBQVcsYUEzQnhCLG9CQUFvQjt3R0E2QnBCLGdCQUFnQixZQUZqQixZQUFZLEVBQUUsV0FBVzs7U0FFeEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JXcmFwLCBTaGFkZU1vZHVsZSwgdG9TdGF0ZSB9IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc2hhZGUtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhZGUtc2xpZGVyIHt7IGNsYXNzTmFtZSB8fCAnJyB9fVwiXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxuICAgICAgPGNvbG9yLXNoYWRlXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgW3JnYl09XCJyZ2JcIlxuICAgICAgICBbcG9pbnRlcl09XCJwb2ludGVyXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLXNoYWRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnNoYWRlLXNsaWRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2hhZGVTbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb2xvcldyYXAsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTaGFkZVNsaWRlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFkZVNsaWRlckNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAzMTY7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIGhlaWdodCAqL1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDE2O1xuICBwb2ludGVyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICB3aWR0aDogJzE4cHgnLFxuICAgIGhlaWdodDogJzE4cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC05cHgsIC0ycHgpJyxcbiAgICBib3hTaGFkb3c6ICcwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodG9TdGF0ZSh0aGlzLmNvbG9yLCB0aGlzLm9sZEh1ZSkpO1xuICB9XG4gIGhhbmRsZVBpY2tlckNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaGFkZVNsaWRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaGFkZVNsaWRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYWRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JTaGFkZU1vZHVsZSB7fVxuIl19