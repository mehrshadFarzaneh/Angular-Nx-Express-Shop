import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
class GithubSwatchComponent {
    color;
    onClick = new EventEmitter();
    onSwatchHover = new EventEmitter();
    focusStyle = {
        position: 'relative',
        'z-index': '2',
        outline: '2px solid #fff',
        'box-shadow': '0 0 5px 2px rgba(0,0,0,0.25)',
    };
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubSwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: GithubSwatchComponent, selector: "color-github-swatch", inputs: { color: "color" }, outputs: { onClick: "onClick", onSwatchHover: "onSwatchHover" }, ngImport: i0, template: `
    <div class="github-swatch">
      <color-swatch
        [color]="color"
        [focusStyle]="focusStyle"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, isInline: true, styles: [".github-swatch{width:25px;height:25px;font-size:0}\n"], dependencies: [{ kind: "component", type: i1.SwatchComponent, selector: "color-swatch", inputs: ["color", "style", "focusStyle", "focus"], outputs: ["onClick", "onHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { GithubSwatchComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubSwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-github-swatch', template: `
    <div class="github-swatch">
      <color-swatch
        [color]="color"
        [focusStyle]="focusStyle"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".github-swatch{width:25px;height:25px;font-size:0}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2dpdGh1Yi9naXRodWItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFaEcsTUEwQmEscUJBQXFCO0lBQ3ZCLEtBQUssQ0FBVTtJQUNkLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xELFVBQVUsR0FBRztRQUNYLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFNBQVMsRUFBRSxHQUFHO1FBQ2QsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixZQUFZLEVBQUUsOEJBQThCO0tBQzdDLENBQUM7SUFFRixXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQzt1R0FiVSxxQkFBcUI7MkZBQXJCLHFCQUFxQix3SkF4QnRCOzs7Ozs7Ozs7OztHQVdUOztTQWFVLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQTFCakMsU0FBUzsrQkFDRSxxQkFBcUIsWUFDckI7Ozs7Ozs7Ozs7O0dBV1QsbUJBVWdCLHVCQUF1QixDQUFDLE1BQU0sdUJBQzFCLEtBQUs7OEJBR2pCLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItZ2l0aHViLXN3YXRjaCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1zd2F0Y2hcIj5cbiAgICAgIDxjb2xvci1zd2F0Y2hcbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW2ZvY3VzU3R5bGVdPVwiZm9jdXNTdHlsZVwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgICAgICAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIGNsYXNzPVwic3dhdGNoXCJcbiAgICAgID48L2NvbG9yLXN3YXRjaD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZ2l0aHViLXN3YXRjaCB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEdpdGh1YlN3YXRjaENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9yITogc3RyaW5nO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmb2N1c1N0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICd6LWluZGV4JzogJzInLFxuICAgIG91dGxpbmU6ICcycHggc29saWQgI2ZmZicsXG4gICAgJ2JveC1zaGFkb3cnOiAnMCAwIDVweCAycHggcmdiYSgwLDAsMCwwLjI1KScsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2soeyBoZXgsICRldmVudCB9KSB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoeyBoZXgsICRldmVudCB9KTtcbiAgfVxufVxuIl19