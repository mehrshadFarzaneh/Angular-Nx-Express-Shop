import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
class RaisedComponent {
    zDepth = 1;
    radius = 1;
    background = '#fff';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: RaisedComponent, selector: "color-raised", inputs: { zDepth: "zDepth", radius: "radius", background: "background" }, ngImport: i0, template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `, isInline: true, styles: [".raised-wrap{position:relative;display:inline-block}.raised-bg{position:absolute;inset:0}.raised-content{position:relative}.zDepth-0{box-shadow:none}.zDepth-1{box-shadow:0 2px 10px #0000001f,0 2px 5px #00000029}.zDepth-2{box-shadow:0 6px 20px #00000030,0 8px 17px #0003}.zDepth-3{box-shadow:0 17px 50px #00000030,0 12px 15px #0000003d}.zDepth-4{box-shadow:0 25px 55px #00000036,0 16px 28px #00000038}.zDepth-5{box-shadow:0 40px 77px #00000038,0 27px 24px #0003}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { RaisedComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-raised', template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".raised-wrap{position:relative;display:inline-block}.raised-bg{position:absolute;inset:0}.raised-content{position:relative}.zDepth-0{box-shadow:none}.zDepth-1{box-shadow:0 2px 10px #0000001f,0 2px 5px #00000029}.zDepth-2{box-shadow:0 6px 20px #00000030,0 8px 17px #0003}.zDepth-3{box-shadow:0 17px 50px #00000030,0 12px 15px #0000003d}.zDepth-4{box-shadow:0 25px 55px #00000036,0 16px 28px #00000038}.zDepth-5{box-shadow:0 40px 77px #00000038,0 27px 24px #0003}\n"] }]
        }], propDecorators: { zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class RaisedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, declarations: [RaisedComponent], imports: [CommonModule], exports: [RaisedComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, imports: [CommonModule] });
}
export { RaisedModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RaisedComponent],
                    exports: [RaisedComponent],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcmFpc2VkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUlwRixNQStDYSxlQUFlO0lBQ2pCLE1BQU0sR0FBVyxDQUFDLENBQUM7SUFDbkIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLFVBQVUsR0FBRyxNQUFNLENBQUM7dUdBSGxCLGVBQWU7MkZBQWYsZUFBZSw4SEE3Q2hCOzs7Ozs7O0dBT1Q7O1NBc0NVLGVBQWU7MkZBQWYsZUFBZTtrQkEvQzNCLFNBQVM7K0JBQ0UsY0FBYyxZQUNkOzs7Ozs7O0dBT1QsdUJBbUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSzs7QUFHUixNQUthLFlBQVk7dUdBQVosWUFBWTt3R0FBWixZQUFZLGlCQVhaLGVBQWUsYUFTaEIsWUFBWSxhQVRYLGVBQWU7d0dBV2YsWUFBWSxZQUZiLFlBQVk7O1NBRVgsWUFBWTsyRkFBWixZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSB6RGVwdGggPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDU7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXJhaXNlZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJyYWlzZWQtd3JhcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyYWlzZWQtYmcgekRlcHRoLXt7ekRlcHRofX1cIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhaXNlZC1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnJhaXNlZC13cmFwIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLnJhaXNlZC1iZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG4gICAgLnJhaXNlZC1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnpEZXB0aC0wIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC56RGVwdGgtMSB7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwgMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtcbiAgICB9XG4gICAgLnpEZXB0aC0yIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDhweCAxN3B4IHJnYmEoMCwwLDAsLjIpO1xuICAgIH1cbiAgICAuekRlcHRoLTMge1xuICAgICAgYm94LXNoYWRvdzogMCAxN3B4IDUwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDEycHggMTVweCByZ2JhKDAsMCwwLC4yNCk7XG4gICAgfVxuICAgIC56RGVwdGgtNCB7XG4gICAgICBib3gtc2hhZG93OiAwIDI1cHggNTVweCByZ2JhKDAsMCwwLC4yMSksIDAgMTZweCAyOHB4IHJnYmEoMCwwLDAsLjIyKTtcbiAgICB9XG4gICAgLnpEZXB0aC01IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgNDBweCA3N3B4IHJnYmEoMCwwLDAsLjIyKSwgMCAyN3B4IDI0cHggcmdiYSgwLDAsMCwuMik7XG4gICAgfVxuICBgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSYWlzZWRDb21wb25lbnQge1xuICBASW5wdXQoKSB6RGVwdGg6IHpEZXB0aCA9IDE7XG4gIEBJbnB1dCgpIHJhZGl1cyA9IDE7XG4gIEBJbnB1dCgpIGJhY2tncm91bmQgPSAnI2ZmZic7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JhaXNlZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSYWlzZWRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFpc2VkTW9kdWxlIHsgfVxuIl19