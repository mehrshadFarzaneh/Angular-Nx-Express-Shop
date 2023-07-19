import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
import { CoordinatesModule } from './coordinates.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./checkboard.component";
import * as i3 from "./coordinates.directive";
class AlphaComponent {
    hsl;
    rgb;
    pointer;
    shadow;
    radius;
    direction = 'horizontal';
    onChange = new EventEmitter();
    gradient;
    pointerLeft;
    pointerTop;
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: AlphaComponent, selector: "color-alpha", inputs: { hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius", direction: "direction" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".alpha{position:absolute;inset:0}.alpha-checkboard{position:absolute;inset:0;overflow:hidden}.alpha-gradient{position:absolute;inset:0}.alpha-container{position:relative;height:100%;margin:0 3px}.alpha-pointer{position:absolute}.alpha-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.CheckboardComponent, selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "directive", type: i3.CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { AlphaComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-alpha', template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".alpha{position:absolute;inset:0}.alpha-checkboard{position:absolute;inset:0;overflow:hidden}.alpha-gradient{position:absolute;inset:0}.alpha-container{position:relative;height:100%;margin:0 3px}.alpha-pointer{position:absolute}.alpha-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], pointer: [{
                type: Input
            }], shadow: [{
                type: Input
            }], radius: [{
                type: Input
            }], direction: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class AlphaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, declarations: [AlphaComponent], imports: [CommonModule, CheckboardModule, CoordinatesModule], exports: [AlphaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, imports: [CommonModule, CheckboardModule, CoordinatesModule] });
}
export { AlphaModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlphaComponent],
                    exports: [AlphaComponent],
                    imports: [CommonModule, CheckboardModule, CoordinatesModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9hbHBoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFHNUQsTUE2RGEsY0FBYztJQUNoQixHQUFHLENBQVE7SUFDWCxHQUFHLENBQVE7SUFDWCxPQUFPLENBQTBCO0lBQ2pDLE1BQU0sQ0FBVTtJQUNoQixNQUFNLENBQW1CO0lBQ3pCLFNBQVMsR0FBOEIsWUFBWSxDQUFDO0lBQ25ELFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzdDLFFBQVEsQ0FBMEI7SUFDbEMsV0FBVyxDQUFVO0lBQ3JCLFVBQVUsQ0FBVTtJQUVwQixXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxtQ0FBbUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMs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WCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTs7QUEyRVQsTUFLYSxXQUFXO3VHQUFYLFdBQVc7d0dBQVgsV0FBVyxpQkF2RlgsY0FBYyxhQXFGZixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLGFBckZoRCxjQUFjO3dHQXVGZCxXQUFXLFlBRlosWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQjs7U0FFaEQsV0FBVzsyRkFBWCxXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7aUJBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoZWNrYm9hcmRNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGVzTW9kdWxlIH0gZnJvbSAnLi9jb29yZGluYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSFNMQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItYWxwaGEnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiYWxwaGFcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxwaGEtY2hlY2tib2FyZFwiPlxuICAgICAgPGNvbG9yLWNoZWNrYm9hcmQ+PC9jb2xvci1jaGVja2JvYXJkPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbHBoYS1ncmFkaWVudFwiIFtuZ1N0eWxlXT1cImdyYWRpZW50XCIgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCIgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwicmFkaXVzXCI+PC9kaXY+XG4gICAgPGRpdiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgY2xhc3M9XCJhbHBoYS1jb250YWluZXIgY29sb3ItYWxwaGEte3tkaXJlY3Rpb259fVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFscGhhLXBvaW50ZXJcIiBbc3R5bGUubGVmdC4lXT1cInBvaW50ZXJMZWZ0XCIgW3N0eWxlLnRvcC4lXT1cInBvaW50ZXJUb3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFscGhhLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5hbHBoYSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5hbHBoYS1jaGVja2JvYXJkIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5hbHBoYS1ncmFkaWVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5hbHBoYS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICB9XG4gICAgLmFscGhhLXBvaW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuYWxwaGEtc2xpZGVyIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBbHBoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGhzbCE6IEhTTEE7XG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBASW5wdXQoKSBzaGFkb3chOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhZGl1cyE6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgZ3JhZGllbnQhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwb2ludGVyTGVmdCE6IG51bWJlcjtcbiAgcG9pbnRlclRvcCE6IG51bWJlcjtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMucG9pbnRlckxlZnQgPSAwO1xuICAgICAgdGhpcy5wb2ludGVyVG9wID0gdGhpcy5yZ2IuYSAqIDEwMDtcbiAgICAgIHRoaXMuZ3JhZGllbnQgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKCR7dGhpcy5yZ2Iucn0sJHtcbiAgICAgICAgICB0aGlzLnJnYi5nXG4gICAgICAgIH0sJHt0aGlzLnJnYi5ifSwgMCkgMCUsXG4gICAgICAgICAgcmdiYSgke3RoaXMucmdiLnJ9LCR7dGhpcy5yZ2IuZ30sJHt0aGlzLnJnYi5ifSwgMSkgMTAwJSlgLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmFkaWVudCA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgke3RoaXMucmdiLnJ9LCR7XG4gICAgICAgICAgdGhpcy5yZ2IuZ1xuICAgICAgICB9LCR7dGhpcy5yZ2IuYn0sIDApIDAlLFxuICAgICAgICAgIHJnYmEoJHt0aGlzLnJnYi5yfSwke3RoaXMucmdiLmd9LCR7dGhpcy5yZ2IuYn0sIDEpIDEwMCUpYCxcbiAgICAgIH07XG4gICAgICB0aGlzLnBvaW50ZXJMZWZ0ID0gdGhpcy5yZ2IuYSAqIDEwMDtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKHsgdG9wLCBsZWZ0LCBjb250YWluZXJIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBsZXQgYTogbnVtYmVyO1xuICAgICAgaWYgKHRvcCA8IDApIHtcbiAgICAgICAgYSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHRvcCA+IGNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICBhID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEgPSBNYXRoLnJvdW5kKHRvcCAqIDEwMCAvIGNvbnRhaW5lckhlaWdodCkgLyAxMDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhzbC5hICE9PSBhKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgaDogdGhpcy5oc2wuaCxcbiAgICAgICAgICBzOiB0aGlzLmhzbC5zLFxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXG4gICAgICAgICAgYSxcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYTogbnVtYmVyO1xuICAgICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICAgIGEgPSAwO1xuICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgYSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID0gTWF0aC5yb3VuZChsZWZ0ICogMTAwIC8gY29udGFpbmVyV2lkdGgpIC8gMTAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oc2wuYSAhPT0gYSkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGg6IHRoaXMuaHNsLmgsXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWxwaGFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWxwaGFDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhTW9kdWxlIHt9XG4iXX0=