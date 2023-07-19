import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class SketchFieldsComponent {
    hsl;
    rgb;
    hex;
    disableAlpha = false;
    onChange = new EventEmitter();
    input = {
        width: '100%',
        padding: '4px 10% 3px',
        border: 'none',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px',
    };
    label = {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize',
    };
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                const color = new TinyColor(data.hex);
                this.onChange.emit({
                    data: {
                        hex: this.disableAlpha || data.hex.length <= 6 ? color.toHex() : color.toHex8(),
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
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            if (this.disableAlpha) {
                data.a = 1;
            }
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchFieldsComponent, selector: "color-sketch-fields", inputs: { hsl: "hsl", rgb: "rgb", hex: "hex", disableAlpha: "disableAlpha" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-fields{display:flex;padding-top:4px}.sketch-double{flex:2 1 0%}.sketch-single,.sketch-alpha{flex:1 1 0%;padding-left:6px}:host-context([dir=rtl]) .sketch-single{padding-right:6px;padding-left:0}:host-context([dir=rtl]) .sketch-alpha{padding-right:6px;padding-left:0}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SketchFieldsComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch-fields', template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".sketch-fields{display:flex;padding-top:4px}.sketch-double{flex:2 1 0%}.sketch-single,.sketch-alpha{flex:1 1 0%;padding-left:6px}:host-context([dir=rtl]) .sketch-single{padding-right:6px;padding-left:0}:host-context([dir=rtl]) .sketch-alpha{padding-right:6px;padding-left:0}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], hex: [{
                type: Input
            }], disableAlpha: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3NrZXRjaC9za2V0Y2gtZmllbGRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sV0FBVyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUU1QyxNQXNGYSxxQkFBcUI7SUFDdkIsR0FBRyxDQUFRO0lBQ1gsR0FBRyxDQUFRO0lBQ1gsR0FBRyxDQUFVO0lBQ2IsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUNwQixRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM3QyxLQUFLLEdBQTRCO1FBQy9CLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsTUFBTSxFQUFFLE1BQU07UUFDZCxTQUFTLEVBQUUsWUFBWTtRQUN2QixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFFBQVEsRUFBRSxNQUFNO0tBQ2pCLENBQUM7SUFDRixLQUFLLEdBQTRCO1FBQy9CLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxNQUFNO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsYUFBYSxFQUFFLFlBQVk7S0FDNUIsQ0FBQztJQUVGLEtBQUssQ0FBQyxLQUFLO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLElB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LE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7dUdBbEZVLHFCQUFxQjsyRkFBckIscUJBQXFCLDRLQXBGdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1EVDs7U0FpQ1UscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBdEZqQyxTQUFTOytCQUNFLHFCQUFxQixZQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURULG1CQThCZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSzs4QkFHakIsR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNWYWxpZEhleCwgSFNMQSwgUkdCQSB9IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gtZmllbGRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInNrZXRjaC1maWVsZHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWRvdWJsZVwiPlxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxuICAgICAgICBsYWJlbD1cImhleFwiXG4gICAgICAgIFt2YWx1ZV09XCJoZXgucmVwbGFjZSgnIycsICcnKVwiXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxuICAgICAgICBsYWJlbD1cInJcIlxuICAgICAgICBbdmFsdWVdPVwicmdiLnJcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxuICAgICAgICBbZHJhZ01heF09XCIyNTVcIlxuICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zaW5nbGVcIj5cbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgbGFiZWw9XCJnXCJcbiAgICAgICAgW3ZhbHVlXT1cInJnYi5nXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2RyYWdMYWJlbF09XCJ0cnVlXCJcbiAgICAgICAgW2RyYWdNYXhdPVwiMjU1XCJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtc2luZ2xlXCI+XG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXG4gICAgICAgIGxhYmVsPVwiYlwiXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuYlwiXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtkcmFnTGFiZWxdPVwidHJ1ZVwiXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWFscGhhXCIgKm5nSWY9XCJkaXNhYmxlQWxwaGEgPT09IGZhbHNlXCI+XG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXG4gICAgICAgIGxhYmVsPVwiYVwiXG4gICAgICAgIFt2YWx1ZV09XCJyb3VuZChyZ2IuYSAqIDEwMClcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxuICAgICAgICBbZHJhZ01heF09XCIxMDBcIlxuICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnNrZXRjaC1maWVsZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgIC5za2V0Y2gtZG91YmxlIHtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XG4gICAgICBmbGV4OiAyIDEgMCU7XG4gICAgfVxuICAgIC5za2V0Y2gtc2luZ2xlIHtcbiAgICAgIGZsZXg6IDEgMSAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIH1cbiAgICAuc2tldGNoLWFscGhhIHtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICBmbGV4OiAxIDEgMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICB9XG4gICAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5za2V0Y2gtc2luZ2xlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5za2V0Y2gtYWxwaGEge1xuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTa2V0Y2hGaWVsZHNDb21wb25lbnQge1xuICBASW5wdXQoKSBoc2whOiBIU0xBO1xuICBASW5wdXQoKSByZ2IhOiBSR0JBO1xuICBASW5wdXQoKSBoZXghOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzRweCAxMCUgM3B4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHggI2NjYycsXG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgfTtcbiAgbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogJzExcHgnLFxuICAgIGNvbG9yOiAnIzIyMicsXG4gICAgcGFkZGluZ1RvcDogJzNweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzRweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICB9O1xuXG4gIHJvdW5kKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICB9XG4gIGhhbmRsZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgaWYgKGRhdGEuaGV4KSB7XG4gICAgICBpZiAoaXNWYWxpZEhleChkYXRhLmhleCkpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVGlueUNvbG9yKGRhdGEuaGV4KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBoZXg6IHRoaXMuZGlzYWJsZUFscGhhIHx8IGRhdGEuaGV4Lmxlbmd0aCA8PSA2ID8gY29sb3IudG9IZXgoKSA6IGNvbG9yLnRvSGV4OCgpLFxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICRldmVudCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHI6IGRhdGEuciB8fCB0aGlzLnJnYi5yLFxuICAgICAgICAgIGc6IGRhdGEuZyB8fCB0aGlzLnJnYi5nLFxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICAgIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5hKSB7XG4gICAgICBpZiAoZGF0YS5hIDwgMCkge1xuICAgICAgICBkYXRhLmEgPSAwO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmEgPiAxMDApIHtcbiAgICAgICAgZGF0YS5hID0gMTAwO1xuICAgICAgfVxuICAgICAgZGF0YS5hIC89IDEwMDtcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZUFscGhhKSB7XG4gICAgICAgIGRhdGEuYSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBoOiB0aGlzLmhzbC5oLFxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXG4gICAgICAgICAgbDogdGhpcy5oc2wubCxcbiAgICAgICAgICBhOiBNYXRoLnJvdW5kKGRhdGEuYSAqIDEwMCkgLyAxMDAsXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcbiAgICAgICAgfSxcbiAgICAgICAgJGV2ZW50LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmggfHwgZGF0YS5zIHx8IGRhdGEubCkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGg6IGRhdGEuaCB8fCB0aGlzLmhzbC5oLFxuICAgICAgICAgIHM6IE51bWJlcigoZGF0YS5zICYmIGRhdGEucykgfHwgdGhpcy5oc2wucyksXG4gICAgICAgICAgbDogTnVtYmVyKChkYXRhLmwgJiYgZGF0YS5sKSB8fCB0aGlzLmhzbC5sKSxcbiAgICAgICAgICBzb3VyY2U6ICdoc2wnLFxuICAgICAgICB9LFxuICAgICAgICAkZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==