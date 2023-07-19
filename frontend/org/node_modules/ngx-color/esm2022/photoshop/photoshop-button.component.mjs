import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
class PhotoshopButtonComponent {
    label = '';
    active = false;
    onClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: PhotoshopButtonComponent, selector: "color-photoshop-button", inputs: { label: "label", active: "active" }, outputs: { onClick: "onClick" }, ngImport: i0, template: `
    <div class="photoshop-button"  [class.active]="active"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </div>
  `, isInline: true, styles: [".photoshop-button{background-image:linear-gradient(-180deg,rgb(255,255,255) 0%,rgb(230,230,230) 100%);border:1px solid rgb(135,135,135);border-radius:2px;height:22px;box-shadow:#eaeaea 0 1px;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px;cursor:pointer}.photoshop-button.active{box-shadow:0 0 0 1px #878787}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { PhotoshopButtonComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-photoshop-button', template: `
    <div class="photoshop-button"  [class.active]="active"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".photoshop-button{background-image:linear-gradient(-180deg,rgb(255,255,255) 0%,rgb(230,230,230) 100%);border:1px solid rgb(135,135,135);border-radius:2px;height:22px;box-shadow:#eaeaea 0 1px;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px;cursor:pointer}.photoshop-button.active{box-shadow:0 0 0 1px #878787}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], active: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3Bob3Rvc2hvcC9waG90b3Nob3AtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFvQ2Esd0JBQXdCO0lBQzFCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2QsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7dUdBSG5DLHdCQUF3QjsyRkFBeEIsd0JBQXdCLDZJQWxDekI7Ozs7OztHQU1UOztTQTRCVSx3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFwQ3BDLFNBQVM7K0JBQ0Usd0JBQXdCLFlBQ3hCOzs7Ozs7R0FNVCxtQkF5QmdCLHVCQUF1QixDQUFDLE1BQU0sdUJBQzFCLEtBQUs7OEJBR2pCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXBob3Rvc2hvcC1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtYnV0dG9uXCIgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgPlxuICAgICAge3sgbGFiZWwgfX1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5waG90b3Nob3AtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgLTE4MGRlZyxcbiAgICAgICAgcmdiKDI1NSwgMjU1LCAyNTUpIDAlLFxuICAgICAgICByZ2IoMjMwLCAyMzAsIDIzMCkgMTAwJVxuICAgICAgKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzUsIDEzNSwgMTM1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGJveC1zaGFkb3c6IHJnYigyMzQsIDIzNCwgMjM0KSAwcHggMXB4IDBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAucGhvdG9zaG9wLWJ1dHRvbi5hY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM4Nzg3ODc7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBob3Rvc2hvcEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG59XG4iXX0=