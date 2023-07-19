import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
class CircleSwatchComponent {
    color;
    circleSize = 28;
    circleSpacing = 14;
    focus = false;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    focusStyle = {};
    swatchStyle = {
        borderRadius: '50%',
        background: 'transparent',
        transition: '100ms box-shadow ease 0s',
    };
    ngOnChanges() {
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}`;
        this.focusStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}, 0 0 5px ${this.color}`;
        if (this.focus) {
            this.focusStyle.boxShadow = `inset 0 0 0 3px ${this.color}, 0 0 5px ${this.color}`;
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CircleSwatchComponent, selector: "color-circle-swatch", inputs: { color: "color", circleSize: "circleSize", circleSpacing: "circleSpacing", focus: "focus" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `, isInline: true, styles: [".circle-swatch{transform:scale(1);transition:transform .1s ease}.circle-swatch:hover{transform:scale(1.2)}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { CircleSwatchComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-circle-swatch', template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".circle-swatch{transform:scale(1);transition:transform .1s ease}.circle-swatch:hover{transform:scale(1.2)}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], circleSize: [{
                type: Input
            }], circleSpacing: [{
                type: Input
            }], focus: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NpcmNsZS9jaXJjbGUtc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7O0FBRXZCLE1BNEJhLHFCQUFxQjtJQUN2QixLQUFLLENBQVU7SUFDZixVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNiLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xELFVBQVUsR0FBMkIsRUFBRSxDQUFDO0lBQ3hDLFdBQVcsR0FBMkI7UUFDcEMsWUFBWSxFQUFFLEtBQUs7UUFDbkIsVUFBVSxFQUFFLGFBQWE7UUFDekIsVUFBVSxFQUFFLDBCQUEwQjtLQUN2QyxDQUFDO0lBRUYsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLGVBQWUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLGVBQWdCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBRSxNQUFPLElBQUksQ0FBQyxLQUFNLGFBQWMsSUFBSSxDQUFDLEtBQU0sRUFBRSxDQUFDO1FBQzlHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLG1CQUFvQixJQUFJLENBQUMsS0FBTSxhQUFjLElBQUksQ0FBQyxLQUFNLEVBQUUsQ0FBQztTQUN4RjtJQUNILENBQUM7SUFDRCxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQzt1R0F2QlUscUJBQXFCOzJGQUFyQixxQkFBcUIsdVBBMUJ0Qjs7Ozs7Ozs7Ozs7R0FXVDs7U0FlVSxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkE1QmpDLFNBQVM7K0JBQ0UscUJBQXFCLFlBQ3JCOzs7Ozs7Ozs7OztHQVdULG1CQVlnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLOzhCQUdqQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWNpcmNsZS1zd2F0Y2gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY2lyY2xlLXN3YXRjaFwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cImNpcmNsZVNpemVcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImNpcmNsZVNpemVcIlxuICAgIFtzdHlsZS5tYXJnaW4tcmlnaHQucHhdPVwiY2lyY2xlU3BhY2luZ1wiIFtzdHlsZS5tYXJnaW4tYm90dG9tLnB4XT1cImNpcmNsZVNwYWNpbmdcIlxuICAgID5cbiAgICA8Y29sb3Itc3dhdGNoXG4gICAgICBbY29sb3JdPVwiY29sb3JcIiBbc3R5bGVdPVwic3dhdGNoU3R5bGVcIiBbZm9jdXNdPVwiZm9jdXNcIiBbZm9jdXNTdHlsZV09XCJmb2N1c1N0eWxlXCJcbiAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIiAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvY29sb3Itc3dhdGNoPlxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAuY2lyY2xlLXN3YXRjaCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcbiAgfVxuICAuY2lyY2xlLXN3YXRjaDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlU3dhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3IhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNpcmNsZVNpemUgPSAyODtcbiAgQElucHV0KCkgY2lyY2xlU3BhY2luZyA9IDE0O1xuICBASW5wdXQoKSBmb2N1cyA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmb2N1c1N0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIHN3YXRjaFN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICB0cmFuc2l0aW9uOiAnMTAwbXMgYm94LXNoYWRvdyBlYXNlIDBzJyxcbiAgfTtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnN3YXRjaFN0eWxlLmJveFNoYWRvdyA9IGBpbnNldCAwIDAgMCAke3RoaXMuY2lyY2xlU2l6ZSAvIDJ9cHggJHt0aGlzLmNvbG9yfWA7XG4gICAgdGhpcy5mb2N1c1N0eWxlLmJveFNoYWRvdyA9IGBpbnNldCAwIDAgMCAkeyB0aGlzLmNpcmNsZVNpemUgLyAyIH1weCAkeyB0aGlzLmNvbG9yIH0sIDAgMCA1cHggJHsgdGhpcy5jb2xvciB9YDtcbiAgICBpZiAodGhpcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1N0eWxlLmJveFNoYWRvdyA9IGBpbnNldCAwIDAgMCAzcHggJHsgdGhpcy5jb2xvciB9LCAwIDAgNXB4ICR7IHRoaXMuY29sb3IgfWA7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrKHsgaGV4LCAkZXZlbnQgfSkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XG4gIH1cbn1cbiJdfQ==