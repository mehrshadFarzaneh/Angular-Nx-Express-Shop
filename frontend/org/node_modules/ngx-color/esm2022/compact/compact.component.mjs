import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, EditableInputModule, isValidHex, RaisedModule, SwatchModule } from 'ngx-color';
import { CompactColorComponent } from './compact-color.component';
import { CompactFieldsComponent } from './compact-fields.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class CompactComponent extends ColorWrap {
    /** Color squares to display */
    colors = [
        '#4D4D4D',
        '#999999',
        '#FFFFFF',
        '#F44E3B',
        '#FE9200',
        '#FCDC00',
        '#DBDF00',
        '#A4DD00',
        '#68CCCA',
        '#73D8FF',
        '#AEA1FF',
        '#FDA1FF',
        '#333333',
        '#808080',
        '#cccccc',
        '#D33115',
        '#E27300',
        '#FCC400',
        '#B0BC00',
        '#68BC00',
        '#16A5A5',
        '#009CE0',
        '#7B64FF',
        '#FA28FF',
        '#000000',
        '#666666',
        '#B3B3B3',
        '#9F0500',
        '#C45100',
        '#FB9E00',
        '#808900',
        '#194D33',
        '#0C797D',
        '#0062B1',
        '#653294',
        '#AB149E',
    ];
    zDepth = 1;
    radius = 1;
    background = '#fff';
    disableAlpha = true;
    constructor() {
        super();
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CompactComponent, selector: "color-compact", inputs: { colors: "colors", zDepth: "zDepth", radius: "radius", background: "background" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CompactComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => CompactComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <color-raised class="color-compact" [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `, isInline: true, styles: [".color-compact{background:#f6f6f6;radius:4px}.compact-picker{padding-top:5px;padding-left:5px;box-sizing:border-box;width:245px}.compact-clear{clear:both}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return i2.RaisedComponent; }), selector: "color-raised", inputs: ["zDepth", "radius", "background"] }, { kind: "component", type: i0.forwardRef(function () { return CompactColorComponent; }), selector: "color-compact-color", inputs: ["color", "active"], outputs: ["onClick", "onSwatchHover"] }, { kind: "component", type: i0.forwardRef(function () { return CompactFieldsComponent; }), selector: "color-compact-fields", inputs: ["hex", "rgb"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { CompactComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CompactComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-compact', template: `
  <color-raised class="color-compact" [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CompactComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => CompactComponent),
                        },
                    ], styles: [".color-compact{background:#f6f6f6;radius:4px}.compact-picker{padding-top:5px;padding-left:5px;box-sizing:border-box;width:245px}.compact-clear{clear:both}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { colors: [{
                type: Input
            }], zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class ColorCompactModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, declarations: [CompactComponent, CompactColorComponent,
            CompactFieldsComponent], imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule], exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule] });
}
export { ColorCompactModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorCompactModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CompactComponent,
                        CompactColorComponent,
                        CompactFieldsComponent,
                    ],
                    exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
                    imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBhY3QvY29tcGFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUMzRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVuRCxNQW9EYSxnQkFBaUIsU0FBUSxTQUFTO0lBQzdDLCtCQUErQjtJQUN0QixNQUFNLEdBQUc7UUFDaEIsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO0tBQ1YsQ0FBQztJQUNPLE1BQU0sR0FBVyxDQUFDLENBQUM7SUFDbkIsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDN0IsWUFBWSxHQUFHLElBQUksQ0FBQztJQUVwQjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUMvQixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzt1R0F2RFUsZ0JBQWdCOzJGQUFoQixnQkFBZ0Isb0lBWmhCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0MsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2hEO1NBQ0YsaURBaERTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQsMmtCQTZGQyxxQkFBcUIsMktBQ3JCLHNCQUFzQjs7U0E5RGIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBcEQ1QixTQUFTOytCQUNFLGVBQWUsWUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JULG1CQWtCZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDOzRCQUMvQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUM7eUJBQ2hEO3FCQUNGOzBFQUlRLE1BQU07c0JBQWQsS0FBSztnQkFzQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLOztBQWdCUixNQVNhLGtCQUFrQjt1R0FBbEIsa0JBQWtCO3dHQUFsQixrQkFBa0IsaUJBbkVsQixnQkFBZ0IsRUE2RHpCLHFCQUFxQjtZQUNyQixzQkFBc0IsYUFHZCxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFlBQVksYUFqRTVELGdCQUFnQixFQWdFQyxxQkFBcUIsRUFBRSxzQkFBc0I7d0dBRzlELGtCQUFrQixZQUZuQixZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFlBQVk7O1NBRTVELGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQVQ5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDMUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7aUJBQ3pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIEVkaXRhYmxlSW5wdXRNb2R1bGUsIGlzVmFsaWRIZXgsIFJhaXNlZE1vZHVsZSwgU3dhdGNoTW9kdWxlLCB6RGVwdGggfSBmcm9tICduZ3gtY29sb3InO1xuaW1wb3J0IHsgQ29tcGFjdENvbG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wYWN0LWNvbG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYWN0RmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wYWN0LWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWNvbXBhY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8Y29sb3ItcmFpc2VkIGNsYXNzPVwiY29sb3ItY29tcGFjdFwiIFt6RGVwdGhdPVwiekRlcHRoXCIgW2JhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiIFtyYWRpdXNdPVwicmFkaXVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBhY3QtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGNvbG9yLWNvbXBhY3QtY29sb3JcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY29sb3JzXCIgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICBbYWN0aXZlXT1cImNvbG9yLnRvTG93ZXJDYXNlKCkgPT09IGhleC50b0xvd2VyQ2FzZSgpXCJcbiAgICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvY29sb3ItY29tcGFjdC1jb2xvcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhY3QtY2xlYXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGNvbG9yLWNvbXBhY3QtZmllbGRzXG4gICAgICAgIFtoZXhdPVwiaGV4XCJcbiAgICAgICAgW3JnYl09XCJyZ2JcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1jb21wYWN0LWZpZWxkcz5cbiAgICA8L2Rpdj5cbiAgPC9jb2xvci1yYWlzZWQ+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAuY29sb3ItY29tcGFjdCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgICAgcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIC5jb21wYWN0LXBpY2tlciB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd2lkdGg6IDI0NXB4O1xuICAgIH1cbiAgICAuY29tcGFjdC1jbGVhciB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21wYWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29sb3JXcmFwLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tcGFjdENvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYWN0Q29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcbiAgLyoqIENvbG9yIHNxdWFyZXMgdG8gZGlzcGxheSAqL1xuICBASW5wdXQoKSBjb2xvcnMgPSBbXG4gICAgJyM0RDRENEQnLFxuICAgICcjOTk5OTk5JyxcbiAgICAnI0ZGRkZGRicsXG4gICAgJyNGNDRFM0InLFxuICAgICcjRkU5MjAwJyxcbiAgICAnI0ZDREMwMCcsXG4gICAgJyNEQkRGMDAnLFxuICAgICcjQTRERDAwJyxcbiAgICAnIzY4Q0NDQScsXG4gICAgJyM3M0Q4RkYnLFxuICAgICcjQUVBMUZGJyxcbiAgICAnI0ZEQTFGRicsXG4gICAgJyMzMzMzMzMnLFxuICAgICcjODA4MDgwJyxcbiAgICAnI2NjY2NjYycsXG4gICAgJyNEMzMxMTUnLFxuICAgICcjRTI3MzAwJyxcbiAgICAnI0ZDQzQwMCcsXG4gICAgJyNCMEJDMDAnLFxuICAgICcjNjhCQzAwJyxcbiAgICAnIzE2QTVBNScsXG4gICAgJyMwMDlDRTAnLFxuICAgICcjN0I2NEZGJyxcbiAgICAnI0ZBMjhGRicsXG4gICAgJyMwMDAwMDAnLFxuICAgICcjNjY2NjY2JyxcbiAgICAnI0IzQjNCMycsXG4gICAgJyM5RjA1MDAnLFxuICAgICcjQzQ1MTAwJyxcbiAgICAnI0ZCOUUwMCcsXG4gICAgJyM4MDg5MDAnLFxuICAgICcjMTk0RDMzJyxcbiAgICAnIzBDNzk3RCcsXG4gICAgJyMwMDYyQjEnLFxuICAgICcjNjUzMjk0JyxcbiAgICAnI0FCMTQ5RScsXG4gIF07XG4gIEBJbnB1dCgpIHpEZXB0aDogekRlcHRoID0gMTtcbiAgQElucHV0KCkgcmFkaXVzID0gMTtcbiAgQElucHV0KCkgYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgZGlzYWJsZUFscGhhID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgaGV4LCBzb3VyY2U6ICdoZXgnIH0sICRldmVudCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbXBhY3RDb21wb25lbnQsXG4gICAgQ29tcGFjdENvbG9yQ29tcG9uZW50LFxuICAgIENvbXBhY3RGaWVsZHNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtDb21wYWN0Q29tcG9uZW50LCBDb21wYWN0Q29sb3JDb21wb25lbnQsIENvbXBhY3RGaWVsZHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBFZGl0YWJsZUlucHV0TW9kdWxlLCBTd2F0Y2hNb2R1bGUsIFJhaXNlZE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcGFjdE1vZHVsZSB7fVxuIl19