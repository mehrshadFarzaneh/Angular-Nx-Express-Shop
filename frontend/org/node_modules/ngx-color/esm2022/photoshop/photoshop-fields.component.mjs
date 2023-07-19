import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
class PhotoshopFieldsComponent {
    rgb;
    hsv;
    hex;
    onChange = new EventEmitter();
    RGBinput = {
        marginLeft: '35%',
        width: '40%',
        height: '22px',
        border: '1px solid rgb(136, 136, 136)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
        marginBottom: '2px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px',
    };
    RGBwrap = {
        position: 'relative',
    };
    RGBlabel = {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '24px',
        lineHeight: '24px',
        position: 'absolute',
    };
    HEXinput = {
        marginLeft: '20%',
        width: '80%',
        height: '22px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '3px',
        fontSize: '13px',
        paddingLeft: '3px',
    };
    HEXwrap = {
        position: 'relative',
    };
    HEXlabel = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '24px',
        lineHeight: '24px',
    };
    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (isValidHex(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: PhotoshopFieldsComponent, selector: "color-photoshop-fields", inputs: { rgb: "rgb", hsv: "hsv", hex: "hex" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `, isInline: true, styles: [".photoshop-fields{padding-top:5px;padding-bottom:9px;width:85px;position:relative}.photoshop-field-symbols{position:absolute;top:5px;right:-7px;font-size:13px}.photoshop-symbol{height:24px;line-height:24px;padding-bottom:7px}.photoshop-divider{height:5px}\n"], dependencies: [{ kind: "component", type: i1.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { PhotoshopFieldsComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-photoshop-fields', template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".photoshop-fields{padding-top:5px;padding-bottom:9px;width:85px;position:relative}.photoshop-field-symbols{position:absolute;top:5px;right:-7px;font-size:13px}.photoshop-symbol{height:24px;line-height:24px;padding-bottom:7px}.photoshop-divider{height:5px}\n"] }]
        }], propDecorators: { rgb: [{
                type: Input
            }], hsv: [{
                type: Input
            }], hex: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3Bob3Rvc2hvcC9waG90b3Nob3AtZmllbGRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sV0FBVyxDQUFDOzs7QUFFakQsTUFrRmEsd0JBQXdCO0lBQzFCLEdBQUcsQ0FBTztJQUNWLEdBQUcsQ0FBTztJQUNWLEdBQUcsQ0FBVTtJQUNaLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzdDLFFBQVEsR0FBMkI7UUFDakMsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSw4QkFBOEI7UUFDdEMsU0FBUyxFQUNQLDBFQUEwRTtRQUM1RSxZQUFZLEVBQUUsS0FBSztRQUNuQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsS0FBSztRQUNsQixXQUFXLEVBQUUsTUFBTTtLQUNwQixDQUFDO0lBQ0YsT0FBTyxHQUEyQjtRQUNoQyxRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0lBQ0YsUUFBUSxHQUEyQjtRQUNqQyxJQUFJLEVBQUUsS0FBSztRQUNYLEtBQUssRUFBRSxNQUFNO1FBQ2IsYUFBYSxFQUFFLFdBQVc7UUFDMUIsUUFBUSxFQUFFLE1BQU07UUFDaEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0lBQ0YsUUFBUSxHQUEyQjtRQUNqQyxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixTQUFTLEVBQUUsbURBQW1EO1FBQzlELFlBQVksRUFBRSxLQUFLO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxLQUFLO0tBQ25CLENBQUM7SUFDRixPQUFPLEdBQTJCO1FBQ2hDLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7SUFDRixRQUFRLEdBQTJCO1FBQ2pDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLGFBQWEsRUFBRSxXQUFXO1FBQzFCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUVGLEtBQUssQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRTt3QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxNQUFNO2lCQUNQLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7dUdBeEZVLHdCQUF3QjsyRkFBeEIsd0JBQXdCLGlKQWhGekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQ7O1NBNEJVLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQWxGcEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQsbUJBeUJnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLOzhCQUdqQixHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNWYWxpZEhleCwgSFNWLCBSR0IgfSBmcm9tICduZ3gtY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1waG90b3Nob3AtZmllbGRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1maWVsZHNcIj5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJyb3VuZChoc3YuaClcIlxuICAgICAgbGFiZWw9XCJoXCJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJyb3VuZChoc3YucyAqIDEwMClcIlxuICAgICAgbGFiZWw9XCJzXCJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJyb3VuZChoc3YudiAqIDEwMClcIlxuICAgICAgbGFiZWw9XCJ2XCJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWRpdmlkZXJcIj48L2Rpdj5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJyZ2IuclwiXG4gICAgICBsYWJlbD1cInJcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cInJnYi5nXCJcbiAgICAgIGxhYmVsPVwiZ1wiXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbc3R5bGVdPVwie2lucHV0OiBSR0JpbnB1dCwgd3JhcDogUkdCd3JhcCwgbGFiZWw6IFJHQmxhYmVsfVwiXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICBbdmFsdWVdPVwicmdiLmJcIlxuICAgICAgbGFiZWw9XCJiXCJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWRpdmlkZXJcIj48L2Rpdj5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJoZXgucmVwbGFjZSgnIycsICcnKVwiXG4gICAgICBsYWJlbD1cIiNcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogSEVYaW5wdXQsIHdyYXA6IEhFWHdyYXAsIGxhYmVsOiBIRVhsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtZmllbGQtc3ltYm9sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1zeW1ib2xcIj7CsDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1zeW1ib2xcIj4lPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXN5bWJvbFwiPiU8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAucGhvdG9zaG9wLWZpZWxkcyB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucGhvdG9zaG9wLWZpZWxkLXN5bWJvbHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICByaWdodDogLTdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnBob3Rvc2hvcC1zeW1ib2wge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgIH1cbiAgICAucGhvdG9zaG9wLWRpdmlkZXIge1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBob3Rvc2hvcEZpZWxkc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJnYiE6IFJHQjtcbiAgQElucHV0KCkgaHN2ITogSFNWO1xuICBASW5wdXQoKSBoZXghOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBSR0JpbnB1dDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBtYXJnaW5MZWZ0OiAnMzUlJyxcbiAgICB3aWR0aDogJzQwJScsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KScsXG4gICAgYm94U2hhZG93OlxuICAgICAgJ3JnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDFweCBpbnNldCwgcmdiKDIzNiwgMjM2LCAyMzYpIDBweCAxcHggMHB4IDBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMnB4JyxcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnM3B4JyxcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICB9O1xuICBSR0J3cmFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9O1xuICBSR0JsYWJlbDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICB3aWR0aDogJzM0cHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB9O1xuICBIRVhpbnB1dDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBtYXJnaW5MZWZ0OiAnMjAlJyxcbiAgICB3aWR0aDogJzgwJScsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM4ODg4ODgnLFxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xKSwgMCAxcHggMCAwICNFQ0VDRUMnLFxuICAgIG1hcmdpbkJvdHRvbTogJzNweCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBwYWRkaW5nTGVmdDogJzNweCcsXG4gIH07XG4gIEhFWHdyYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH07XG4gIEhFWGxhYmVsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgd2lkdGg6ICcxNHB4JyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgfTtcblxuICByb3VuZCh2KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodik7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIGlmIChkYXRhWycjJ10pIHtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KGRhdGFbJyMnXSkpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBoZXg6IGRhdGFbJyMnXSxcbiAgICAgICAgICAgIHNvdXJjZTogJ2hleCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAkZXZlbnQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YS5yIHx8IGRhdGEuZyB8fCBkYXRhLmIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICByOiBkYXRhLnIgfHwgdGhpcy5yZ2IucixcbiAgICAgICAgICBnOiBkYXRhLmcgfHwgdGhpcy5yZ2IuZyxcbiAgICAgICAgICBiOiBkYXRhLmIgfHwgdGhpcy5yZ2IuYixcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxuICAgICAgICB9LFxuICAgICAgICAkZXZlbnQsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaCB8fCBkYXRhLnMgfHwgZGF0YS52KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaDogZGF0YS5oIHx8IHRoaXMuaHN2LmgsXG4gICAgICAgICAgczogZGF0YS5zIHx8IHRoaXMuaHN2LnMsXG4gICAgICAgICAgdjogZGF0YS52IHx8IHRoaXMuaHN2LnYsXG4gICAgICAgICAgc291cmNlOiAnaHN2JyxcbiAgICAgICAgfSxcbiAgICAgICAgJGV2ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=