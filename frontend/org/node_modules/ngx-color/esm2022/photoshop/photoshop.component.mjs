import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, NgModule, Output } from '@angular/core';
import { AlphaModule, ColorWrap, EditableInputModule, HueModule, SaturationModule, SwatchModule } from 'ngx-color';
import { PhotoshopButtonComponent } from './photoshop-button.component';
import { PhotoshopFieldsComponent } from './photoshop-fields.component';
import { PhotoshopPreviewsComponent } from './photoshop-previews.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
class PhotoshopComponent extends ColorWrap {
    /** Title text */
    header = 'Color Picker';
    onAccept = new EventEmitter();
    onCancel = new EventEmitter();
    circle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
        transform: 'translate(-6px, -10px)',
    };
    constructor() {
        super();
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: PhotoshopComponent, selector: "color-photoshop", inputs: { header: "header" }, outputs: { onAccept: "onAccept", onCancel: "onCancel" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PhotoshopComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => PhotoshopComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="photoshop-picker {{ className }}">
    <div class="photoshop-head">{{ header }}</div>
    <div class="photoshop-body">
      <div class="photoshop-saturation">
        <color-saturation
          [hsl]="hsl" [hsv]="hsv" [circle]="circle"
          (onChange)="handleValueChange($event)"
        ></color-saturation>
      </div>
      <div class="photoshop-hue">
        <color-hue direction="vertical"
          [hsl]="hsl" [hidePointer]="true"
          (onChange)="handleValueChange($event)"
        ></color-hue>
      </div>
      <div class="photoshop-controls">
        <div class="photoshop-top">
          <div class="photoshop-previews">
            <color-photoshop-previews
              [rgb]="rgb" [currentColor]="currentColor"
            ></color-photoshop-previews>
          </div>
          <div class="photoshop-actions">
            <color-photoshop-button label="OK"
              [active]="true" (onClick)="onAccept.emit($event)"
            ></color-photoshop-button>
            <color-photoshop-button label="Cancel"
              (onClick)="onCancel.emit($event)"
            >
            </color-photoshop-button>
            <color-photoshop-fields
              [rgb]="rgb" [hex]="hex" [hsv]="hsv"
              (onChange)="handleValueChange($event)"
            ></color-photoshop-fields>
          </div>
        </div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".photoshop-picker{background:rgb(220,220,220);border-radius:4px;box-shadow:#00000040 0 0 0 1px,#00000026 0 8px 16px;box-sizing:initial;width:513px}.photoshop-head{background-image:linear-gradient(-180deg,rgb(240,240,240) 0%,rgb(212,212,212) 100%);border-bottom:1px solid rgb(177,177,177);box-shadow:#fff3 0 1px inset,#00000005 0 -1px inset;height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.photoshop-body{padding:15px 15px 0;display:flex}.photoshop-saturation{width:256px;height:256px;position:relative;border-width:2px;border-style:solid;border-color:rgb(179,179,179) rgb(179,179,179) rgb(240,240,240);border-image:initial;overflow:hidden}.photoshop-hue{position:relative;height:256px;width:23px;margin-left:10px;border-width:2px;border-style:solid;border-color:rgb(179,179,179) rgb(179,179,179) rgb(240,240,240);border-image:initial}.photoshop-controls{width:180px;margin-left:10px}.photoshop-top{display:flex}.photoshop-previews{width:60px}.photoshop-actions{flex:1 1 0%;margin-left:20px}\n"], dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i1.SaturationComponent; }), selector: "color-saturation", inputs: ["hsl", "hsv", "radius", "pointer", "circle"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return PhotoshopPreviewsComponent; }), selector: "color-photoshop-previews", inputs: ["rgb", "currentColor"] }, { kind: "component", type: i0.forwardRef(function () { return PhotoshopButtonComponent; }), selector: "color-photoshop-button", inputs: ["label", "active"], outputs: ["onClick"] }, { kind: "component", type: i0.forwardRef(function () { return PhotoshopFieldsComponent; }), selector: "color-photoshop-fields", inputs: ["rgb", "hsv", "hex"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { PhotoshopComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: PhotoshopComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-photoshop', template: `
  <div class="photoshop-picker {{ className }}">
    <div class="photoshop-head">{{ header }}</div>
    <div class="photoshop-body">
      <div class="photoshop-saturation">
        <color-saturation
          [hsl]="hsl" [hsv]="hsv" [circle]="circle"
          (onChange)="handleValueChange($event)"
        ></color-saturation>
      </div>
      <div class="photoshop-hue">
        <color-hue direction="vertical"
          [hsl]="hsl" [hidePointer]="true"
          (onChange)="handleValueChange($event)"
        ></color-hue>
      </div>
      <div class="photoshop-controls">
        <div class="photoshop-top">
          <div class="photoshop-previews">
            <color-photoshop-previews
              [rgb]="rgb" [currentColor]="currentColor"
            ></color-photoshop-previews>
          </div>
          <div class="photoshop-actions">
            <color-photoshop-button label="OK"
              [active]="true" (onClick)="onAccept.emit($event)"
            ></color-photoshop-button>
            <color-photoshop-button label="Cancel"
              (onClick)="onCancel.emit($event)"
            >
            </color-photoshop-button>
            <color-photoshop-fields
              [rgb]="rgb" [hex]="hex" [hsv]="hsv"
              (onChange)="handleValueChange($event)"
            ></color-photoshop-fields>
          </div>
        </div>
      </div>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PhotoshopComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => PhotoshopComponent),
                        },
                    ], styles: [".photoshop-picker{background:rgb(220,220,220);border-radius:4px;box-shadow:#00000040 0 0 0 1px,#00000026 0 8px 16px;box-sizing:initial;width:513px}.photoshop-head{background-image:linear-gradient(-180deg,rgb(240,240,240) 0%,rgb(212,212,212) 100%);border-bottom:1px solid rgb(177,177,177);box-shadow:#fff3 0 1px inset,#00000005 0 -1px inset;height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.photoshop-body{padding:15px 15px 0;display:flex}.photoshop-saturation{width:256px;height:256px;position:relative;border-width:2px;border-style:solid;border-color:rgb(179,179,179) rgb(179,179,179) rgb(240,240,240);border-image:initial;overflow:hidden}.photoshop-hue{position:relative;height:256px;width:23px;margin-left:10px;border-width:2px;border-style:solid;border-color:rgb(179,179,179) rgb(179,179,179) rgb(240,240,240);border-image:initial}.photoshop-controls{width:180px;margin-left:10px}.photoshop-top{display:flex}.photoshop-previews{width:60px}.photoshop-actions{flex:1 1 0%;margin-left:20px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { header: [{
                type: Input
            }], onAccept: [{
                type: Output
            }], onCancel: [{
                type: Output
            }] } });
class ColorPhotoshopModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorPhotoshopModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorPhotoshopModule, declarations: [PhotoshopComponent, PhotoshopPreviewsComponent,
            PhotoshopButtonComponent,
            PhotoshopFieldsComponent], imports: [CommonModule,
            EditableInputModule,
            HueModule,
            AlphaModule,
            SwatchModule,
            SaturationModule], exports: [PhotoshopComponent, PhotoshopPreviewsComponent,
            PhotoshopButtonComponent,
            PhotoshopFieldsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorPhotoshopModule, imports: [CommonModule,
            EditableInputModule,
            HueModule,
            AlphaModule,
            SwatchModule,
            SaturationModule] });
}
export { ColorPhotoshopModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorPhotoshopModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PhotoshopComponent,
                        PhotoshopPreviewsComponent,
                        PhotoshopButtonComponent,
                        PhotoshopFieldsComponent,
                    ],
                    exports: [
                        PhotoshopComponent,
                        PhotoshopPreviewsComponent,
                        PhotoshopButtonComponent,
                        PhotoshopFieldsComponent,
                    ],
                    imports: [
                        CommonModule,
                        EditableInputModule,
                        HueModule,
                        AlphaModule,
                        SwatchModule,
                        SaturationModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcGhvdG9zaG9wL3Bob3Rvc2hvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkQsTUEwSGEsa0JBQW1CLFNBQVEsU0FBUztJQUMvQyxpQkFBaUI7SUFDUixNQUFNLEdBQUcsY0FBYyxDQUFDO0lBQ3ZCLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBQ3JDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBQy9DLE1BQU0sR0FBRztRQUNQLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixTQUFTLEVBQUUsMENBQTBDO1FBQ3JELFNBQVMsRUFBRSx3QkFBd0I7S0FDcEMsQ0FBQztJQUNGO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7dUdBakJVLGtCQUFrQjsyRkFBbEIsa0JBQWtCLGlJQVpsQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsU0FBUztnQkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNsRDtTQUNGLGlEQXRIUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDVCwwaERBdUdDLDBCQUEwQiw2SUFDMUIsd0JBQXdCLDZKQUN4Qix3QkFBd0I7O1NBekJmLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQTFIOUIsU0FBUzsrQkFDRSxpQkFBaUIsWUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q1QsbUJBa0VnQix1QkFBdUIsQ0FBQyxNQUFNLHVCQUMxQixLQUFLLGFBQ2Y7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUM7NEJBQ2pELEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxTQUFTOzRCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQzt5QkFDbEQ7cUJBQ0Y7MEVBSVEsTUFBTTtzQkFBZCxLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTs7QUFnQlQsTUFzQmEsb0JBQW9CO3VHQUFwQixvQkFBb0I7d0dBQXBCLG9CQUFvQixpQkExQ3BCLGtCQUFrQixFQXVCM0IsMEJBQTBCO1lBQzFCLHdCQUF3QjtZQUN4Qix3QkFBd0IsYUFTeEIsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0IsYUF2Q1Asa0JBQWtCLEVBNkIzQiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLHdCQUF3Qjt3R0FXZixvQkFBb0IsWUFSN0IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0I7O1NBR1Asb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBdEJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFscGhhTW9kdWxlLCBDb2xvcldyYXAsIEVkaXRhYmxlSW5wdXRNb2R1bGUsIEh1ZU1vZHVsZSwgU2F0dXJhdGlvbk1vZHVsZSwgU3dhdGNoTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IFBob3Rvc2hvcEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vcGhvdG9zaG9wLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9zaG9wRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9waG90b3Nob3AtZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b3Nob3BQcmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItcGhvdG9zaG9wJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1waWNrZXIge3sgY2xhc3NOYW1lIH19XCI+XG4gICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1oZWFkXCI+e3sgaGVhZGVyIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXNhdHVyYXRpb25cIj5cbiAgICAgICAgPGNvbG9yLXNhdHVyYXRpb25cbiAgICAgICAgICBbaHNsXT1cImhzbFwiIFtoc3ZdPVwiaHN2XCIgW2NpcmNsZV09XCJjaXJjbGVcIlxuICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvY29sb3Itc2F0dXJhdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1odWVcIj5cbiAgICAgICAgPGNvbG9yLWh1ZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgW2hzbF09XCJoc2xcIiBbaGlkZVBvaW50ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9jb2xvci1odWU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtY29udHJvbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC10b3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXByZXZpZXdzXCI+XG4gICAgICAgICAgICA8Y29sb3ItcGhvdG9zaG9wLXByZXZpZXdzXG4gICAgICAgICAgICAgIFtyZ2JdPVwicmdiXCIgW2N1cnJlbnRDb2xvcl09XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPjwvY29sb3ItcGhvdG9zaG9wLXByZXZpZXdzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGNvbG9yLXBob3Rvc2hvcC1idXR0b24gbGFiZWw9XCJPS1wiXG4gICAgICAgICAgICAgIFthY3RpdmVdPVwidHJ1ZVwiIChvbkNsaWNrKT1cIm9uQWNjZXB0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9jb2xvci1waG90b3Nob3AtYnV0dG9uPlxuICAgICAgICAgICAgPGNvbG9yLXBob3Rvc2hvcC1idXR0b24gbGFiZWw9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNhbmNlbC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jb2xvci1waG90b3Nob3AtYnV0dG9uPlxuICAgICAgICAgICAgPGNvbG9yLXBob3Rvc2hvcC1maWVsZHNcbiAgICAgICAgICAgICAgW3JnYl09XCJyZ2JcIiBbaGV4XT1cImhleFwiIFtoc3ZdPVwiaHN2XCJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY29sb3ItcGhvdG9zaG9wLWZpZWxkcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAucGhvdG9zaG9wLXBpY2tlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCAyMjAsIDIyMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggOHB4IDE2cHg7XG4gICAgICBib3gtc2l6aW5nOiBpbml0aWFsOyB3aWR0aDogNTEzcHg7XG4gICAgfVxuICAgIC5waG90b3Nob3AtaGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIC0xODBkZWcsXG4gICAgICAgIHJnYigyNDAsIDI0MCwgMjQwKSAwJSxcbiAgICAgICAgcmdiKDIxMiwgMjEyLCAyMTIpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDBweCAxcHggMHB4IDBweCBpbnNldCxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAyKSAwcHggLTFweCAwcHggMHB4IGluc2V0O1xuICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAucGhvdG9zaG9wLWJvZHkge1xuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5waG90b3Nob3Atc2F0dXJhdGlvbiB7XG4gICAgICB3aWR0aDogMjU2cHg7XG4gICAgICBoZWlnaHQ6IDI1NnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSkgcmdiKDE3OSwgMTc5LCAxNzkpIHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5waG90b3Nob3AtaHVlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMjU2cHg7XG4gICAgICB3aWR0aDogMjNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSkgcmdiKDE3OSwgMTc5LCAxNzkpIHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICB9XG4gICAgLnBob3Rvc2hvcC1jb250cm9scyB7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnBob3Rvc2hvcC10b3Age1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnBob3Rvc2hvcC1wcmV2aWV3cyB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgLnBob3Rvc2hvcC1hY3Rpb25zIHtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICBmbGV4OiAxIDEgMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQaG90b3Nob3BDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDb2xvcldyYXAsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQaG90b3Nob3BDb21wb25lbnQpLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9zaG9wQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcbiAgLyoqIFRpdGxlIHRleHQgKi9cbiAgQElucHV0KCkgaGVhZGVyID0gJ0NvbG9yIFBpY2tlcic7XG4gIEBPdXRwdXQoKSBvbkFjY2VwdCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gIGNpcmNsZSA9IHtcbiAgICB3aWR0aDogJzEycHgnLFxuICAgIGhlaWdodDogJzEycHgnLFxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgYm94U2hhZG93OiAncmdiKDI1NSwgMjU1LCAyNTUpIDBweCAwcHggMHB4IDFweCBpbnNldCcsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC02cHgsIC0xMHB4KScsXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGhvdG9zaG9wQ29tcG9uZW50LFxuICAgIFBob3Rvc2hvcFByZXZpZXdzQ29tcG9uZW50LFxuICAgIFBob3Rvc2hvcEJ1dHRvbkNvbXBvbmVudCxcbiAgICBQaG90b3Nob3BGaWVsZHNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQaG90b3Nob3BDb21wb25lbnQsXG4gICAgUGhvdG9zaG9wUHJldmlld3NDb21wb25lbnQsXG4gICAgUGhvdG9zaG9wQnV0dG9uQ29tcG9uZW50LFxuICAgIFBob3Rvc2hvcEZpZWxkc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBFZGl0YWJsZUlucHV0TW9kdWxlLFxuICAgIEh1ZU1vZHVsZSxcbiAgICBBbHBoYU1vZHVsZSxcbiAgICBTd2F0Y2hNb2R1bGUsXG4gICAgU2F0dXJhdGlvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaG90b3Nob3BNb2R1bGUge31cbiJdfQ==