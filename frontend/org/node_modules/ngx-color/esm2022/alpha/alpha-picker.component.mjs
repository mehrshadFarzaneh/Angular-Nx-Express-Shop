import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, toState } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
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
export { AlphaPickerComponent };
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
export { ColorAlphaModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorAlphaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlphaPickerComponent],
                    exports: [AlphaPickerComponent],
                    imports: [CommonModule, AlphaModule, CheckboardModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYWxwaGEvYWxwaGEtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVuRCxNQXNDYSxvQkFBcUIsU0FBUSxTQUFTO0lBQ2pELG1DQUFtQztJQUMxQixLQUFLLEdBQW9CLEdBQUcsQ0FBQztJQUN0QyxvQ0FBb0M7SUFDM0IsTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDN0IsU0FBUyxHQUE4QixZQUFZLENBQUM7SUFDN0QsT0FBTyxHQUE0QjtRQUNqQyxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxTQUFTLEVBQUUsaUNBQWlDO0tBQzdDLENBQUM7SUFFRjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7dUdBekJVLG9CQUFvQjsyRkFBcEIsb0JBQW9CLG1IQVpwQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsU0FBUztnQkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNwRDtTQUNGLHNFQWxDUzs7Ozs7Ozs7Ozs7R0FXVDs7U0F5QlUsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBdENoQyxTQUFTOytCQUNFLG9CQUFvQixZQUNwQjs7Ozs7Ozs7Ozs7R0FXVCxtQkFXZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7eUJBQ3BEO3FCQUNGOzBFQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSzs7QUF1QlIsTUFLYSxnQkFBZ0I7dUdBQWhCLGdCQUFnQjt3R0FBaEIsZ0JBQWdCLGlCQWpDaEIsb0JBQW9CLGFBK0JyQixZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixhQS9CMUMsb0JBQW9CO3dHQWlDcEIsZ0JBQWdCLFlBRmpCLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCOztTQUUxQyxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBOZ01vZHVsZSwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFscGhhTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlLCBDb2xvcldyYXAsIHRvU3RhdGUgfSBmcm9tICduZ3gtY29sb3InO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWFscGhhLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFscGhhLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIlxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cbiAgICAgIDxjb2xvci1hbHBoYVxuICAgICAgICBbaHNsXT1cImhzbFwiXG4gICAgICAgIFtyZ2JdPVwicmdiXCJcbiAgICAgICAgW3BvaW50ZXJdPVwicG9pbnRlclwiXG4gICAgICAgIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLWFscGhhPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLmFscGhhLXBpY2tlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5jb2xvci1hbHBoYSB7XG4gICAgICByYWRpdXM6IDJweDtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBbHBoYVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFscGhhUGlja2VyQ29tcG9uZW50KVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbHBoYVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAzMTY7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIGhlaWdodCAqL1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDE2O1xuICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIHBvaW50ZXI6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHdpZHRoOiAnMThweCcsXG4gICAgaGVpZ2h0OiAnMThweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTlweCwgLTJweCknLFxuICAgIGJveFNoYWRvdzogJzAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyknLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLnBvaW50ZXIudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtM3B4LCAtOXB4KSc7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUodG9TdGF0ZSh0aGlzLmNvbG9yLCB0aGlzLm9sZEh1ZSkpO1xuICB9XG4gIGhhbmRsZVBpY2tlckNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBbHBoYVBpY2tlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbHBoYVBpY2tlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFscGhhTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JBbHBoYU1vZHVsZSB7fVxuIl19