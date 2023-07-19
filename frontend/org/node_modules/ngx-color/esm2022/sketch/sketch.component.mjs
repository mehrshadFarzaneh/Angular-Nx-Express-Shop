import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, isValidHex, SaturationModule, SwatchModule, } from 'ngx-color';
import { SketchFieldsComponent } from './sketch-fields.component';
import { SketchPresetColorsComponent } from './sketch-preset-colors.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color";
class SketchComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha = false;
    /** Hex strings for default colors at bottom of picker */
    presetColors = [
        '#D0021B',
        '#F5A623',
        '#F8E71C',
        '#8B572A',
        '#7ED321',
        '#417505',
        '#BD10E0',
        '#9013FE',
        '#4A90E2',
        '#50E3C2',
        '#B8E986',
        '#000000',
        '#4A4A4A',
        '#9B9B9B',
        '#FFFFFF',
    ];
    /** Width of picker */
    width = 200;
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
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SketchComponent, selector: "color-sketch", inputs: { disableAlpha: "disableAlpha", presetColors: "presetColors", width: "width" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SketchComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => SketchComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="sketch-picker {{ className }}" [style.width.px]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `, isInline: true, styles: [".sketch-picker{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container,.sketch-swatches-container{display:block}.sketch-controls{display:flex}.sketch-sliders{padding:4px 0;flex:1 1 0%}.sketch-hue{position:relative;height:10px;overflow:hidden}.sketch-alpha{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}:host-context([dir=rtl]) .sketch-color{margin-right:4px;margin-left:0}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i0.forwardRef(function () { return i2.AlphaComponent; }), selector: "color-alpha", inputs: ["hsl", "rgb", "pointer", "shadow", "radius", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.CheckboardComponent; }), selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "component", type: i0.forwardRef(function () { return i2.HueComponent; }), selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return i2.SaturationComponent; }), selector: "color-saturation", inputs: ["hsl", "hsv", "radius", "pointer", "circle"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return SketchFieldsComponent; }), selector: "color-sketch-fields", inputs: ["hsl", "rgb", "hex", "disableAlpha"], outputs: ["onChange"] }, { kind: "component", type: i0.forwardRef(function () { return SketchPresetColorsComponent; }), selector: "color-sketch-preset-colors", inputs: ["colors"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SketchComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SketchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-sketch', template: `
  <div class="sketch-picker {{ className }}" [style.width.px]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SketchComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => SketchComponent),
                        },
                    ], styles: [".sketch-picker{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container,.sketch-swatches-container{display:block}.sketch-controls{display:flex}.sketch-sliders{padding:4px 0;flex:1 1 0%}.sketch-hue{position:relative;height:10px;overflow:hidden}.sketch-alpha{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}:host-context([dir=rtl]) .sketch-color{margin-right:4px;margin-left:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disableAlpha: [{
                type: Input
            }], presetColors: [{
                type: Input
            }], width: [{
                type: Input
            }] } });
class ColorSketchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, declarations: [SketchComponent, SketchFieldsComponent,
            SketchPresetColorsComponent], imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule,
            SwatchModule], exports: [SketchComponent, SketchFieldsComponent,
            SketchPresetColorsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, imports: [CommonModule,
            AlphaModule,
            CheckboardModule,
            EditableInputModule,
            HueModule,
            SaturationModule,
            SwatchModule] });
}
export { ColorSketchModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorSketchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SketchComponent,
                        SketchFieldsComponent,
                        SketchPresetColorsComponent,
                    ],
                    exports: [
                        SketchComponent,
                        SketchFieldsComponent,
                        SketchPresetColorsComponent,
                    ],
                    imports: [
                        CommonModule,
                        AlphaModule,
                        CheckboardModule,
                        EditableInputModule,
                        HueModule,
                        SaturationModule,
                        SwatchModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2tldGNoL3NrZXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULG1CQUFtQixFQUNuQixTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixZQUFZLEdBQ2IsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFbkQsTUEwSGEsZUFBZ0IsU0FBUSxTQUFTO0lBQzVDLGtEQUFrRDtJQUN6QyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLHlEQUF5RDtJQUNoRCxZQUFZLEdBQUc7UUFDdEIsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO0tBQ1YsQ0FBQztJQUNGLHNCQUFzQjtJQUNiLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsZ0JBQWdCLENBQVU7SUFDMUI7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxNQUFNLEtBQUssR0FB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aEIsWUFBWTtxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWxwaGFNb2R1bGUsXG4gIENoZWNrYm9hcmRNb2R1bGUsXG4gIENvbG9yV3JhcCxcbiAgRWRpdGFibGVJbnB1dE1vZHVsZSxcbiAgSHVlTW9kdWxlLFxuICBpc1ZhbGlkSGV4LFxuICBTYXR1cmF0aW9uTW9kdWxlLFxuICBTd2F0Y2hNb2R1bGUsXG59IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBTa2V0Y2hGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL3NrZXRjaC1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNrZXRjaFByZXNldENvbG9yc0NvbXBvbmVudCB9IGZyb20gJy4vc2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwic2tldGNoLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIiBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNhdHVyYXRpb25cIj5cbiAgICAgIDxjb2xvci1zYXR1cmF0aW9uIFtoc2xdPVwiaHNsXCIgW2hzdl09XCJoc3ZcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L2NvbG9yLXNhdHVyYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1jb250cm9sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zbGlkZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtaHVlXCI+XG4gICAgICAgICAgPGNvbG9yLWh1ZSBbaHNsXT1cImhzbFwiXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvY29sb3ItaHVlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1hbHBoYVwiICpuZ0lmPVwiZGlzYWJsZUFscGhhID09PSBmYWxzZVwiPlxuICAgICAgICAgIDxjb2xvci1hbHBoYVxuICAgICAgICAgICAgW3JhZGl1c109XCIyXCIgW3JnYl09XCJyZ2JcIiBbaHNsXT1cImhzbFwiXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvY29sb3ItYWxwaGE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWNvbG9yXCI+XG4gICAgICAgIDxjb2xvci1jaGVja2JvYXJkPjwvY29sb3ItY2hlY2tib2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1hY3RpdmVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJhY3RpdmVCYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgIDxjb2xvci1za2V0Y2gtZmllbGRzXG4gICAgICAgIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIiBbaGV4XT1cImhleFwiXG4gICAgICAgIFtkaXNhYmxlQWxwaGFdPVwiZGlzYWJsZUFscGhhXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvY29sb3Itc2tldGNoLWZpZWxkcz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXN3YXRjaGVzLWNvbnRhaW5lclwiICpuZ0lmPVwicHJlc2V0Q29sb3JzICYmIHByZXNldENvbG9ycy5sZW5ndGhcIj5cbiAgICAgIDxjb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9yc1xuICAgICAgICBbY29sb3JzXT1cInByZXNldENvbG9yc1wiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUJsb2NrQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAob25Td2F0Y2hIb3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9ycz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAuc2tldGNoLXBpY2tlciB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggM3B4O1xuICAgICAgYm94LXNpemluZzogaW5pdGlhbDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLCAwIDhweCAxNnB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICB9XG4gICAgLnNrZXRjaC1zYXR1cmF0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDc1JTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5za2V0Y2gtZmllbGRzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNrZXRjaC1zd2F0Y2hlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5za2V0Y2gtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnNrZXRjaC1zbGlkZXJzIHtcbiAgICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgZmxleDogMSAxIDAlO1xuICAgIH1cbiAgICAuc2tldGNoLWh1ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuc2tldGNoLWFscGhhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5za2V0Y2gtY29sb3Ige1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuc2tldGNoLWFjdGl2ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwcHggNHB4IGluc2V0O1xuICAgIH1cbiAgICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNrZXRjaC1jb2xvciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNrZXRjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNrZXRjaENvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTa2V0Y2hDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xuICAvKiogUmVtb3ZlIGFscGhhIHNsaWRlciBhbmQgb3B0aW9ucyBmcm9tIHBpY2tlciAqL1xuICBASW5wdXQoKSBkaXNhYmxlQWxwaGEgPSBmYWxzZTtcbiAgLyoqIEhleCBzdHJpbmdzIGZvciBkZWZhdWx0IGNvbG9ycyBhdCBib3R0b20gb2YgcGlja2VyICovXG4gIEBJbnB1dCgpIHByZXNldENvbG9ycyA9IFtcbiAgICAnI0QwMDIxQicsXG4gICAgJyNGNUE2MjMnLFxuICAgICcjRjhFNzFDJyxcbiAgICAnIzhCNTcyQScsXG4gICAgJyM3RUQzMjEnLFxuICAgICcjNDE3NTA1JyxcbiAgICAnI0JEMTBFMCcsXG4gICAgJyM5MDEzRkUnLFxuICAgICcjNEE5MEUyJyxcbiAgICAnIzUwRTNDMicsXG4gICAgJyNCOEU5ODYnLFxuICAgICcjMDAwMDAwJyxcbiAgICAnIzRBNEE0QScsXG4gICAgJyM5QjlCOUInLFxuICAgICcjRkZGRkZGJyxcbiAgXTtcbiAgLyoqIFdpZHRoIG9mIHBpY2tlciAqL1xuICBASW5wdXQoKSB3aWR0aCA9IDIwMDtcbiAgYWN0aXZlQmFja2dyb3VuZCE6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBhZnRlclZhbGlkQ2hhbmdlKCkge1xuICAgIGNvbnN0IGFscGhhID0gdGhpcy5kaXNhYmxlQWxwaGEgPyAxIDogdGhpcy5yZ2IuYTtcbiAgICB0aGlzLmFjdGl2ZUJhY2tncm91bmQgPSBgcmdiYSgke3RoaXMucmdiLnJ9LCAke3RoaXMucmdiLmd9LCAke3RoaXMucmdiLmJ9LCAke2FscGhhfSlgO1xuICB9XG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xuICB9XG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcbiAgICAgIC8vIHRoaXMuaGV4ID0gaGV4O1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICBoZXgsXG4gICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgfSxcbiAgICAgICAgJGV2ZW50LFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2tldGNoQ29tcG9uZW50LFxuICAgIFNrZXRjaEZpZWxkc0NvbXBvbmVudCxcbiAgICBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTa2V0Y2hDb21wb25lbnQsXG4gICAgU2tldGNoRmllbGRzQ29tcG9uZW50LFxuICAgIFNrZXRjaFByZXNldENvbG9yc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBBbHBoYU1vZHVsZSxcbiAgICBDaGVja2JvYXJkTW9kdWxlLFxuICAgIEVkaXRhYmxlSW5wdXRNb2R1bGUsXG4gICAgSHVlTW9kdWxlLFxuICAgIFNhdHVyYXRpb25Nb2R1bGUsXG4gICAgU3dhdGNoTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclNrZXRjaE1vZHVsZSB7fVxuIl19