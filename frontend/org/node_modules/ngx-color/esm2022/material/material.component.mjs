import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, EditableInputModule, isValidHex, RaisedModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
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
export { MaterialComponent };
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
export { ColorMaterialModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [MaterialComponent],
                    declarations: [MaterialComponent],
                    imports: [CommonModule, EditableInputModule, RaisedModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tYXRlcmlhbC9tYXRlcmlhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkQsTUFpRWEsaUJBQWtCLFNBQVEsU0FBUztJQUM5QyxRQUFRLEdBQTRCO1FBQ2xDLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixPQUFPLEVBQUUsS0FBSztRQUNkLGNBQWMsRUFBRSxhQUFhO1FBQzdCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDO0lBQ0YsUUFBUSxHQUE0QjtRQUNsQyxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsS0FBSztRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixnQkFBZ0IsRUFBRSxZQUFZO0tBQy9CLENBQUM7SUFDRixRQUFRLEdBQTRCO1FBQ2xDLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFB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USxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7O0FBd0NSLE1BS2EsbUJBQW1CO3VHQUFuQixtQkFBbUI7d0dBQW5CLG1CQUFtQixpQkFyRm5CLGlCQUFpQixhQW1GbEIsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksYUFuRjlDLGlCQUFpQjt3R0FxRmpCLG1CQUFtQixZQUZwQixZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWTs7U0FFOUMsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2lCQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sb3JXcmFwLCBFZGl0YWJsZUlucHV0TW9kdWxlLCBpc1ZhbGlkSGV4LCBSYWlzZWRNb2R1bGUsIHpEZXB0aCB9IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItbWF0ZXJpYWwnLFxuICB0ZW1wbGF0ZTogYFxuICA8Y29sb3ItcmFpc2VkIFt6RGVwdGhdPVwiekRlcHRoXCIgW2JhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiIFtyYWRpdXNdPVwicmFkaXVzXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dCBsYWJlbD1cImhleFwiIFt2YWx1ZV09XCJoZXhcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IEhFWGlucHV0LCBsYWJlbDogSEVYbGFiZWx9XCJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXNwbGl0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC10aGlyZFwiPlxuICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dCBsYWJlbD1cInJcIiBbdmFsdWVdPVwicmdiLnJcIlxuICAgICAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IFJHQmlucHV0LCBsYWJlbDogUkdCbGFiZWwgfVwiXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdGhpcmRcIj5cbiAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXQgbGFiZWw9XCJnXCIgW3ZhbHVlXT1cInJnYi5nXCJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBSR0JpbnB1dCwgbGFiZWw6IFJHQmxhYmVsIH1cIlxuICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUlucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRoaXJkXCI+XG4gICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0IGxhYmVsPVwiYlwiIFt2YWx1ZV09XCJyZ2IuYlwiXG4gICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogUkdCaW5wdXQsIGxhYmVsOiBSR0JsYWJlbCB9XCJcbiAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVJbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9jb2xvci1yYWlzZWQ+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgLm1hdGVyaWFsLXBpY2tlciB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICB9XG4gIC5tYXRlcmlhbC1zcGxpdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICB9XG4gIC5tYXRlcmlhbC10aGlyZCB7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGVyaWFsQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29sb3JXcmFwLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0ZXJpYWxDb21wb25lbnQpLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xuICBIRVhpbnB1dDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcbiAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgIGNvbG9yOiAncmdiKDUxLCA1MSwgNTEpJyxcbiAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICAnYm9yZGVyLXdpZHRoJzogJzBweCAwcHggMnB4JyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gIH07XG4gIEhFWGxhYmVsOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIGxlZnQ6ICcwcHgnLFxuICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgY29sb3I6ICdyZ2IoMTUzLCAxNTMsIDE1MyknLFxuICAgICd0ZXh0LXRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyxcbiAgfTtcbiAgUkdCaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXG4gICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIHBhZGRpbmc6ICcwcHgnLFxuICAgIGJvcmRlcjogJzBweCcsXG4gICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgfTtcbiAgUkdCbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICBjb2xvcjogJyM5OTk5OTknLFxuICAgICd0ZXh0LXRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyxcbiAgfTtcbiAgQElucHV0KCkgekRlcHRoOiB6RGVwdGggPSAxO1xuICBASW5wdXQoKSByYWRpdXMgPSAxO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kID0gJyNmZmYnO1xuICBkaXNhYmxlQWxwaGEgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICBpZiAoZGF0YS5oZXgpIHtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KGRhdGEuaGV4KSkge1xuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBoZXg6IGRhdGEuaGV4LFxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICRldmVudCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xuICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICByOiBkYXRhLnIgfHwgdGhpcy5yZ2IucixcbiAgICAgICAgICBnOiBkYXRhLmcgfHwgdGhpcy5yZ2IuZyxcbiAgICAgICAgICBiOiBkYXRhLmIgfHwgdGhpcy5yZ2IuYixcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxuICAgICAgICB9LFxuICAgICAgICAkZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZnRlclZhbGlkQ2hhbmdlKCkge1xuICAgIHRoaXMuSEVYaW5wdXRbJ2JvcmRlci1ib3R0b20tY29sb3InXSA9IHRoaXMuaGV4O1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtNYXRlcmlhbENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW01hdGVyaWFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRWRpdGFibGVJbnB1dE1vZHVsZSwgUmFpc2VkTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JNYXRlcmlhbE1vZHVsZSB7IH1cbiJdfQ==