import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class BlockSwatchesComponent {
    colors;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockSwatchesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: BlockSwatchesComponent, selector: "color-block-swatches", inputs: { colors: "colors" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, isInline: true, styles: [".block-swatches{margin-right:-10px}.clear{clear:both}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }] });
}
export { BlockSwatchesComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: BlockSwatchesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-block-swatches', template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, styles: [".block-swatches{margin-right:-10px}.clear{clear:both}\n"] }]
        }], propDecorators: { colors: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc3dhdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9ibG9jay9ibG9jay1zd2F0Y2hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUN2RSxNQXdCYSxzQkFBc0I7SUFDeEIsTUFBTSxDQUFZO0lBQ2pCLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRWxELFdBQVcsR0FBRztRQUNaLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFlBQVksRUFBRSxLQUFLO0tBQ3BCLENBQUM7SUFFRixXQUFXLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELFVBQVUsQ0FBQyxDQUFDO1FBQ1YsT0FBTztZQUNMLFNBQVMsRUFBRSxHQUFJLENBQUUsVUFBVTtTQUM1QixDQUFDO0lBQ0osQ0FBQzt1R0FyQlUsc0JBQXNCOzJGQUF0QixzQkFBc0IsMkpBdEJ2Qjs7Ozs7Ozs7Ozs7O0dBWVQ7O1NBVVUsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBeEJsQyxTQUFTOytCQUNFLHNCQUFzQixZQUN0Qjs7Ozs7Ozs7Ozs7O0dBWVQ7OEJBV1EsTUFBTTtzQkFBZCxLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1ibG9jay1zd2F0Y2hlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrLXN3YXRjaGVzXCI+XG4gICAgICA8Y29sb3Itc3dhdGNoXG4gICAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGNvbG9yc1wiXG4gICAgICAgIFtjb2xvcl09XCJjXCJcbiAgICAgICAgW3N0eWxlXT1cInN3YXRjaFN0eWxlXCJcbiAgICAgICAgW2ZvY3VzU3R5bGVdPVwiZm9jdXNTdHlsZShjKVwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgICAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1zd2F0Y2g+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5ibG9jay1zd2F0Y2hlcyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIH1cbiAgICAuY2xlYXIge1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgQmxvY2tTd2F0Y2hlc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9ycyE6IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN3YXRjaFN0eWxlID0ge1xuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2soe2hleCwgJGV2ZW50fSkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHtoZXgsICRldmVudH0pO1xuICB9XG4gIGZvY3VzU3R5bGUoYykge1xuICAgIHJldHVybiB7XG4gICAgICBib3hTaGFkb3c6IGAkeyBjIH0gMCAwIDRweGAsXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=