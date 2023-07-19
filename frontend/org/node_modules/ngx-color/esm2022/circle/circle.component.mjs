import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow, } from 'material-colors';
import { TinyColor } from '@ctrl/tinycolor';
import { ColorWrap, isValidHex, SwatchModule } from 'ngx-color';
import { CircleSwatchComponent } from './circle-swatch.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
class CircleComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 252;
    /** Color squares to display */
    colors = [
        red['500'],
        pink['500'],
        purple['500'],
        deepPurple['500'],
        indigo['500'],
        blue['500'],
        lightBlue['500'],
        cyan['500'],
        teal['500'],
        green['500'],
        lightGreen['500'],
        lime['500'],
        yellow['500'],
        amber['500'],
        orange['500'],
        deepOrange['500'],
        brown['500'],
        blueGrey['500'],
    ];
    /** Value for circle size */
    circleSize = 28;
    /** Value for spacing between circles */
    circleSpacing = 14;
    constructor() {
        super();
    }
    isActive(color) {
        return new TinyColor(this.hex).equals(color);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CircleComponent, selector: "color-circle", inputs: { width: "width", colors: "colors", circleSize: "circleSize", circleSpacing: "circleSpacing" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CircleComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => CircleComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `, isInline: true, styles: [".circle-picker{display:flex;flex-wrap:wrap}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return CircleSwatchComponent; }), selector: "color-circle-swatch", inputs: ["color", "circleSize", "circleSpacing", "focus"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { CircleComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CircleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-circle', template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CircleComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => CircleComponent),
                        },
                    ], styles: [".circle-picker{display:flex;flex-wrap:wrap}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], circleSize: [{
                type: Input
            }], circleSpacing: [{
                type: Input
            }] } });
class ColorCircleModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, declarations: [CircleComponent, CircleSwatchComponent], imports: [CommonModule, SwatchModule], exports: [CircleComponent, CircleSwatchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, imports: [CommonModule, SwatchModule] });
}
export { ColorCircleModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCircleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CircleComponent, CircleSwatchComponent],
                    exports: [CircleComponent, CircleSwatchComponent],
                    imports: [CommonModule, SwatchModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUNMLEtBQUssRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osTUFBTSxHQUNQLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRW5ELE1BMENhLGVBQWdCLFNBQVEsU0FBUztJQUM1QyxtQ0FBbUM7SUFDMUIsS0FBSyxHQUFvQixHQUFHLENBQUM7SUFDdEMsK0JBQStCO0lBRS9CLE1BQU0sR0FBYTtRQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDYixVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFD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LE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgYW1iZXIsXG4gIGJsdWUsXG4gIGJsdWVHcmV5LFxuICBicm93bixcbiAgY3lhbixcbiAgZGVlcE9yYW5nZSxcbiAgZGVlcFB1cnBsZSxcbiAgZ3JlZW4sXG4gIGluZGlnbyxcbiAgbGlnaHRCbHVlLFxuICBsaWdodEdyZWVuLFxuICBsaW1lLFxuICBvcmFuZ2UsXG4gIHBpbmssXG4gIHB1cnBsZSxcbiAgcmVkLFxuICB0ZWFsLFxuICB5ZWxsb3csXG59IGZyb20gJ21hdGVyaWFsLWNvbG9ycyc7XG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIGlzVmFsaWRIZXgsIFN3YXRjaE1vZHVsZSB9IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBDaXJjbGVTd2F0Y2hDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS1zd2F0Y2guY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1jaXJjbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY2lyY2xlLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIlxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCJcbiAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHQucHhdPVwiLWNpcmNsZVNwYWNpbmdcIlxuICAgICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwiLWNpcmNsZVNwYWNpbmdcIlxuICAgID5cbiAgICAgIDxjb2xvci1jaXJjbGUtc3dhdGNoXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIlxuICAgICAgICBbY2lyY2xlU2l6ZV09XCJjaXJjbGVTaXplXCJcbiAgICAgICAgW2NpcmNsZVNwYWNpbmddPVwiY2lyY2xlU3BhY2luZ1wiXG4gICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgIFtmb2N1c109XCJpc0FjdGl2ZShjb2xvcilcIlxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG9uU3dhdGNoSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgPjwvY29sb3ItY2lyY2xlLXN3YXRjaD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmNpcmNsZS1waWNrZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENpcmNsZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENpcmNsZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMjUyO1xuICAvKiogQ29sb3Igc3F1YXJlcyB0byBkaXNwbGF5ICovXG4gIEBJbnB1dCgpXG4gIGNvbG9yczogc3RyaW5nW10gPSBbXG4gICAgcmVkWyc1MDAnXSxcbiAgICBwaW5rWyc1MDAnXSxcbiAgICBwdXJwbGVbJzUwMCddLFxuICAgIGRlZXBQdXJwbGVbJzUwMCddLFxuICAgIGluZGlnb1snNTAwJ10sXG4gICAgYmx1ZVsnNTAwJ10sXG4gICAgbGlnaHRCbHVlWyc1MDAnXSxcbiAgICBjeWFuWyc1MDAnXSxcbiAgICB0ZWFsWyc1MDAnXSxcbiAgICBncmVlblsnNTAwJ10sXG4gICAgbGlnaHRHcmVlblsnNTAwJ10sXG4gICAgbGltZVsnNTAwJ10sXG4gICAgeWVsbG93Wyc1MDAnXSxcbiAgICBhbWJlclsnNTAwJ10sXG4gICAgb3JhbmdlWyc1MDAnXSxcbiAgICBkZWVwT3JhbmdlWyc1MDAnXSxcbiAgICBicm93blsnNTAwJ10sXG4gICAgYmx1ZUdyZXlbJzUwMCddLFxuICBdO1xuICAvKiogVmFsdWUgZm9yIGNpcmNsZSBzaXplICovXG4gIEBJbnB1dCgpIGNpcmNsZVNpemUgPSAyODtcbiAgLyoqIFZhbHVlIGZvciBzcGFjaW5nIGJldHdlZW4gY2lyY2xlcyAqL1xuICBASW5wdXQoKSBjaXJjbGVTcGFjaW5nID0gMTQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBpc0FjdGl2ZShjb2xvcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBUaW55Q29sb3IodGhpcy5oZXgpLmVxdWFscyhjb2xvcik7XG4gIH1cbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9OiB7IGhleDogc3RyaW5nLCAkZXZlbnQ6IEV2ZW50IH0pIHtcbiAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7IGhleCwgc291cmNlOiAnaGV4JyB9LCAkZXZlbnQpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDaXJjbGVDb21wb25lbnQsIENpcmNsZVN3YXRjaENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaXJjbGVDb21wb25lbnQsIENpcmNsZVN3YXRjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN3YXRjaE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yQ2lyY2xlTW9kdWxlIHt9XG4iXX0=