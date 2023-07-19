import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./slider-swatch.component";
class SliderSwatchesComponent {
    hsl;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    active(l, s) {
        return (Math.round(this.hsl.l * 100) / 100 === l &&
            Math.round(this.hsl.s * 100) / 100 === s);
    }
    handleClick({ data, $event }) {
        this.onClick.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SliderSwatchesComponent, selector: "color-slider-swatches", inputs: { hsl: "hsl" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        [first]="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        [last]="true"
      ></color-slider-swatch>
    </div>
  </div>
  `, isInline: true, styles: [".slider-swatches{margin-top:20px}.slider-swatch-wrap{box-sizing:border-box;width:20%;padding-right:1px;float:left}\n"], dependencies: [{ kind: "component", type: i1.SliderSwatchComponent, selector: "color-slider-swatch", inputs: ["hsl", "active", "offset", "first", "last"], outputs: ["onClick"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SliderSwatchesComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-slider-swatches', template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        [first]="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        [last]="true"
      ></color-slider-swatch>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".slider-swatches{margin-top:20px}.slider-swatch-wrap{box-sizing:border-box;width:20%;padding-right:1px;float:left}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN3YXRjaGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2xpZGVyL3NsaWRlci1zd2F0Y2hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7OztBQUl2QixNQThEYSx1QkFBdUI7SUFDekIsR0FBRyxDQUFPO0lBQ1QsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDbEMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFbEQsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3pCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFDRCxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzt1R0FiVSx1QkFBdUI7MkZBQXZCLHVCQUF1QixzSkE1RHhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q1Q7O1NBZVUsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBOURuQyxTQUFTOytCQUNFLHVCQUF1QixZQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNULG1CQVlnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLOzhCQUdqQixHQUFHO3NCQUFYLEtBQUs7Z0JBQ0ksT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSFNMIH0gZnJvbSAnbmd4LWNvbG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc2xpZGVyLXN3YXRjaGVzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2hlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItc3dhdGNoLXdyYXBcIj5cbiAgICAgIDxjb2xvci1zbGlkZXItc3dhdGNoXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgW29mZnNldF09XCIuODBcIlxuICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZSgwLjgwLCAwLjUwKVwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgICBbZmlyc3RdPVwidHJ1ZVwiXG4gICAgICA+PC9jb2xvci1zbGlkZXItc3dhdGNoPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItc3dhdGNoLXdyYXBcIj5cbiAgICAgIDxjb2xvci1zbGlkZXItc3dhdGNoXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgW29mZnNldF09XCIuNjVcIlxuICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZSgwLjY1LCAwLjUwKVwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgPjwvY29sb3Itc2xpZGVyLXN3YXRjaD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXN3YXRjaC13cmFwXCI+XG4gICAgICA8Y29sb3Itc2xpZGVyLXN3YXRjaFxuICAgICAgICBbaHNsXT1cImhzbFwiXG4gICAgICAgIFtvZmZzZXRdPVwiLjUwXCJcbiAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmUoMC41MCwgMC41MClcIlxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLXNsaWRlci1zd2F0Y2g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2gtd3JhcFwiPlxuICAgICAgPGNvbG9yLXNsaWRlci1zd2F0Y2hcbiAgICAgICAgW2hzbF09XCJoc2xcIlxuICAgICAgICBbb2Zmc2V0XT1cIi4zNVwiXG4gICAgICAgIFthY3RpdmVdPVwiYWN0aXZlKDAuMzUsIDAuNTApXCJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1zbGlkZXItc3dhdGNoPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItc3dhdGNoLXdyYXBcIj5cbiAgICAgIDxjb2xvci1zbGlkZXItc3dhdGNoXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgW29mZnNldF09XCIuMjBcIlxuICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZSgwLjIwLCAwLjUwKVwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgICBbbGFzdF09XCJ0cnVlXCJcbiAgICAgID48L2NvbG9yLXNsaWRlci1zd2F0Y2g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnNsaWRlci1zd2F0Y2hlcyB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuc2xpZGVyLXN3YXRjaC13cmFwIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICBgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJTd2F0Y2hlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGhzbCE6IEhTTDtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhY3RpdmUobDogbnVtYmVyLCBzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5yb3VuZCh0aGlzLmhzbC5sICogMTAwKSAvIDEwMCA9PT0gbCAmJlxuICAgICAgTWF0aC5yb3VuZCh0aGlzLmhzbC5zICogMTAwKSAvIDEwMCA9PT0gc1xuICAgICk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHsgZGF0YSwgJGV2ZW50IH0pO1xuICB9XG59XG4iXX0=