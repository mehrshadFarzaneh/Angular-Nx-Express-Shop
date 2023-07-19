import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class SketchPresetColorsComponent {
    colors;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchPresetColorsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchPresetColorsComponent, selector: "color-sketch-preset-colors", inputs: { colors: "colors" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-swatches{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap{width:16px;height:16px;margin:0 10px 10px 0}:host-context([dir=rtl]) .sketch-swatches{padding-right:10px;padding-left:0}:host-context([dir=rtl]) .sketch-wrap{margin-left:10px;margin-right:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SketchPresetColorsComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchPresetColorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch-preset-colors', template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".sketch-swatches{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap{width:16px;height:16px;margin:0 10px 10px 0}:host-context([dir=rtl]) .sketch-swatches{padding-right:10px;padding-left:0}:host-context([dir=rtl]) .sketch-wrap{margin-left:10px;margin-right:0}\n"] }]
        }], propDecorators: { colors: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9za2V0Y2gvc2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOzs7O0FBSXZCLE1BNENhLDJCQUEyQjtJQUM3QixNQUFNLENBQVk7SUFDakIsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDbEMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDbEQsV0FBVyxHQUFHO1FBQ1osWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLGlDQUFpQztLQUM3QyxDQUFDO0lBRUYsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxjQUFjLENBQUMsR0FBbUI7UUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUN2QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNELFVBQVUsQ0FBQyxHQUFtQjtRQUM1QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU87WUFDTCxTQUFTLEVBQUUsNENBQTRDLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDakUsQ0FBQztJQUNKLENBQUM7dUdBdkJVLDJCQUEyQjsyRkFBM0IsMkJBQTJCLGlLQTFDNUI7Ozs7Ozs7Ozs7Ozs7R0FhVDs7U0E2QlUsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBNUN2QyxTQUFTOytCQUNFLDRCQUE0QixZQUM1Qjs7Ozs7Ozs7Ozs7OztHQWFULG1CQTBCZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSzs4QkFHakIsTUFBTTtzQkFBZCxLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNoYXBlIH0gZnJvbSAnbmd4LWNvbG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc2tldGNoLXByZXNldC1jb2xvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwic2tldGNoLXN3YXRjaGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC13cmFwXCIgKm5nRm9yPVwibGV0IGMgb2YgY29sb3JzXCI+XG4gICAgICA8Y29sb3Itc3dhdGNoXG4gICAgICAgIFtjb2xvcl09XCJub3JtYWxpemVWYWx1ZShjKS5jb2xvclwiXG4gICAgICAgIFtzdHlsZV09XCJzd2F0Y2hTdHlsZVwiXG4gICAgICAgIFtmb2N1c1N0eWxlXT1cImZvY3VzU3R5bGUoYylcIlxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKG9uSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICBjbGFzcz1cInN3YXRjaFwiXG4gICAgICA+PC9jb2xvci1zd2F0Y2g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnNrZXRjaC1zd2F0Y2hlcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luOiAwcHggLTEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XG4gICAgfVxuICAgIC5za2V0Y2gtd3JhcCB7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgfVxuICAgIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2tldGNoLXN3YXRjaGVzIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICAgIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2tldGNoLXdyYXAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNrZXRjaFByZXNldENvbG9yc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9ycyE6IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBzd2F0Y2hTdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSknLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrKHsgaGV4LCAkZXZlbnQgfSkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XG4gIH1cbiAgbm9ybWFsaXplVmFsdWUodmFsOiBzdHJpbmcgfCBTaGFwZSkge1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHsgY29sb3I6IHZhbCB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGZvY3VzU3R5bGUodmFsOiBzdHJpbmcgfCBTaGFwZSkge1xuICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksIDAgMCA0cHggJHtjLmNvbG9yfWAsXG4gICAgfTtcbiAgfVxufVxuIl19