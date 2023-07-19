import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
class SliderSwatchComponent {
    hsl;
    active;
    offset;
    first = false;
    last = false;
    onClick = new EventEmitter();
    background;
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SliderSwatchComponent, selector: "color-slider-swatch", inputs: { hsl: "hsl", active: "active", offset: "offset", first: "first", last: "last" }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `, isInline: true, styles: [".slider-swatch{height:12px;background:rgb(121,211,166);cursor:pointer}.slider-swatch.active{transform:scaleY(1.8);border-radius:3.6px/2px}.slider-swatch.first{border-radius:2px 0 0 2px}.slider-swatch.last{border-radius:0 2px 2px 0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SliderSwatchComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SliderSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-slider-swatch', template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".slider-swatch{height:12px;background:rgb(121,211,166);cursor:pointer}.slider-swatch.active{transform:scaleY(1.8);border-radius:3.6px/2px}.slider-swatch.first{border-radius:2px 0 0 2px}.slider-swatch.last{border-radius:0 2px 2px 0}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], active: [{
                type: Input
            }], offset: [{
                type: Input
            }], first: [{
                type: Input
            }], last: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3NsaWRlci9zbGlkZXItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFJdkIsTUFrQ2EscUJBQXFCO0lBQ3ZCLEdBQUcsQ0FBTztJQUNWLE1BQU0sQ0FBVztJQUNqQixNQUFNLENBQVU7SUFDaEIsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNkLElBQUksR0FBRyxLQUFLLENBQUM7SUFDWixPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM1QyxVQUFVLENBQVU7SUFFcEIsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFDRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNELE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO3VHQXRCVSxxQkFBcUI7MkZBQXJCLHFCQUFxQiwyTUFoQ3RCOzs7OztHQUtUOztTQTJCVSxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFsQ2pDLFNBQVM7K0JBQ0UscUJBQXFCLFlBQ3JCOzs7OztHQUtULG1CQXdCZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSzs4QkFHakIsR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIU0wgfSBmcm9tICduZ3gtY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1zbGlkZXItc3dhdGNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2hcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kXCJcbiAgICBbY2xhc3MuZmlyc3RdPVwiZmlyc3RcIiBbY2xhc3MubGFzdF09XCJsYXN0XCIgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIlxuICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcbiAgPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnNsaWRlci1zd2F0Y2gge1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDEyMSwgMjExLCAxNjYpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuc2xpZGVyLXN3YXRjaC5hY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS44KTtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzLjZweCAycHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzLjZweCAycHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy42cHggMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMy42cHggMnB4O1xuICAgIH1cbiAgICAuc2xpZGVyLXN3YXRjaC5maXJzdCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMHB4IDBweCAycHg7XG4gICAgfVxuICAgIC5zbGlkZXItc3dhdGNoLmxhc3Qge1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDJweCAycHggMHB4O1xuICAgIH1cblxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclN3YXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGhzbCE6IEhTTDtcbiAgQElucHV0KCkgYWN0aXZlITogYm9vbGVhbjtcbiAgQElucHV0KCkgb2Zmc2V0ITogbnVtYmVyO1xuICBASW5wdXQoKSBmaXJzdCA9IGZhbHNlO1xuICBASW5wdXQoKSBsYXN0ID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGJhY2tncm91bmQhOiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYGhzbCgke3RoaXMuaHNsLmh9LCA1MCUsICR7dGhpcy5vZmZzZXQgKiAxMDB9JSlgO1xuICB9XG4gIGhhbmRsZUNsaWNrKCRldmVudCkge1xuICAgIHRoaXMub25DbGljay5lbWl0KHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaDogdGhpcy5oc2wuaCxcbiAgICAgICAgczogMC41LFxuICAgICAgICBsOiB0aGlzLm9mZnNldCxcbiAgICAgICAgc291cmNlOiAnaHNsJyxcbiAgICAgIH0sXG4gICAgICAkZXZlbnQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==