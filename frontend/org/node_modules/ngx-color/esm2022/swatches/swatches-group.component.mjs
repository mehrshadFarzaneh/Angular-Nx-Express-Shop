import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./swatches-color.component";
class SwatchesGroupComponent {
    group;
    active;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SwatchesGroupComponent, selector: "color-swatches-group", inputs: { group: "group", active: "active" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <div class="swatches-group">
      <color-swatches-color
        *ngFor="let color of group; let idx = index"
        [active]="color.toLowerCase() === active"
        [color]="color"
        [first]="idx === 0"
        [last]="idx === group.length - 1"
        (onClick)="onClick.emit($event)"
      >
      </color-swatches-color>
    </div>
  `, isInline: true, styles: [".swatches-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchesColorComponent, selector: "color-swatches-color", inputs: ["color", "first", "last", "active"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SwatchesGroupComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-swatches-group', template: `
    <div class="swatches-group">
      <color-swatches-color
        *ngFor="let color of group; let idx = index"
        [active]="color.toLowerCase() === active"
        [color]="color"
        [first]="idx === 0"
        [last]="idx === group.length - 1"
        (onClick)="onClick.emit($event)"
      >
      </color-swatches-color>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".swatches-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}\n"] }]
        }], propDecorators: { group: [{
                type: Input
            }], active: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zd2F0Y2hlcy9zd2F0Y2hlcy1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVoRyxNQTRCYSxzQkFBc0I7SUFDeEIsS0FBSyxDQUFZO0lBQ2pCLE1BQU0sQ0FBVTtJQUNmLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO3VHQUp2QyxzQkFBc0I7MkZBQXRCLHNCQUFzQiwyS0ExQnZCOzs7Ozs7Ozs7Ozs7R0FZVDs7U0FjVSxzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkE1QmxDLFNBQVM7K0JBQ0Usc0JBQXNCLFlBQ3RCOzs7Ozs7Ozs7Ozs7R0FZVCxtQkFXZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSzs4QkFHakIsS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc3dhdGNoZXMtZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzd2F0Y2hlcy1ncm91cFwiPlxuICAgICAgPGNvbG9yLXN3YXRjaGVzLWNvbG9yXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBncm91cDsgbGV0IGlkeCA9IGluZGV4XCJcbiAgICAgICAgW2FjdGl2ZV09XCJjb2xvci50b0xvd2VyQ2FzZSgpID09PSBhY3RpdmVcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICBbZmlyc3RdPVwiaWR4ID09PSAwXCJcbiAgICAgICAgW2xhc3RdPVwiaWR4ID09PSBncm91cC5sZW5ndGggLSAxXCJcbiAgICAgICAgKG9uQ2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9jb2xvci1zd2F0Y2hlcy1jb2xvcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnN3YXRjaGVzLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU3dhdGNoZXNHcm91cENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGdyb3VwITogc3RyaW5nW107XG4gIEBJbnB1dCgpIGFjdGl2ZSE6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cbiJdfQ==