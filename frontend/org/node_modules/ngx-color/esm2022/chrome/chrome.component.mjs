import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, SaturationModule } from 'ngx-color';
import { ChromeFieldsComponent } from './chrome-fields.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class ChromeComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha = false;
    circle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
        transform: 'translate(-6px, -8px)',
    };
    pointer = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
    activeBackground;
    constructor() {
        super();
    }
    afterValidChange() {
        const alpha = this.disableAlpha ? 1 : this.rgb.a;
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${alpha})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ChromeComponent, selector: "color-chrome", inputs: { disableAlpha: "disableAlpha" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ChromeComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => ChromeComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `, isInline: true, styles: [".chrome-picker{background:#fff;border-radius:2px;box-shadow:0 0 2px #0000004d,0 4px 8px #0000004d;box-sizing:initial;width:225px;font-family:Menlo}.chrome-controls{display:flex}.chrome-color{width:42px}.chrome-body{padding:14px 14px 12px}.chrome-active{position:absolute;inset:0;border-radius:20px;box-shadow:inset 0 0 0 1px #0000001a;z-index:2}.chrome-swatch{width:28px;height:28px;border-radius:15px;position:relative;overflow:hidden}.saturation{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.chrome-toggles{flex:1}.chrome-hue{height:10px;position:relative;margin-bottom:8px}.chrome-alpha{height:10px;position:relative}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i2.AlphaComponent; }), selector: "color-alpha", inputs: ["hsl", "rgb", "pointer", "shadow", "radius", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.CheckboardComponent; }), selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "component", type: i0.forwardRef(function () { return i2.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.SaturationComponent; }), selector: "color-saturation", inputs: ["hsl", "hsv", "radius", "pointer", "circle"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return ChromeFieldsComponent; }), selector: "color-chrome-fields", inputs: ["disableAlpha", "hsl", "rgb", "hex"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { ChromeComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ChromeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-chrome', template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ChromeComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => ChromeComponent),
                        },
                    ], styles: [".chrome-picker{background:#fff;border-radius:2px;box-shadow:0 0 2px #0000004d,0 4px 8px #0000004d;box-sizing:initial;width:225px;font-family:Menlo}.chrome-controls{display:flex}.chrome-color{width:42px}.chrome-body{padding:14px 14px 12px}.chrome-active{position:absolute;inset:0;border-radius:20px;box-shadow:inset 0 0 0 1px #0000001a;z-index:2}.chrome-swatch{width:28px;height:28px;border-radius:15px;position:relative;overflow:hidden}.saturation{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.chrome-toggles{flex:1}.chrome-hue{height:10px;position:relative;margin-bottom:8px}.chrome-alpha{height:10px;position:relative}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disableAlpha: [{
                type: Input
            }] } });
class ColorChromeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, declarations: [ChromeComponent, ChromeFieldsComponent], imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule], exports: [ChromeComponent, ChromeFieldsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule] });
}
export { ColorChromeModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorChromeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ChromeComponent, ChromeFieldsComponent],
                    exports: [ChromeComponent, ChromeFieldsComponent],
                    imports: [
                        CommonModule,
                        AlphaModule,
                        CheckboardModule,
                        EditableInputModule,
                        HueModule,
                        SaturationModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2hyb21lL2Nocm9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5ELE1Bc0hhLGVBQWdCLFNBQVEsU0FBUztJQUM1QyxrREFBa0Q7SUFDekMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixNQUFNLEdBQTJCO1FBQy9CLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsMENBQTBDO1FBQ3JELFNBQVMsRUFBRSx1QkFBdUI7S0FDbkMsQ0FBQztJQUNGLE9BQU8sR0FBMkI7UUFDaEMsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsZUFBZSxFQUFFLG9CQUFvQjtRQUNyQyxTQUFTLEVBQUUsaUNBQWlDO0tBQzdDLENBQUM7SUFDRixnQkFBZ0IsQ0FBVTtJQUUxQjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUM7SUFDeEYsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO3VHQTlCVSxlQUFlOzJGQUFmLGVBQWUsaUZBWmY7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMvQztTQUNGLGlEQWxIUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q1QsK3FEQTBHK0IscUJBQXFCOztTQWxDMUMsZUFBZTsyRkFBZixlQUFlO2tCQXRIM0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNENULG1CQTBEZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7eUJBQy9DO3FCQUNGOzBFQUlRLFlBQVk7c0JBQXBCLEtBQUs7O0FBK0JSLE1BWWEsaUJBQWlCO3VHQUFqQixpQkFBaUI7d0dBQWpCLGlCQUFpQixpQkE3Q2pCLGVBQWUsRUFrQ00scUJBQXFCLGFBR25ELFlBQVk7WUFDWixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsZ0JBQWdCLGFBMUNQLGVBQWUsRUFtQ0MscUJBQXFCO3dHQVVyQyxpQkFBaUIsWUFSMUIsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxnQkFBZ0I7O1NBR1AsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBWjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7b0JBQ2pELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLFNBQVM7d0JBQ1QsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxwaGFNb2R1bGUsIENoZWNrYm9hcmRNb2R1bGUsIENvbG9yV3JhcCwgRWRpdGFibGVJbnB1dE1vZHVsZSwgSHVlTW9kdWxlLCBTYXR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IENocm9tZUZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vY2hyb21lLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWNocm9tZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJjaHJvbWUtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uXCI+XG4gICAgICA8Y29sb3Itc2F0dXJhdGlvblxuICAgICAgICBbaHNsXT1cImhzbFwiXG4gICAgICAgIFtoc3ZdPVwiaHN2XCJcbiAgICAgICAgW2NpcmNsZV09XCJjaXJjbGVcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1zYXR1cmF0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1jb250cm9sc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWNvbG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1zd2F0Y2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtYWN0aXZlXCJcbiAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiYWN0aXZlQmFja2dyb3VuZFwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8Y29sb3ItY2hlY2tib2FyZD48L2NvbG9yLWNoZWNrYm9hcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLXRvZ2dsZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWh1ZVwiPlxuICAgICAgICAgICAgPGNvbG9yLWh1ZVxuICAgICAgICAgICAgICBbcmFkaXVzXT1cIjJcIlxuICAgICAgICAgICAgICBbaHNsXT1cImhzbFwiXG4gICAgICAgICAgICAgIFtwb2ludGVyXT1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9jb2xvci1odWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1hbHBoYVwiICpuZ0lmPVwiIWRpc2FibGVBbHBoYVwiPlxuICAgICAgICAgICAgPGNvbG9yLWFscGhhXG4gICAgICAgICAgICAgIFtyYWRpdXNdPVwiMlwiIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIlxuICAgICAgICAgICAgICBbcG9pbnRlcl09XCJwb2ludGVyXCIgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItYWxwaGE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Y29sb3ItY2hyb21lLWZpZWxkc1xuICAgICAgICBbcmdiXT1cInJnYlwiIFtoc2xdPVwiaHNsXCIgW2hleF09XCJoZXhcIlxuICAgICAgICBbZGlzYWJsZUFscGhhXT1cImRpc2FibGVBbHBoYVwiXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLWNocm9tZS1maWVsZHM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuY2hyb21lLXBpY2tlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGJveC1zaXppbmc6IGluaXRpYWw7XG4gICAgICAgIHdpZHRoOiAyMjVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNZW5sbyc7XG4gICAgICB9XG4gICAgICAuY2hyb21lLWNvbnRyb2xzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtY29sb3Ige1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTRweCAxMnB4O1xuICAgICAgfVxuICAgICAgLmNocm9tZS1hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtc3dhdGNoIHtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLnNhdHVyYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5jaHJvbWUtdG9nZ2xlcyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAuY2hyb21lLWh1ZSB7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2hyb21lLWFscGhhIHtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENocm9tZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENocm9tZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaHJvbWVDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xuICAvKiogUmVtb3ZlIGFscGhhIHNsaWRlciBhbmQgb3B0aW9ucyBmcm9tIHBpY2tlciAqL1xuICBASW5wdXQoKSBkaXNhYmxlQWxwaGEgPSBmYWxzZTtcbiAgY2lyY2xlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIHdpZHRoOiAnMTJweCcsXG4gICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICBib3hTaGFkb3c6ICdyZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMXB4IGluc2V0JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTZweCwgLThweCknLFxuICB9O1xuICBwb2ludGVyOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIHdpZHRoOiAnMTJweCcsXG4gICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTZweCwgLTJweCknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0OCwgMjQ4KScsXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXG4gIH07XG4gIGFjdGl2ZUJhY2tncm91bmQhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFmdGVyVmFsaWRDaGFuZ2UoKSB7XG4gICAgY29uc3QgYWxwaGEgPSB0aGlzLmRpc2FibGVBbHBoYSA/IDEgOiB0aGlzLnJnYi5hO1xuICAgIHRoaXMuYWN0aXZlQmFja2dyb3VuZCA9IGByZ2JhKCR7dGhpcy5yZ2Iucn0sICR7dGhpcy5yZ2IuZ30sICR7dGhpcy5yZ2IuYn0sICR7YWxwaGF9KWA7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hyb21lQ29tcG9uZW50LCBDaHJvbWVGaWVsZHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hyb21lQ29tcG9uZW50LCBDaHJvbWVGaWVsZHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEFscGhhTW9kdWxlLFxuICAgIENoZWNrYm9hcmRNb2R1bGUsXG4gICAgRWRpdGFibGVJbnB1dE1vZHVsZSxcbiAgICBIdWVNb2R1bGUsXG4gICAgU2F0dXJhdGlvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JDaHJvbWVNb2R1bGUge31cbiJdfQ==