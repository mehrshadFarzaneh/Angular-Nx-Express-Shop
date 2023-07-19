import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import { TinyColor } from '@ctrl/tinycolor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
class ShadeComponent {
    hsl;
    rgb;
    pointer;
    shadow;
    radius;
    onChange = new EventEmitter();
    gradient;
    pointerLeft;
    pointerTop;
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new TinyColor(this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ShadeComponent, selector: "color-shade", inputs: { hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".shade,.shade-gradient{position:absolute;inset:0}.shade-container{position:relative;height:100%;margin:0 3px}.shade-pointer{position:absolute}.shade-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { ShadeComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-shade', template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".shade,.shade-gradient{position:absolute;inset:0}.shade-container{position:relative;height:100%;margin:0 3px}.shade-pointer{position:absolute}.shade-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"] }]
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
            }], onChange: [{
                type: Output
            }] } });
class ShadeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, declarations: [ShadeComponent], imports: [CommonModule, CoordinatesModule], exports: [ShadeComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, imports: [CommonModule, CoordinatesModule] });
}
export { ShadeModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShadeComponent],
                    exports: [ShadeComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9zaGFkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHNUMsTUErRGEsY0FBYztJQUNoQixHQUFHLENBQVE7SUFDWCxHQUFHLENBQVE7SUFDWCxPQUFPLENBQTBCO0lBQ2pDLE1BQU0sQ0FBVTtJQUNoQixNQUFNLENBQVU7SUFDZixRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM3QyxRQUFRLENBQTBCO0lBQ2xDLFdBQVcsQ0FBVTtJQUNyQixVQUFVLENBQVU7SUFFcEIsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWO1NBQ1gsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQzNDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckQ7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO3VHQWpEVSxjQUFjOzJGQUFkLGNBQWMsdU1BN0RmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUOztTQXVDVSxjQUFjOzJGQUFkLGNBQWM7a0JBL0QxQixTQUFTOytCQUNFLGFBQWEsWUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVCxtQkFvQ2dCLHVCQUF1QixDQUFDLE1BQU0sdUJBQzFCLEtBQUs7OEJBR2pCLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTs7QUE4Q1QsTUFLYSxXQUFXO3VHQUFYLFdBQVc7d0dBQVgsV0FBVyxpQkF6RFgsY0FBYyxhQXVEZixZQUFZLEVBQUUsaUJBQWlCLGFBdkQ5QixjQUFjO3dHQXlEZCxXQUFXLFlBRlosWUFBWSxFQUFFLGlCQUFpQjs7U0FFOUIsV0FBVzsyRkFBWCxXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7aUJBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhTTEEsIFJHQkEgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXNoYWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhZGVcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJzaGFkZS1ncmFkaWVudFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImdyYWRpZW50XCJcbiAgICAgICAgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwicmFkaXVzXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgbmd4LWNvbG9yLWNvb3JkaW5hdGVzXG4gICAgICAgIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIGNsYXNzPVwic2hhZGUtY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwic2hhZGUtcG9pbnRlclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQuJV09XCJwb2ludGVyTGVmdFwiXG4gICAgICAgICAgW3N0eWxlLnRvcC4lXT1cInBvaW50ZXJUb3BcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRlLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5zaGFkZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zaGFkZS1ncmFkaWVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zaGFkZS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICB9XG4gICAgLnNoYWRlLXBvaW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuc2hhZGUtc2xpZGVyIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGhzbCE6IEhTTEE7XG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBASW5wdXQoKSBzaGFkb3chOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhZGl1cyE6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGdyYWRpZW50ITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcG9pbnRlckxlZnQhOiBudW1iZXI7XG4gIHBvaW50ZXJUb3A/OiBudW1iZXI7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5ncmFkaWVudCA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICAgICAgaHNsKCR7dGhpcy5oc2wuaH0sIDkwJSwgNTUlKSxcbiAgICAgICAgICAjMDAwKWAsXG4gICAgfTtcbiAgICBjb25zdCBoc3YgPSBuZXcgVGlueUNvbG9yKHRoaXMuaHNsKS50b0hzdigpO1xuICAgIHRoaXMucG9pbnRlckxlZnQgPSAxMDAgLSAoaHN2LnYgKiAxMDApO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgbGVmdCwgY29udGFpbmVyV2lkdGgsICRldmVudCB9KTogdm9pZCB7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IHY6IG51bWJlcjtcbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHYgPSAwO1xuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICB2ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdiA9IE1hdGgucm91bmQoKGxlZnQgKiAxMDApIC8gY29udGFpbmVyV2lkdGgpIC8gMTAwO1xuICAgIH1cblxuICAgIGNvbnN0IGhzdiA9IG5ldyBUaW55Q29sb3IodGhpcy5oc2wpLnRvSHN2KCk7XG4gICAgaWYgKGhzdi52ICE9PSB2KSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBoOiB0aGlzLmhzbC5oLFxuICAgICAgICBzOiAxMDAsXG4gICAgICAgIHY6IDEgLSB2LFxuICAgICAgICBsOiB0aGlzLmhzbC5sLFxuICAgICAgICBhOiB0aGlzLmhzbC5hLFxuICAgICAgICBzb3VyY2U6ICdyZ2InLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2hhZGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2hhZGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYWRlTW9kdWxlIHt9XG4iXX0=