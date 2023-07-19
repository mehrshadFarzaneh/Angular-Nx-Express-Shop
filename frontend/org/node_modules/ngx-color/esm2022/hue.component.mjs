import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
class HueComponent {
    hsl;
    pointer;
    radius;
    shadow;
    hidePointer = false;
    direction = 'horizontal';
    onChange = new EventEmitter();
    left = '0px';
    top = '';
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: HueComponent, selector: "color-hue", inputs: { hsl: "hsl", pointer: "pointer", radius: "radius", shadow: "shadow", hidePointer: "hidePointer", direction: "direction" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".color-hue{position:absolute;inset:0}.color-hue-container{margin:0 2px;position:relative;height:100%}.color-hue-pointer{position:absolute}.color-hue-slider{margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;transform:translate(-2px)}.color-hue-horizontal{background:linear-gradient(to right,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}.color-hue-vertical{background:linear-gradient(to top,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { HueComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-hue', template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".color-hue{position:absolute;inset:0}.color-hue-container{margin:0 2px;position:relative;height:100%}.color-hue-pointer{position:absolute}.color-hue-slider{margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;transform:translate(-2px)}.color-hue-horizontal{background:linear-gradient(to right,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}.color-hue-vertical{background:linear-gradient(to top,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], pointer: [{
                type: Input
            }], radius: [{
                type: Input
            }], shadow: [{
                type: Input
            }], hidePointer: [{
                type: Input
            }], direction: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class HueModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: HueModule, declarations: [HueComponent], imports: [CommonModule, CoordinatesModule], exports: [HueComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, imports: [CommonModule, CoordinatesModule] });
}
export { HueModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HueComponent],
                    exports: [HueComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRzVELE1Ba0RhLFlBQVk7SUFDZCxHQUFHLENBQVE7SUFDWCxPQUFPLENBQTBCO0lBQ2pDLE1BQU0sQ0FBVTtJQUNoQixNQUFNLENBQVU7SUFDaEIsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixTQUFTLEdBQThCLFlBQVksQ0FBQztJQUNuRCxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUFDN0UsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNiLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFVCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFlBQVksRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQ2pFLElBQUksSUFBNEIsQ0FBQztRQUNqQyxJ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cm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIU0xBLCBIU0xBc291cmNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1odWUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlIGNvbG9yLWh1ZS17e2RpcmVjdGlvbn19XCIgW3N0eWxlLmJvcmRlci1yYWRpdXMucHhdPVwicmFkaXVzXCIgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCI+XG4gICAgPGRpdiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgY2xhc3M9XCJjb2xvci1odWUtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlLXBvaW50ZXJcIiBbc3R5bGUubGVmdF09XCJsZWZ0XCIgW3N0eWxlLnRvcF09XCJ0b3BcIiAqbmdJZj1cIiFoaWRlUG9pbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5jb2xvci1odWUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAuY29sb3ItaHVlLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuY29sb3ItaHVlLXBvaW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuY29sb3ItaHVlLXNsaWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICB9XG4gICAgLmNvbG9yLWh1ZS1ob3Jpem9udGFsIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwMCAwJSwgI2ZmMCAxNyUsICMwZjBcbiAgICAgICAgMzMlLCAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCAjZjAwIDEwMCUpO1xuICAgIH1cbiAgICAuY29sb3ItaHVlLXZlcnRpY2FsIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmMDAgMCUsICNmZjAgMTclLCAjMGYwIDMzJSxcbiAgICAgICAgIzBmZiA1MCUsICMwMGYgNjclLCAjZjBmIDgzJSwgI2YwMCAxMDAlKTtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaHNsITogSFNMQTtcbiAgQElucHV0KCkgcG9pbnRlciE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIEBJbnB1dCgpIHJhZGl1cyE6IG51bWJlcjtcbiAgQElucHV0KCkgc2hhZG93ITogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlUG9pbnRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRhOiBIU0xBc291cmNlOyAkZXZlbnQ6IEV2ZW50IH0+KCk7XG4gIGxlZnQgPSAnMHB4JztcbiAgdG9wID0gJyc7XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMubGVmdCA9IGAke3RoaXMuaHNsLmggKiAxMDAgLyAzNjB9JWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9wID0gYCR7LSh0aGlzLmhzbC5oICogMTAwIC8gMzYwKSArIDEwMH0lYDtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKHsgdG9wLCBsZWZ0LCBjb250YWluZXJIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhOiBIU0xBc291cmNlIHwgdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgbGV0IGg6IG51bWJlcjtcbiAgICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICAgIGggPSAzNTk7XG4gICAgICB9IGVsc2UgaWYgKHRvcCA+IGNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICBoID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAtKHRvcCAqIDEwMCAvIGNvbnRhaW5lckhlaWdodCkgKyAxMDA7XG4gICAgICAgIGggPSAzNjAgKiBwZXJjZW50IC8gMTAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oc2wuaCAhPT0gaCkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGgsXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxuICAgICAgICAgIGE6IHRoaXMuaHNsLmEsXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGg6IG51bWJlcjtcbiAgICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgICBoID0gMDtcbiAgICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIGggPSAzNTk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwZXJjZW50ID0gbGVmdCAqIDEwMCAvIGNvbnRhaW5lcldpZHRoO1xuICAgICAgICBoID0gMzYwICogcGVyY2VudCAvIDEwMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaHNsLmggIT09IGgpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBoLFxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXG4gICAgICAgICAgbDogdGhpcy5oc2wubCxcbiAgICAgICAgICBhOiB0aGlzLmhzbC5hLFxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YSwgJGV2ZW50IH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0h1ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIdWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEh1ZU1vZHVsZSB7fVxuIl19