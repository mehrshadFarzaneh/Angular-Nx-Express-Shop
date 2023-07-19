import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow, } from 'material-colors';
import { ColorWrap, RaisedModule, SwatchModule } from 'ngx-color';
import { SwatchesColorComponent } from './swatches-color.component';
import { SwatchesGroupComponent } from './swatches-group.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class SwatchesComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 320;
    /** Color squares to display */
    height = 240;
    /** An array of color groups, each with an array of colors */
    colors = [
        [
            red['900'],
            red['700'],
            red['500'],
            red['300'],
            red['100'],
        ],
        [
            pink['900'],
            pink['700'],
            pink['500'],
            pink['300'],
            pink['100'],
        ],
        [
            purple['900'],
            purple['700'],
            purple['500'],
            purple['300'],
            purple['100'],
        ],
        [
            deepPurple['900'],
            deepPurple['700'],
            deepPurple['500'],
            deepPurple['300'],
            deepPurple['100'],
        ],
        [
            indigo['900'],
            indigo['700'],
            indigo['500'],
            indigo['300'],
            indigo['100'],
        ],
        [
            blue['900'],
            blue['700'],
            blue['500'],
            blue['300'],
            blue['100'],
        ],
        [
            lightBlue['900'],
            lightBlue['700'],
            lightBlue['500'],
            lightBlue['300'],
            lightBlue['100'],
        ],
        [
            cyan['900'],
            cyan['700'],
            cyan['500'],
            cyan['300'],
            cyan['100'],
        ],
        [
            teal['900'],
            teal['700'],
            teal['500'],
            teal['300'],
            teal['100'],
        ],
        [
            '#194D33',
            green['700'],
            green['500'],
            green['300'],
            green['100'],
        ],
        [
            lightGreen['900'],
            lightGreen['700'],
            lightGreen['500'],
            lightGreen['300'],
            lightGreen['100'],
        ],
        [
            lime['900'],
            lime['700'],
            lime['500'],
            lime['300'],
            lime['100'],
        ],
        [
            yellow['900'],
            yellow['700'],
            yellow['500'],
            yellow['300'],
            yellow['100'],
        ],
        [
            amber['900'],
            amber['700'],
            amber['500'],
            amber['300'],
            amber['100'],
        ],
        [
            orange['900'],
            orange['700'],
            orange['500'],
            orange['300'],
            orange['100'],
        ],
        [
            deepOrange['900'],
            deepOrange['700'],
            deepOrange['500'],
            deepOrange['300'],
            deepOrange['100'],
        ],
        [
            brown['900'],
            brown['700'],
            brown['500'],
            brown['300'],
            brown['100'],
        ],
        [
            blueGrey['900'],
            blueGrey['700'],
            blueGrey['500'],
            blueGrey['300'],
            blueGrey['100'],
        ],
        ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
    ];
    zDepth = 1;
    radius = 1;
    background = '#fff';
    constructor() {
        super();
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SwatchesComponent, selector: "color-swatches", inputs: { width: "width", height: "height", colors: "colors", zDepth: "zDepth", radius: "radius", background: "background" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwatchesComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => SwatchesComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="swatches-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height">
    <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
      <div class="swatches-overflow" [style.height.px]="height">
        <div class="swatches-body">
          <color-swatches-group
            *ngFor="let group of colors"
            [group]="group" [active]="hex"
            (onClick)="handlePickerChange($event)"
          ></color-swatches-group>
        </div>
      </div>
    </color-raised>
  </div>
  `, isInline: true, styles: [".swatches-overflow{overflow-y:scroll}.swatches-overflow{padding:16px 0 6px 16px}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return i2.RaisedComponent; }), selector: "color-raised", inputs: ["zDepth", "radius", "background"] }, { kind: "component", type: i0.forwardRef(function () { return SwatchesGroupComponent; }), selector: "color-swatches-group", inputs: ["group", "active"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SwatchesComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-swatches', template: `
  <div class="swatches-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height">
    <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
      <div class="swatches-overflow" [style.height.px]="height">
        <div class="swatches-body">
          <color-swatches-group
            *ngFor="let group of colors"
            [group]="group" [active]="hex"
            (onClick)="handlePickerChange($event)"
          ></color-swatches-group>
        </div>
      </div>
    </color-raised>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwatchesComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => SwatchesComponent),
                        },
                    ], styles: [".swatches-overflow{overflow-y:scroll}.swatches-overflow{padding:16px 0 6px 16px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], colors: [{
                type: Input
            }], zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class ColorSwatchesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSwatchesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorSwatchesModule, declarations: [SwatchesComponent, SwatchesGroupComponent,
            SwatchesColorComponent], imports: [CommonModule, SwatchModule, RaisedModule], exports: [SwatchesComponent, SwatchesGroupComponent, SwatchesColorComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSwatchesModule, imports: [CommonModule, SwatchModule, RaisedModule] });
}
export { ColorSwatchesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSwatchesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SwatchesComponent,
                        SwatchesGroupComponent,
                        SwatchesColorComponent,
                    ],
                    exports: [SwatchesComponent, SwatchesGroupComponent, SwatchesColorComponent],
                    imports: [CommonModule, SwatchModule, RaisedModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zd2F0Y2hlcy9zd2F0Y2hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUNMLEtBQUssRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osTUFBTSxHQUNQLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5ELE1BMENhLGlCQUFrQixTQUFRLFNBQVM7SUFDOUMsbUNBQW1DO0lBQzFCLEtBQUssR0FBb0IsR0FBRyxDQUFDO0lBQ3RDLCtCQUErQjtJQUN0QixNQUFNLEdBQW9CLEdBQUcsQ0FBQztJQUN2Qyw2REFBNkQ7SUFFN0QsTUFBTSxHQUFlO1FBQ25CO1lBQ0UsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDVixHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDWDtRQUNEO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDWjtRQUNEO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNEO1lBQ0UsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0Q7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQ0Q7WUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNaO1FBQ0Q7WUFDRSxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNoQixTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDakI7UUFDRDtZQUNFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ1o7UUFDRDtZQUNFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ1o7UUFDRDtZQUNFLFNBQVM7WUFDVCxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ1osS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDWixLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ2I7UUFDRDtZQUNFLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNEO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDWjtRQUNEO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNEO1lBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDWixLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ1osS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNaLEtBQUssQ0FBQyxLQUFL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QkFUL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7b0JBQzVFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGFtYmVyLFxuICBibHVlLFxuICBibHVlR3JleSxcbiAgYnJvd24sXG4gIGN5YW4sXG4gIGRlZXBPcmFuZ2UsXG4gIGRlZXBQdXJwbGUsXG4gIGdyZWVuLFxuICBpbmRpZ28sXG4gIGxpZ2h0Qmx1ZSxcbiAgbGlnaHRHcmVlbixcbiAgbGltZSxcbiAgb3JhbmdlLFxuICBwaW5rLFxuICBwdXJwbGUsXG4gIHJlZCxcbiAgdGVhbCxcbiAgeWVsbG93LFxufSBmcm9tICdtYXRlcmlhbC1jb2xvcnMnO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIFJhaXNlZE1vZHVsZSwgU3dhdGNoTW9kdWxlLCB6RGVwdGggfSBmcm9tICduZ3gtY29sb3InO1xuaW1wb3J0IHsgU3dhdGNoZXNDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vc3dhdGNoZXMtY29sb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN3YXRjaGVzR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3N3YXRjaGVzLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc3dhdGNoZXMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwic3dhdGNoZXMtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cbiAgICA8Y29sb3ItcmFpc2VkIFt6RGVwdGhdPVwiekRlcHRoXCIgW2JhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiIFtyYWRpdXNdPVwicmFkaXVzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3dhdGNoZXMtb3ZlcmZsb3dcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dhdGNoZXMtYm9keVwiPlxuICAgICAgICAgIDxjb2xvci1zd2F0Y2hlcy1ncm91cFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIGNvbG9yc1wiXG4gICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIiBbYWN0aXZlXT1cImhleFwiXG4gICAgICAgICAgICAob25DbGljayk9XCJoYW5kbGVQaWNrZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvY29sb3Itc3dhdGNoZXMtZ3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9jb2xvci1yYWlzZWQ+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuc3dhdGNoZXMtb3ZlcmZsb3cge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG4gICAgICAuc3dhdGNoZXMtb3ZlcmZsb3cge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgNnB4IDE2cHg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN3YXRjaGVzQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29sb3JXcmFwLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3dhdGNoZXNDb21wb25lbnQpLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3dhdGNoZXNDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMzIwO1xuICAvKiogQ29sb3Igc3F1YXJlcyB0byBkaXNwbGF5ICovXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gMjQwO1xuICAvKiogQW4gYXJyYXkgb2YgY29sb3IgZ3JvdXBzLCBlYWNoIHdpdGggYW4gYXJyYXkgb2YgY29sb3JzICovXG4gIEBJbnB1dCgpXG4gIGNvbG9yczogc3RyaW5nW11bXSA9IFtcbiAgICBbXG4gICAgICByZWRbJzkwMCddLFxuICAgICAgcmVkWyc3MDAnXSxcbiAgICAgIHJlZFsnNTAwJ10sXG4gICAgICByZWRbJzMwMCddLFxuICAgICAgcmVkWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHBpbmtbJzkwMCddLFxuICAgICAgcGlua1snNzAwJ10sXG4gICAgICBwaW5rWyc1MDAnXSxcbiAgICAgIHBpbmtbJzMwMCddLFxuICAgICAgcGlua1snMTAwJ10sXG4gICAgXSxcbiAgICBbXG4gICAgICBwdXJwbGVbJzkwMCddLFxuICAgICAgcHVycGxlWyc3MDAnXSxcbiAgICAgIHB1cnBsZVsnNTAwJ10sXG4gICAgICBwdXJwbGVbJzMwMCddLFxuICAgICAgcHVycGxlWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGRlZXBQdXJwbGVbJzkwMCddLFxuICAgICAgZGVlcFB1cnBsZVsnNzAwJ10sXG4gICAgICBkZWVwUHVycGxlWyc1MDAnXSxcbiAgICAgIGRlZXBQdXJwbGVbJzMwMCddLFxuICAgICAgZGVlcFB1cnBsZVsnMTAwJ10sXG4gICAgXSxcbiAgICBbXG4gICAgICBpbmRpZ29bJzkwMCddLFxuICAgICAgaW5kaWdvWyc3MDAnXSxcbiAgICAgIGluZGlnb1snNTAwJ10sXG4gICAgICBpbmRpZ29bJzMwMCddLFxuICAgICAgaW5kaWdvWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGJsdWVbJzkwMCddLFxuICAgICAgYmx1ZVsnNzAwJ10sXG4gICAgICBibHVlWyc1MDAnXSxcbiAgICAgIGJsdWVbJzMwMCddLFxuICAgICAgYmx1ZVsnMTAwJ10sXG4gICAgXSxcbiAgICBbXG4gICAgICBsaWdodEJsdWVbJzkwMCddLFxuICAgICAgbGlnaHRCbHVlWyc3MDAnXSxcbiAgICAgIGxpZ2h0Qmx1ZVsnNTAwJ10sXG4gICAgICBsaWdodEJsdWVbJzMwMCddLFxuICAgICAgbGlnaHRCbHVlWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGN5YW5bJzkwMCddLFxuICAgICAgY3lhblsnNzAwJ10sXG4gICAgICBjeWFuWyc1MDAnXSxcbiAgICAgIGN5YW5bJzMwMCddLFxuICAgICAgY3lhblsnMTAwJ10sXG4gICAgXSxcbiAgICBbXG4gICAgICB0ZWFsWyc5MDAnXSxcbiAgICAgIHRlYWxbJzcwMCddLFxuICAgICAgdGVhbFsnNTAwJ10sXG4gICAgICB0ZWFsWyczMDAnXSxcbiAgICAgIHRlYWxbJzEwMCddLFxuICAgIF0sXG4gICAgW1xuICAgICAgJyMxOTREMzMnLFxuICAgICAgZ3JlZW5bJzcwMCddLFxuICAgICAgZ3JlZW5bJzUwMCddLFxuICAgICAgZ3JlZW5bJzMwMCddLFxuICAgICAgZ3JlZW5bJzEwMCddLFxuICAgIF0sXG4gICAgW1xuICAgICAgbGlnaHRHcmVlblsnOTAwJ10sXG4gICAgICBsaWdodEdyZWVuWyc3MDAnXSxcbiAgICAgIGxpZ2h0R3JlZW5bJzUwMCddLFxuICAgICAgbGlnaHRHcmVlblsnMzAwJ10sXG4gICAgICBsaWdodEdyZWVuWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGxpbWVbJzkwMCddLFxuICAgICAgbGltZVsnNzAwJ10sXG4gICAgICBsaW1lWyc1MDAnXSxcbiAgICAgIGxpbWVbJzMwMCddLFxuICAgICAgbGltZVsnMTAwJ10sXG4gICAgXSxcbiAgICBbXG4gICAgICB5ZWxsb3dbJzkwMCddLFxuICAgICAgeWVsbG93Wyc3MDAnXSxcbiAgICAgIHllbGxvd1snNTAwJ10sXG4gICAgICB5ZWxsb3dbJzMwMCddLFxuICAgICAgeWVsbG93WycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGFtYmVyWyc5MDAnXSxcbiAgICAgIGFtYmVyWyc3MDAnXSxcbiAgICAgIGFtYmVyWyc1MDAnXSxcbiAgICAgIGFtYmVyWyczMDAnXSxcbiAgICAgIGFtYmVyWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIG9yYW5nZVsnOTAwJ10sXG4gICAgICBvcmFuZ2VbJzcwMCddLFxuICAgICAgb3JhbmdlWyc1MDAnXSxcbiAgICAgIG9yYW5nZVsnMzAwJ10sXG4gICAgICBvcmFuZ2VbJzEwMCddLFxuICAgIF0sXG4gICAgW1xuICAgICAgZGVlcE9yYW5nZVsnOTAwJ10sXG4gICAgICBkZWVwT3JhbmdlWyc3MDAnXSxcbiAgICAgIGRlZXBPcmFuZ2VbJzUwMCddLFxuICAgICAgZGVlcE9yYW5nZVsnMzAwJ10sXG4gICAgICBkZWVwT3JhbmdlWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGJyb3duWyc5MDAnXSxcbiAgICAgIGJyb3duWyc3MDAnXSxcbiAgICAgIGJyb3duWyc1MDAnXSxcbiAgICAgIGJyb3duWyczMDAnXSxcbiAgICAgIGJyb3duWycxMDAnXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIGJsdWVHcmV5Wyc5MDAnXSxcbiAgICAgIGJsdWVHcmV5Wyc3MDAnXSxcbiAgICAgIGJsdWVHcmV5Wyc1MDAnXSxcbiAgICAgIGJsdWVHcmV5WyczMDAnXSxcbiAgICAgIGJsdWVHcmV5WycxMDAnXSxcbiAgICBdLFxuICAgIFsnIzAwMDAwMCcsICcjNTI1MjUyJywgJyM5Njk2OTYnLCAnI0Q5RDlEOScsICcjRkZGRkZGJ10sXG4gIF07XG4gIEBJbnB1dCgpIHpEZXB0aDogekRlcHRoID0gMTtcbiAgQElucHV0KCkgcmFkaXVzID0gMTtcbiAgQElucHV0KCkgYmFja2dyb3VuZCA9ICcjZmZmJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgaGFuZGxlUGlja2VyQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN3YXRjaGVzQ29tcG9uZW50LFxuICAgIFN3YXRjaGVzR3JvdXBDb21wb25lbnQsXG4gICAgU3dhdGNoZXNDb2xvckNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1N3YXRjaGVzQ29tcG9uZW50LCBTd2F0Y2hlc0dyb3VwQ29tcG9uZW50LCBTd2F0Y2hlc0NvbG9yQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3dhdGNoTW9kdWxlLCBSYWlzZWRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclN3YXRjaGVzTW9kdWxlIHt9XG4iXX0=