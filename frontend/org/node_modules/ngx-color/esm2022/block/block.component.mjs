import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { CheckboardModule, ColorWrap, EditableInputModule, getContrastingColor, isValidHex, SwatchModule, } from 'ngx-color';
import { BlockSwatchesComponent } from './block-swatches.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
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
export { BlockComponent };
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
export { ColorBlockModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorBlockModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BlockComponent, BlockSwatchesComponent],
                    exports: [BlockComponent, BlockSwatchesComponent],
                    imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9ibG9jay9ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5ELE1BOEVhLGNBQWUsU0FBUSxTQUFTO0lBQzNDLG1DQUFtQztJQUMxQixLQUFLLEdBQW9CLEdBQUcsQ0FBQztJQUN0QywrQkFBK0I7SUFDdEIsTUFBTSxHQUFHO1FBQ2hCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNWLENBQUM7SUFDTyxRQUFRLEdBQW1CLEtBQUssQ0FBQztJQUMxQyxLQUFLLEdBQTRCO1FBQy9CLEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsTUFBTSxFQUFFLE1BQU07UUFDZCxTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFlBQVksRUFBRSxLQUFLO1FBQ25CLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxZQUFZO0tBQ3hCLENBQUM7SUFDRixJQUFJLEdBQTRCO1FBQzlCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztJQUNGLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFcEI7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxHQUFHO1FBQ3JCLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FDZjtnQkFDRSxHQUFHO2dCQUNILE1BQU0sRUFBRSxLQUFLO2FBQ2QsRUFDRCxNQUFNLENBQ1AsQ0FBQztTQUNIO0lBQ0gsQ0FBQzt1R0F2RFUsY0FBYzsyRkFBZCxjQUFjLDBHQVpkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsU0FBUztnQkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDOUM7U0FDRixpREExRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJULDhrQ0E2RzhCLHNCQUFzQjs7U0EzRDFDLGNBQWM7MkZBQWQsY0FBYztrQkE5RTFCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVCx1QkFvQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxTQUFTOzRCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUM7eUJBQzlDO3FCQUNGOzBFQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBV0csUUFBUTtzQkFBaEIsS0FBSzs7QUEyQ1IsTUFLYSxnQkFBZ0I7dUdBQWhCLGdCQUFnQjt3R0FBaEIsZ0JBQWdCLGlCQS9EaEIsY0FBYyxFQTJETSxzQkFBc0IsYUFFM0MsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsYUE3RGhFLGNBQWMsRUE0REMsc0JBQXNCO3dHQUdyQyxnQkFBZ0IsWUFGakIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUI7O1NBRWhFLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUw1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLHNCQUFzQixDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2lCQUM3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tib2FyZE1vZHVsZSxcbiAgQ29sb3JXcmFwLFxuICBFZGl0YWJsZUlucHV0TW9kdWxlLFxuICBnZXRDb250cmFzdGluZ0NvbG9yLFxuICBpc1ZhbGlkSGV4LFxuICBTd2F0Y2hNb2R1bGUsXG59IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBCbG9ja1N3YXRjaGVzQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9jay1zd2F0Y2hlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImJsb2NrLWNhcmQgYmxvY2stcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJibG9jay10cmlhbmdsZVwiICpuZ0lmPVwidHJpYW5nbGUgIT09ICdoaWRlJ1wiXG4gICAgICBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIid0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAnICsgdGhpcy5oZXggKyAnIHRyYW5zcGFyZW50J1wiXG4gICAgPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrLWhlYWRcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJoZXhcIj5cbiAgICAgIDxjb2xvci1jaGVja2JvYXJkICpuZ0lmPVwiaGV4ID09PSAndHJhbnNwYXJlbnQnXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNnB4IDZweCAwIDBcIlxuICAgICAgPjwvY29sb3ItY2hlY2tib2FyZD5cbiAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1sYWJlbFwiIFtzdHlsZS5jb2xvcl09XCJnZXRDb250cmFzdGluZ0NvbG9yKGhleClcIj5cbiAgICAgICAge3sgaGV4IH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJibG9jay1ib2R5XCI+XG4gICAgICA8Y29sb3ItYmxvY2stc3dhdGNoZXMgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG9uU3dhdGNoSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgPjwvY29sb3ItYmxvY2stc3dhdGNoZXM+XG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXQgW3ZhbHVlXT1cImhleFwiXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW3N0eWxlXT1cIntpbnB1dDogaW5wdXQsIHdyYXA6IHdyYXB9XCJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5ibG9jay1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmJsb2NrLWhlYWQge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmJsb2NrLWJvZHkge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmJsb2NrLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmJsb2NrLXRyaWFuZ2xlIHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItd2lkdGg6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICBgLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmxvY2tDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb2xvcldyYXAsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCbG9ja0NvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9ja0NvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAxNzA7XG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjRDlFM0YwJyxcbiAgICAnI0Y0NzM3MycsXG4gICAgJyM2OTc2ODknLFxuICAgICcjMzdENjdBJyxcbiAgICAnIzJDQ0NFNCcsXG4gICAgJyM1NTU1NTUnLFxuICAgICcjZGNlNzc1JyxcbiAgICAnI2ZmOGE2NScsXG4gICAgJyNiYTY4YzgnLFxuICBdO1xuICBASW5wdXQoKSB0cmlhbmdsZTogJ3RvcCcgfCAnaGlkZScgPSAndG9wJztcbiAgaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJyM2NjYnLFxuICAgIGJvcmRlcjogJzBweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGhlaWdodDogJzIycHgnLFxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCAjZGRkJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIHBhZGRpbmc6ICcwIDdweCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH07XG4gIHdyYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH07XG4gIGRpc2FibGVBbHBoYSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4OiBkYXRhLCAkZXZlbnQgfSk7XG4gIH1cbiAgZ2V0Q29udHJhc3RpbmdDb2xvcihoZXgpIHtcbiAgICByZXR1cm4gZ2V0Q29udHJhc3RpbmdDb2xvcihoZXgpO1xuICB9XG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcbiAgICAgIC8vIHRoaXMuaGV4ID0gaGV4O1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICBoZXgsXG4gICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgfSxcbiAgICAgICAgJGV2ZW50LFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmxvY2tDb21wb25lbnQsIEJsb2NrU3dhdGNoZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmxvY2tDb21wb25lbnQsIEJsb2NrU3dhdGNoZXNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlLCBTd2F0Y2hNb2R1bGUsIEVkaXRhYmxlSW5wdXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvckJsb2NrTW9kdWxlIHt9XG4iXX0=