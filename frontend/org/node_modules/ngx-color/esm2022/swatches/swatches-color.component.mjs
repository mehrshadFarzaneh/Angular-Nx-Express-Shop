import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class SwatchesColorComponent {
    color;
    first = false;
    last = false;
    active;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    getContrastingColor = getContrastingColor;
    colorStyle = {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        marginBottom: '1px',
    };
    focusStyle = {};
    ngOnInit() {
        this.colorStyle.background = this.color;
        this.focusStyle.boxShadow = `0 0 4px ${this.color}`;
        if (this.first) {
            this.colorStyle.borderRadius = '2px 2px 0 0';
        }
        if (this.last) {
            this.colorStyle.borderRadius = '0 0 2px 2px';
        }
        if (this.color === '#FFFFFF') {
            this.colorStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                hex: this.color,
                source: 'hex',
            },
            $event,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesColorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SwatchesColorComponent, selector: "color-swatches-color", inputs: { color: "color", first: "first", last: "last", active: "active" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <color-swatch
      [color]="color"
      [style]="colorStyle"
      [focusStyle]="focusStyle"
      [class.first]="first"
      [class.last]="last"
      (click)="handleClick($event)"
      (keydown.enter)="handleClick($event)"
      (onHover)="onSwatchHover.emit($event)"
    >
      <div class="swatch-check" *ngIf="active" [class.first]="first" [class.last]="last">
        <svg
          style="width: 24px; height: 24px;"
          viewBox="0 0 24 24"
          [style.fill]="getContrastingColor(color)"
        >
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </div>
    </color-swatch>
  `, isInline: true, styles: [".swatches-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.swatch-check{display:flex;margin-left:8px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SwatchesColorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesColorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-swatches-color', template: `
    <color-swatch
      [color]="color"
      [style]="colorStyle"
      [focusStyle]="focusStyle"
      [class.first]="first"
      [class.last]="last"
      (click)="handleClick($event)"
      (keydown.enter)="handleClick($event)"
      (onHover)="onSwatchHover.emit($event)"
    >
      <div class="swatch-check" *ngIf="active" [class.first]="first" [class.last]="last">
        <svg
          style="width: 24px; height: 24px;"
          viewBox="0 0 24 24"
          [style.fill]="getContrastingColor(color)"
        >
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </div>
    </color-swatch>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".swatches-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.swatch-check{display:flex;margin-left:8px}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], first: [{
                type: Input
            }], last: [{
                type: Input
            }], active: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtY29sb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zd2F0Y2hlcy9zd2F0Y2hlcy1jb2xvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRWhELE1BeUNhLHNCQUFzQjtJQUN4QixLQUFLLENBQVU7SUFDZixLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNiLE1BQU0sQ0FBVztJQUNoQixPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNsQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNsRCxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUMxQyxVQUFVLEdBQTJCO1FBQ25DLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixZQUFZLEVBQUUsS0FBSztLQUNwQixDQUFDO0lBQ0YsVUFBVSxHQUEyQixFQUFFLENBQUM7SUFFeEMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFDRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNmLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7WUFDRCxNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1R0FyQ1Usc0JBQXNCOzJGQUF0QixzQkFBc0IseU1BdkN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUOztTQWtCVSxzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkF6Q2xDLFNBQVM7K0JBQ0Usc0JBQXNCLFlBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQlQsbUJBZWdCLHVCQUF1QixDQUFDLE1BQU0sdUJBQzFCLEtBQUs7OEJBR2pCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldENvbnRyYXN0aW5nQ29sb3IgfSBmcm9tICduZ3gtY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1zd2F0Y2hlcy1jb2xvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvbG9yLXN3YXRjaFxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgIFtzdHlsZV09XCJjb2xvclN0eWxlXCJcbiAgICAgIFtmb2N1c1N0eWxlXT1cImZvY3VzU3R5bGVcIlxuICAgICAgW2NsYXNzLmZpcnN0XT1cImZpcnN0XCJcbiAgICAgIFtjbGFzcy5sYXN0XT1cImxhc3RcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInN3YXRjaC1jaGVja1wiICpuZ0lmPVwiYWN0aXZlXCIgW2NsYXNzLmZpcnN0XT1cImZpcnN0XCIgW2NsYXNzLmxhc3RdPVwibGFzdFwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4O1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgW3N0eWxlLmZpbGxdPVwiZ2V0Q29udHJhc3RpbmdDb2xvcihjb2xvcilcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD1cIk0yMSw3TDksMTlMMy41LDEzLjVMNC45MSwxMi4wOUw5LDE2LjE3TDE5LjU5LDUuNTlMMjEsN1pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvY29sb3Itc3dhdGNoPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuc3dhdGNoZXMtZ3JvdXAge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAuc3dhdGNoLWNoZWNrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFN3YXRjaGVzQ29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvciE6IHN0cmluZztcbiAgQElucHV0KCkgZmlyc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFzdCA9IGZhbHNlO1xuICBASW5wdXQoKSBhY3RpdmUhOiBib29sZWFuO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBnZXRDb250cmFzdGluZ0NvbG9yID0gZ2V0Q29udHJhc3RpbmdDb2xvcjtcbiAgY29sb3JTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICB3aWR0aDogJzQwcHgnLFxuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogJzFweCcsXG4gIH07XG4gIGZvY3VzU3R5bGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbG9yU3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5mb2N1c1N0eWxlLmJveFNoYWRvdyA9IGAwIDAgNHB4ICR7dGhpcy5jb2xvcn1gO1xuICAgIGlmICh0aGlzLmZpcnN0KSB7XG4gICAgICB0aGlzLmNvbG9yU3R5bGUuYm9yZGVyUmFkaXVzID0gJzJweCAycHggMCAwJztcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdCkge1xuICAgICAgdGhpcy5jb2xvclN0eWxlLmJvcmRlclJhZGl1cyA9ICcwIDAgMnB4IDJweCc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbG9yID09PSAnI0ZGRkZGRicpIHtcbiAgICAgIHRoaXMuY29sb3JTdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMCAwIDAgMXB4ICNkZGQnO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGhleDogdGhpcy5jb2xvcixcbiAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgIH0sXG4gICAgICAkZXZlbnQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==