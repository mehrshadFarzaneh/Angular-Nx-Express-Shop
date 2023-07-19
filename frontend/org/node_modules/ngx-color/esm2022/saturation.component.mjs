import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./coordinates.directive";
class SaturationComponent {
    hsl;
    hsv;
    radius;
    pointer;
    circle;
    onChange = new EventEmitter();
    background;
    pointerTop;
    pointerLeft;
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SaturationComponent, selector: "color-saturation", inputs: { hsl: "hsl", hsv: "hsv", radius: "radius", pointer: "pointer", circle: "circle" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".saturation-white{background:linear-gradient(to right,#fff,rgba(255,255,255,0));position:absolute;inset:0}.saturation-black{background:linear-gradient(to top,#000,rgba(0,0,0,0));position:absolute;inset:0}.color-saturation{position:absolute;inset:0}.saturation-pointer{position:absolute;cursor:default}.saturation-circle{width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006;border-radius:50%;cursor:hand;transform:translate(-2px,-4px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SaturationComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-saturation', template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".saturation-white{background:linear-gradient(to right,#fff,rgba(255,255,255,0));position:absolute;inset:0}.saturation-black{background:linear-gradient(to top,#000,rgba(0,0,0,0));position:absolute;inset:0}.color-saturation{position:absolute;inset:0}.saturation-pointer{position:absolute;cursor:default}.saturation-circle{width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006;border-radius:50%;cursor:hand;transform:translate(-2px,-4px)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], hsv: [{
                type: Input
            }], radius: [{
                type: Input
            }], pointer: [{
                type: Input
            }], circle: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class SaturationModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, declarations: [SaturationComponent], imports: [CommonModule, CoordinatesModule], exports: [SaturationComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, imports: [CommonModule, CoordinatesModule] });
}
export { SaturationModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SaturationComponent],
                    exports: [SaturationComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F0dXJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3NhdHVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHNUQsTUFzRGEsbUJBQW1CO0lBQ3JCLEdBQUcsQ0FBUTtJQUNYLEdBQUcsQ0FBUTtJQUNYLE1BQU0sQ0FBVTtJQUNoQixPQUFPLENBQTBCO0lBQ2pDLE1BQU0sQ0FBMEI7SUFDL0IsUUFBUSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO0lBQzdFLFVBQVUsQ0FBVTtJQUNwQixVQUFVLENBQVU7SUFDcEIsV0FBVyxDQUFVO0lBRXJCLFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDNUMsQ0FBQztJQUNELFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUU7UUFDakUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxJQUFJLEdBQUcsY0FBYyxFQUFFO1lBQ2hDLElBQUksR0FBRyxjQUFjLENBQUM7U0FDdkI7YUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBSSxHQUFHLEdBQUcsZUFBZSxFQUFFO1lBQ2hDLEdBQUcsR0FBRyxlQUFlLENBQUM7U0FDdkI7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFakMsTUFBTSxJQUFJLEdBQWU7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBRSxVQUFVO1lBQ2IsQ0FBQyxFQUFFLE1BQU07WUFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO3VHQXhDVSxtQkFBbUI7MkZBQW5CLG1CQUFtQiw0TUFwRHBCOzs7Ozs7Ozs7R0FTVDs7U0EyQ1UsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBdEQvQixTQUFTOytCQUNFLGtCQUFrQixZQUNsQjs7Ozs7Ozs7O0dBU1QsdUJBd0NvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTs7QUFxQ1QsTUFLYSxnQkFBZ0I7dUdBQWhCLGdCQUFnQjt3R0FBaEIsZ0JBQWdCLGlCQWhEaEIsbUJBQW1CLGFBOENwQixZQUFZLEVBQUUsaUJBQWlCLGFBOUM5QixtQkFBbUI7d0dBZ0RuQixnQkFBZ0IsWUFGakIsWUFBWSxFQUFFLGlCQUFpQjs7U0FFOUIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7aUJBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIU0xBLCBIU1ZBLCBIU1ZBc291cmNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1zYXR1cmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImNvbG9yLXNhdHVyYXRpb25cIiBuZ3gtY29sb3ItY29vcmRpbmF0ZXMgKGNvb3JkaW5hdGVzQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2F0dXJhdGlvbi1ibGFja1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb24tcG9pbnRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIiBbc3R5bGUudG9wXT1cInBvaW50ZXJUb3BcIiBbc3R5bGUubGVmdF09XCJwb2ludGVyTGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2F0dXJhdGlvbi1jaXJjbGVcIiBbbmdTdHlsZV09XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5zYXR1cmF0aW9uLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zYXR1cmF0aW9uLWJsYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAsIHJnYmEoMCwwLDAsMCkpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAuY29sb3Itc2F0dXJhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zYXR1cmF0aW9uLXBvaW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgICAuc2F0dXJhdGlvbi1jaXJjbGUge1xuICAgICAgd2lkdGg6IDRweDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMS41cHggI2ZmZiwgaW5zZXQgMCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMyksIDAgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY3Vyc29yOiBoYW5kO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTRweCk7XG4gICAgfVxuICBgLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNhdHVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBoc2whOiBIU0xBO1xuICBASW5wdXQoKSBoc3YhOiBIU1ZBO1xuICBASW5wdXQoKSByYWRpdXMhOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBASW5wdXQoKSBjaXJjbGUhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0YTogSFNWQXNvdXJjZTsgJGV2ZW50OiBFdmVudCB9PigpO1xuICBiYWNrZ3JvdW5kITogc3RyaW5nO1xuICBwb2ludGVyVG9wITogc3RyaW5nO1xuICBwb2ludGVyTGVmdCE6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBgaHNsKCR7dGhpcy5oc2wuaH0sIDEwMCUsIDUwJSlgO1xuICAgIHRoaXMucG9pbnRlclRvcCA9IC0odGhpcy5oc3YudiAqIDEwMCkgKyAxICsgMTAwICsgJyUnO1xuICAgIHRoaXMucG9pbnRlckxlZnQgPSB0aGlzLmhzdi5zICogMTAwICsgJyUnO1xuICB9XG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICBsZWZ0ID0gY29udGFpbmVyV2lkdGg7XG4gICAgfSBlbHNlIGlmICh0b3AgPCAwKSB7XG4gICAgICB0b3AgPSAwO1xuICAgIH0gZWxzZSBpZiAodG9wID4gY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICB0b3AgPSBjb250YWluZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9IGxlZnQgLyBjb250YWluZXJXaWR0aDtcbiAgICBsZXQgYnJpZ2h0ID0gLSh0b3AgLyBjb250YWluZXJIZWlnaHQpICsgMTtcbiAgICBicmlnaHQgPSBicmlnaHQgPiAwID8gYnJpZ2h0IDogMDtcbiAgICBicmlnaHQgPSBicmlnaHQgPiAxID8gMSA6IGJyaWdodDtcblxuICAgIGNvbnN0IGRhdGE6IEhTVkFzb3VyY2UgPSB7XG4gICAgICBoOiB0aGlzLmhzbC5oLFxuICAgICAgczogc2F0dXJhdGlvbixcbiAgICAgIHY6IGJyaWdodCxcbiAgICAgIGE6IHRoaXMuaHNsLmEsXG4gICAgICBzb3VyY2U6ICdoc3ZhJyxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTYXR1cmF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NhdHVyYXRpb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNhdHVyYXRpb25Nb2R1bGUge31cbiJdfQ==