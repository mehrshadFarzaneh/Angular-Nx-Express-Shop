import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, HueModule, SwatchModule } from 'ngx-color';
import { SliderSwatchComponent } from './slider-swatch.component';
import { SliderSwatchesComponent } from './slider-swatches.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
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
export { SliderComponent };
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
export { ColorSliderModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkQsTUF1Q2EsZUFBZ0IsU0FBUSxTQUFTO0lBRTVDLE9BQU8sR0FBMkI7UUFDaEMsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsZUFBZSxFQUFFLG9CQUFvQjtRQUNyQyxTQUFTLEVBQUUsaUNBQWlDO0tBQzdDLENBQUM7SUFDTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRXBCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsa0JBQWtCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7dUdBbEJVLGVBQWU7MkZBQWYsZUFBZSx5RkFaZjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQy9DO1NBQ0YsaURBbkNTOzs7Ozs7Ozs7Ozs7OztHQWNULHdXQWdEQyx1QkFBdUI7O1NBekJkLGVBQWU7MkZBQWYsZUFBZTtrQkF2QzNCLFNBQVM7K0JBQ0UsY0FBYyxZQUNkOzs7Ozs7Ozs7Ozs7OztHQWNULG1CQVNnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLLGFBQ2Y7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxTQUFTOzRCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzt5QkFDL0M7cUJBQ0Y7MEVBSUQsT0FBTztzQkFETixLQUFLO2dCQVNHLE1BQU07c0JBQWQsS0FBSzs7QUFXUixNQVNhLGlCQUFpQjt1R0FBakIsaUJBQWlCO3dHQUFqQixpQkFBaUIsaUJBOUJqQixlQUFlLEVBd0J4QixxQkFBcUI7WUFDckIsdUJBQXVCLGFBR2YsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLGFBNUJwQyxlQUFlLEVBMkJDLHFCQUFxQixFQUFFLHVCQUF1Qjt3R0FHOUQsaUJBQWlCLFlBRmxCLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWTs7U0FFcEMsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBVDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQztvQkFDMUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUM7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIEh1ZU1vZHVsZSwgU3dhdGNoTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IFNsaWRlclN3YXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLXN3YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyU3dhdGNoZXNDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci1zd2F0Y2hlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJzbGlkZXItcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItaHVlXCI+XG4gICAgICA8Y29sb3ItaHVlXG4gICAgICAgIFtoc2xdPVwiaHNsXCIgW3JhZGl1c109XCJyYWRpdXNcIiBbcG9pbnRlcl09XCJwb2ludGVyXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLWh1ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXN3YXRjaGVzXCI+XG4gICAgICA8Y29sb3Itc2xpZGVyLXN3YXRjaGVzIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvY29sb3Itc2xpZGVyLXN3YXRjaGVzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5zbGlkZXItaHVlIHtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb2xvcldyYXAsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcbiAgQElucHV0KClcbiAgcG9pbnRlcjogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICB3aWR0aDogJzE0cHgnLFxuICAgIGhlaWdodDogJzE0cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC03cHgsIC0ycHgpJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknLFxuICAgIGJveFNoYWRvdzogJzAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyknLFxuICB9O1xuICBASW5wdXQoKSByYWRpdXMgPSAyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBoYW5kbGVQaWNrZXJDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2xpZGVyQ29tcG9uZW50LFxuICAgIFNsaWRlclN3YXRjaENvbXBvbmVudCxcbiAgICBTbGlkZXJTd2F0Y2hlc0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1NsaWRlckNvbXBvbmVudCwgU2xpZGVyU3dhdGNoQ29tcG9uZW50LCBTbGlkZXJTd2F0Y2hlc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh1ZU1vZHVsZSwgU3dhdGNoTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JTbGlkZXJNb2R1bGUge31cbiJdfQ==