import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, EditableInputModule, isValidHex, SwatchModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
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
export { TwitterComponent };
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
export { ColorTwitterModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorTwitterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TwitterComponent],
                    exports: [TwitterComponent],
                    imports: [CommonModule, SwatchModule, EditableInputModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3R3aXR0ZXIvdHdpdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5ELE1BcUlhLGdCQUFpQixTQUFRLFNBQVM7SUFDN0MsbUNBQW1DO0lBQzFCLEtBQUssR0FBb0IsR0FBRyxDQUFDO0lBQ3RDLCtCQUErQjtJQUN0QixNQUFNLEdBQUc7UUFDaEIsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNWLENBQUM7SUFDTyxRQUFRLEdBQXVELFVBQVUsQ0FBQztJQUVuRixXQUFXLEdBQTRCO1FBQ3JDLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixRQUFRLEVBQUUsR0FBRztLQUNkLENBQUM7SUFDRixLQUFLLEdBQTRCO1FBQy9CLFlBQVksRUFBRSxLQUFLO1FBQ25CLHNCQUFzQixFQUFFLEdBQUc7UUFDM0IsbUJBQW1CLEVBQUUsR0FBRztRQUN4QixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLEdBQUc7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxTQUFTO0tBQ2pCLENBQUM7SUFDRixZQUFZLEdBQUcsSUFBSSxDQUFDO0lBRXBCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWE7UUFDakIsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBTztRQUNwQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFPO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO3VHQXpEVSxnQkFBZ0I7MkZBQWhCLGdCQUFnQiw0R0FaaEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMvQyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDaEQ7U0FDRixpREFqSVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJUOztTQXlHVSxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFySTVCLFNBQVM7K0JBQ0UsZUFBZSxZQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVCxtQkEyRmdCLHVCQUF1QixDQUFDLE1BQU0sdUJBQzFCLEtBQUssYUFDZjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDO3lCQUNoRDtxQkFDRjswRUFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsTUFBTTtzQkFBZCxLQUFLO2dCQVlHLFFBQVE7c0JBQWhCLEtBQUs7O0FBNENSLE1BS2Esa0JBQWtCO3VHQUFsQixrQkFBa0I7d0dBQWxCLGtCQUFrQixpQkFqRWxCLGdCQUFnQixhQStEakIsWUFBWSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsYUEvRDlDLGdCQUFnQjt3R0FpRWhCLGtCQUFrQixZQUZuQixZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQjs7U0FFOUMsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2lCQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sb3JXcmFwLCBFZGl0YWJsZUlucHV0TW9kdWxlLCBpc1ZhbGlkSGV4LCBTd2F0Y2hNb2R1bGUgfSBmcm9tICduZ3gtY29sb3InO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXR3aXR0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwidHdpdHRlci1waWNrZXIge3sgdHJpYW5nbGUgfX0tdHJpYW5nbGUge3sgY2xhc3NOYW1lIH19XCIgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCI+XG4gICAgPGRpdiBjbGFzcz1cInRyaWFuZ2xlU2hhZG93XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRyaWFuZ2xlXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR3aXR0ZXItYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInR3aXR0ZXItc3dhdGNoXCIgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNvbG9yc1wiPlxuICAgICAgICA8Y29sb3Itc3dhdGNoXG4gICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICBbc3R5bGVdPVwic3dhdGNoU3R5bGVcIlxuICAgICAgICAgIFtmb2N1c1N0eWxlXT1cImZvY3VzKGNvbG9yKVwiXG4gICAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQmxvY2tDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKG9uSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICA+PC9jb2xvci1zd2F0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2l0dGVyLWhhc2hcIj5cbiAgICAgICAgPGRpdj4jPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2l0dGVyLWlucHV0XCI+XG4gICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCB9XCJcbiAgICAgICAgICBbdmFsdWVdPVwiaGV4LnJlcGxhY2UoJyMnLCAnJylcIlxuICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAudHdpdHRlci1waWNrZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDFweCA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAudHJpYW5nbGVTaGFkb3cge1xuICAgICAgd2lkdGg6IDBweDtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMHB4IDlweCAxMHB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC50cmlhbmdsZSB7XG4gICAgICB3aWR0aDogMHB4O1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwcHggOXB4IDEwcHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmhpZGUtdHJpYW5nbGUgPiAudHJpYW5nbGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhpZGUtdHJpYW5nbGUgPiAudHJpYW5nbGVTaGFkb3cge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRvcC1sZWZ0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgICAudG9wLWxlZnQtdHJpYW5nbGUgPiAudHJpYW5nbGVTaGFkb3cge1xuICAgICAgdG9wOiAtMTFweDtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgfVxuICAgIC50b3AtcmlnaHQtdHJpYW5nbGUgPiAudHJpYW5nbGUge1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICAudG9wLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcbiAgICAgIHRvcDogLTExcHg7XG4gICAgICByaWdodDogMTJweDtcbiAgICB9XG4gICAgLnR3aXR0ZXItYm9keSB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDlweCA5cHggMTVweDtcbiAgICB9XG4gICAgLnR3aXR0ZXItc3dhdGNoIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwIDZweCAwIDA7XG4gICAgfVxuICAgIC50d2l0dGVyLWhhc2gge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG4gICAgICBjb2xvcjogcmdiKDE1MiwgMTYxLCAxNjQpO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICB9XG4gICAgLnR3aXR0ZXItaGFzaCA+IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC50d2l0dGVyLWlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiA2cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgd2lkdGg6IDEwOHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVHdpdHRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFR3aXR0ZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHdpdHRlckNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyNzY7XG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjRkY2OTAwJyxcbiAgICAnI0ZDQjkwMCcsXG4gICAgJyM3QkRDQjUnLFxuICAgICcjMDBEMDg0JyxcbiAgICAnIzhFRDFGQycsXG4gICAgJyMwNjkzRTMnLFxuICAgICcjQUJCOEMzJyxcbiAgICAnI0VCMTQ0QycsXG4gICAgJyNGNzhEQTcnLFxuICAgICcjOTkwMEVGJyxcbiAgXTtcbiAgQElucHV0KCkgdHJpYW5nbGU6ICdoaWRlJyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tcmlnaHQnID0gJ3RvcC1sZWZ0JztcblxuICBzd2F0Y2hTdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgd2lkdGg6ICczMHB4JyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGZvbnRTaXplOiAnMCcsXG4gIH07XG4gIGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcwJyxcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlNmVjZjAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHBhZGRpbmdMZWZ0OiAnNnB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGNvbG9yOiAnIzY1Nzc4NicsXG4gIH07XG4gIGRpc2FibGVBbHBoYSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGZvY3VzKGNvbG9yOiBzdHJpbmcpIHtcbiAgICByZXR1cm4geyBib3hTaGFkb3c6IGAwIDAgNHB4ICR7Y29sb3J9YCB9O1xuICB9XG5cbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9OiBhbnkpIHtcbiAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICAvLyB0aGlzLmhleCA9IGhleDtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgaGV4LCBzb3VyY2U6ICdoZXgnIH0sICRldmVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfTogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVCbG9ja0NoYW5nZSh7IGhleDogZGF0YSwgJGV2ZW50IH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1R3aXR0ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHdpdHRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN3YXRjaE1vZHVsZSwgRWRpdGFibGVJbnB1dE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yVHdpdHRlck1vZHVsZSB7fVxuIl19