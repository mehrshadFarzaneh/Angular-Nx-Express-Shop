import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class ChromeFieldsComponent {
    disableAlpha;
    hsl;
    rgb;
    hex;
    onChange = new EventEmitter();
    view = '';
    input = {
        fontSize: '11px',
        color: '#333',
        width: '100%',
        borderRadius: '2px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #dadada',
        height: '21px',
        'text-align': 'center',
    };
    label = {
        'text-transform': 'uppercase',
        fontSize: '11px',
        'line-height': '11px',
        color: '#969696',
        'text-align': 'center',
        display: 'block',
        marginTop: '12px',
    };
    ngOnInit() {
        if (this.hsl.a === 1 && this.view !== 'hex') {
            this.view = 'hex';
        }
        else if (this.view !== 'rgb' && this.view !== 'hsl') {
            this.view = 'rgb';
        }
    }
    toggleViews() {
        if (this.view === 'hex') {
            this.view = 'rgb';
        }
        else if (this.view === 'rgb') {
            this.view = 'hsl';
        }
        else if (this.view === 'hsl') {
            if (this.hsl.a === 1) {
                this.view = 'hex';
            }
            else {
                this.view = 'rgb';
            }
        }
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                const color = new TinyColor(data.hex);
                this.onChange.emit({
                    data: {
                        hex: this.disableAlpha ? color.toHex() : color.toHex8(),
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
            else if (data.a > 1) {
                data.a = 1;
            }
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
            const s = data.s && data.s.replace('%', '');
            const l = data.l && data.l.replace('%', '');
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number(s || this.hsl.s),
                    l: Number(l || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeFieldsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ChromeFieldsComponent, selector: "color-chrome-fields", inputs: { disableAlpha: "disableAlpha", hsl: "hsl", rgb: "rgb", hex: "hex" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex" [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r" [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g" [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b" [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s" [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l" [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path #iconUp fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path #iconDown fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".chrome-wrap{padding-top:16px;display:flex}.chrome-fields{flex:1;display:flex;margin-left:-6px}.chrome-field{padding-left:6px;width:100%}.chrome-toggle{width:32px;text-align:right;position:relative}.chrome-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative}.chrome-toggle-svg{width:24px;height:24px;border:1px transparent solid;border-radius:5px}.chrome-toggle-svg:hover{background:#eee}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EditableInputComponent, selector: "color-editable-input", inputs: ["style", "label", "value", "arrowOffset", "dragLabel", "dragMax", "placeholder"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { ChromeFieldsComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeFieldsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-chrome-fields', template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex" [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r" [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g" [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b" [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s" [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l" [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path #iconUp fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path #iconDown fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".chrome-wrap{padding-top:16px;display:flex}.chrome-fields{flex:1;display:flex;margin-left:-6px}.chrome-field{padding-left:6px;width:100%}.chrome-toggle{width:32px;text-align:right;position:relative}.chrome-icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative}.chrome-toggle-svg{width:24px;height:24px;border:1px transparent solid;border-radius:5px}.chrome-toggle-svg:hover{background:#eee}\n"] }]
        }], propDecorators: { disableAlpha: [{
                type: Input
            }], hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], hex: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Nocm9tZS9jaHJvbWUtZmllbGRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sV0FBVyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUU1QyxNQXFJYSxxQkFBcUI7SUFDdkIsWUFBWSxDQUFXO0lBQ3ZCLEdBQUcsQ0FBUTtJQUNYLEdBQUcsQ0FBUTtJQUNYLEdBQUcsQ0FBVTtJQUNaLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzdDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixLQUFLLEdBQTJCO1FBQzlCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsS0FBSztRQUNuQixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSx5QkFBeUI7UUFDcEMsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsUUFBUTtLQUN2QixDQUFDO0lBQ0YsS0FBSyxHQUEyQjtRQUM5QixnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLENBQUM7SUFFRixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxD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OzJGQUFyQixxQkFBcUI7a0JBcklqQyxTQUFTOytCQUNFLHFCQUFxQixZQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEZULG1CQXNDZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSzs4QkFHakIsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc1ZhbGlkSGV4LCBIU0xBLCBSR0JBIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWNocm9tZS1maWVsZHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtd3JhcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZHNcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInZpZXcgPT09ICdoZXgnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxuICAgICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxuICAgICAgICAgICAgICBsYWJlbD1cImhleFwiIFt2YWx1ZV09XCJoZXhcIlxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJ2aWV3ID09PSAncmdiJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJyXCIgW3ZhbHVlXT1cInJnYi5yXCJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJnXCIgW3ZhbHVlXT1cInJnYi5nXCJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJiXCIgW3ZhbHVlXT1cInJnYi5iXCJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dCAqbmdJZj1cIiFkaXNhYmxlQWxwaGFcIlxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJhXCIgW3ZhbHVlXT1cInJnYi5hXCJcbiAgICAgICAgICAgICAgW2Fycm93T2Zmc2V0XT1cIjAuMDFcIlxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJ2aWV3ID09PSAnaHNsJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJoXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzbC5oKVwiXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWZpZWxkXCI+XG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgICAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwic1wiIFt2YWx1ZV09XCJyb3VuZChoc2wucyAqIDEwMCkgKyAnJSdcIlxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxuICAgICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxuICAgICAgICAgICAgICBsYWJlbD1cImxcIiBbdmFsdWVdPVwicm91bmQoaHNsLmwgKiAxMDApICsgJyUnXCJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dCAqbmdJZj1cIiFkaXNhYmxlQWxwaGFcIlxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJhXCIgW3ZhbHVlXT1cImhzbC5hXCJcbiAgICAgICAgICAgICAgW2Fycm93T2Zmc2V0XT1cIjAuMDFcIlxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS10b2dnbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1pY29uXCIgKGNsaWNrKT1cInRvZ2dsZVZpZXdzKClcIiAjaWNvbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiY2hyb21lLXRvZ2dsZS1zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCAjaWNvblVwIGZpbGw9XCIjMzMzXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiw1LjgzTDE1LjE3LDlMMTYuNTgsNy41OUwxMiwzTDcuNDEsNy41OUw4LjgzLDlMMTIsNS44M1pcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoICNpY29uRG93biBmaWxsPVwiIzMzM1wiXG4gICAgICAgICAgICAgIGQ9XCJNMTIsMTguMTdMOC44MywxNUw3LjQyLDE2LjQxTDEyLDIxTDE2LjU5LDE2LjQxTDE1LjE3LDE1WlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuY2hyb21lLXdyYXAge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtZmllbGRzIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gICAgICB9XG4gICAgICAuY2hyb21lLWZpZWxkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmNocm9tZS10b2dnbGUge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuY2hyb21lLXRvZ2dsZS1zdmcge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgICAgLmNocm9tZS10b2dnbGUtc3ZnOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENocm9tZUZpZWxkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhzbCE6IEhTTEE7XG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XG4gIEBJbnB1dCgpIGhleCE6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHZpZXcgPSAnJztcbiAgaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHggI2RhZGFkYScsXG4gICAgaGVpZ2h0OiAnMjFweCcsXG4gICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcbiAgfTtcbiAgbGFiZWw6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgJ3RleHQtdHJhbnNmb3JtJzogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICAnbGluZS1oZWlnaHQnOiAnMTFweCcsXG4gICAgY29sb3I6ICcjOTY5Njk2JyxcbiAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXG4gIH07XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaHNsLmEgPT09IDEgJiYgdGhpcy52aWV3ICE9PSAnaGV4Jykge1xuICAgICAgdGhpcy52aWV3ID0gJ2hleCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXcgIT09ICdyZ2InICYmIHRoaXMudmlldyAhPT0gJ2hzbCcpIHtcbiAgICAgIHRoaXMudmlldyA9ICdyZ2InO1xuICAgIH1cbiAgfVxuICB0b2dnbGVWaWV3cygpIHtcbiAgICBpZiAodGhpcy52aWV3ID09PSAnaGV4Jykge1xuICAgICAgdGhpcy52aWV3ID0gJ3JnYic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXcgPT09ICdyZ2InKSB7XG4gICAgICB0aGlzLnZpZXcgPSAnaHNsJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlldyA9PT0gJ2hzbCcpIHtcbiAgICAgIGlmICh0aGlzLmhzbC5hID09PSAxKSB7XG4gICAgICAgIHRoaXMudmlldyA9ICdoZXgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52aWV3ID0gJ3JnYic7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJvdW5kKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICB9XG4gIGhhbmRsZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgaWYgKGRhdGEuaGV4KSB7XG4gICAgICBpZiAoaXNWYWxpZEhleChkYXRhLmhleCkpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVGlueUNvbG9yKGRhdGEuaGV4KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBoZXg6IHRoaXMuZGlzYWJsZUFscGhhID8gY29sb3IudG9IZXgoKSA6IGNvbG9yLnRvSGV4OCgpLFxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICRldmVudCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHI6IGRhdGEuciB8fCB0aGlzLnJnYi5yLFxuICAgICAgICAgIGc6IGRhdGEuZyB8fCB0aGlzLnJnYi5nLFxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICAgIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5hKSB7XG4gICAgICBpZiAoZGF0YS5hIDwgMCkge1xuICAgICAgICBkYXRhLmEgPSAwO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmEgPiAxKSB7XG4gICAgICAgIGRhdGEuYSA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVBbHBoYSkge1xuICAgICAgICBkYXRhLmEgPSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaDogdGhpcy5oc2wuaCxcbiAgICAgICAgICBzOiB0aGlzLmhzbC5zLFxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXG4gICAgICAgICAgYTogTWF0aC5yb3VuZChkYXRhLmEgKiAxMDApIC8gMTAwLFxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICAgIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5oIHx8IGRhdGEucyB8fCBkYXRhLmwpIHtcbiAgICAgIGNvbnN0IHMgPSBkYXRhLnMgJiYgZGF0YS5zLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICBjb25zdCBsID0gZGF0YS5sICYmIGRhdGEubC5yZXBsYWNlKCclJywgJycpO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGg6IGRhdGEuaCB8fCB0aGlzLmhzbC5oLFxuICAgICAgICAgIHM6IE51bWJlcihzIHx8IHRoaXMuaHNsLnMpLFxuICAgICAgICAgIGw6IE51bWJlcihsIHx8IHRoaXMuaHNsLmwpLFxuICAgICAgICAgIHNvdXJjZTogJ2hzbCcsXG4gICAgICAgIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19