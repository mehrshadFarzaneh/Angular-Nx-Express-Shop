import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
class CompactColorComponent {
    color;
    active;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    swatchStyle = {
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer',
    };
    swatchFocus = {};
    getContrastingColor = getContrastingColor;
    ngOnChanges() {
        this.swatchStyle.background = this.color;
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
        if (this.color.toLowerCase() === '#ffffff') {
            this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactColorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CompactColorComponent, selector: "color-compact-color", inputs: { color: "color", active: "active" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `, isInline: true, styles: [".compact-dot{position:absolute;inset:5px;border-radius:50%;opacity:0}.compact-dot.active{opacity:1}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { CompactColorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactColorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-compact-color', template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".compact-dot{position:absolute;inset:5px;border-radius:50%;opacity:0}.compact-dot.active{opacity:1}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], active: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC1jb2xvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBhY3QvY29tcGFjdC1jb2xvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFFaEQsTUFrQ2EscUJBQXFCO0lBQ3ZCLEtBQUssQ0FBVTtJQUNmLE1BQU0sQ0FBVztJQUNoQixPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNsQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNsRCxXQUFXLEdBQTJCO1FBQ3BDLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFlBQVksRUFBRSxLQUFLO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUM7SUFDRixXQUFXLEdBQTJCLEVBQUUsQ0FBQztJQUN6QyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUUxQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUNELFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO3VHQTFCVSxxQkFBcUI7MkZBQXJCLHFCQUFxQiwrTEFoQ3RCOzs7Ozs7Ozs7Ozs7R0FZVDs7U0FvQlUscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBbENqQyxTQUFTOytCQUNFLHFCQUFxQixZQUNyQjs7Ozs7Ozs7Ozs7O0dBWVQsbUJBaUJnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLOzhCQUdqQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0Q29udHJhc3RpbmdDb2xvciB9IGZyb20gJ25neC1jb2xvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWNvbXBhY3QtY29sb3InLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY29tcGFjdC1jb2xvclwiPlxuICAgIDxjb2xvci1zd2F0Y2ggY2xhc3M9XCJzd2F0Y2hcIlxuICAgICAgW2NvbG9yXT1cImNvbG9yXCIgW3N0eWxlXT1cInN3YXRjaFN0eWxlXCJcbiAgICAgIFtmb2N1c1N0eWxlXT1cInN3YXRjaEZvY3VzXCJcbiAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIiAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFjdC1kb3RcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImdldENvbnRyYXN0aW5nQ29sb3IoY29sb3IpXCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2NvbG9yLXN3YXRjaD5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgLmNvbXBhY3QtZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmNvbXBhY3QtZG90LmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhY3RDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbG9yITogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmUhOiBib29sZWFuO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBzd2F0Y2hTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICB3aWR0aDogJzE1cHgnLFxuICAgIGhlaWdodDogJzE1cHgnLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH07XG4gIHN3YXRjaEZvY3VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGdldENvbnRyYXN0aW5nQ29sb3IgPSBnZXRDb250cmFzdGluZ0NvbG9yO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc3dhdGNoU3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5zd2F0Y2hGb2N1cy5ib3hTaGFkb3cgPSBgMCAwIDRweCAke3RoaXMuY29sb3J9YDtcbiAgICBpZiAodGhpcy5jb2xvci50b0xvd2VyQ2FzZSgpID09PSAnI2ZmZmZmZicpIHtcbiAgICAgIHRoaXMuc3dhdGNoU3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDAgMCAwIDFweCAjZGRkJztcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2soeyBoZXgsICRldmVudCB9KSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoeyBoZXgsICRldmVudCB9KTtcbiAgfVxufVxuIl19