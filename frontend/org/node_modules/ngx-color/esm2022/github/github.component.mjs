import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, isValidHex, SwatchModule } from 'ngx-color';
import { GithubSwatchComponent } from './github-swatch.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
class GithubComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 212;
    /** Color squares to display */
    colors = [
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#008B02',
        '#006B76',
        '#1273DE',
        '#004DCF',
        '#5300EB',
        '#EB9694',
        '#FAD0C3',
        '#FEF3BD',
        '#C1E1C5',
        '#BEDADC',
        '#C4DEF6',
        '#BED3F3',
        '#D4C4FB',
    ];
    triangle = 'top-left';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: GithubComponent, selector: "color-github", inputs: { width: "width", colors: "colors", triangle: "triangle" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => GithubComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => GithubComponent),
            },
        ], usesInheritance: true, ngImport: i0, template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `, isInline: true, styles: [".github-picker{background:rgb(255,255,255);border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;position:relative;padding:5px;display:flex;flex-wrap:wrap;box-sizing:border-box}.triangleShadow{position:absolute;border-width:8px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.15);border-image:initial}.triangle{position:absolute;border-width:7px;border-style:solid;border-color:transparent transparent rgb(255,255,255);border-image:initial}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-14px;left:10px}.top-left-triangle>.triangleShadow{top:-16px;left:9px}.top-right-triangle>.triangle{top:-14px;right:10px}.top-right-triangle>.triangleShadow{top:-16px;right:9px}.bottom-right-triangle>.triangle{top:35px;right:10px;transform:rotate(180deg)}.bottom-right-triangle>.triangleShadow{top:37px;right:9px;transform:rotate(180deg)}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i0.forwardRef(function () { return GithubSwatchComponent; }), selector: "color-github-swatch", inputs: ["color"], outputs: ["onClick", "onSwatchHover"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { GithubComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: GithubComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-github', template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => GithubComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => GithubComponent),
                        },
                    ], styles: [".github-picker{background:rgb(255,255,255);border:1px solid rgba(0,0,0,.2);box-shadow:#00000026 0 3px 12px;border-radius:4px;position:relative;padding:5px;display:flex;flex-wrap:wrap;box-sizing:border-box}.triangleShadow{position:absolute;border-width:8px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.15);border-image:initial}.triangle{position:absolute;border-width:7px;border-style:solid;border-color:transparent transparent rgb(255,255,255);border-image:initial}.hide-triangle>.triangle{display:none}.hide-triangle>.triangleShadow{display:none}.top-left-triangle>.triangle{top:-14px;left:10px}.top-left-triangle>.triangleShadow{top:-16px;left:9px}.top-right-triangle>.triangle{top:-14px;right:10px}.top-right-triangle>.triangleShadow{top:-16px;right:9px}.bottom-right-triangle>.triangle{top:35px;right:10px;transform:rotate(180deg)}.bottom-right-triangle>.triangleShadow{top:37px;right:9px;transform:rotate(180deg)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], colors: [{
                type: Input
            }], triangle: [{
                type: Input
            }] } });
class ColorGithubModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, declarations: [GithubComponent, GithubSwatchComponent], imports: [CommonModule, SwatchModule], exports: [GithubComponent, GithubSwatchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, imports: [CommonModule, SwatchModule] });
}
export { ColorGithubModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorGithubModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GithubComponent, GithubSwatchComponent],
                    exports: [GithubComponent, GithubSwatchComponent],
                    imports: [CommonModule, SwatchModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2l0aHViL2dpdGh1Yi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkQsTUEwRmEsZUFBZ0IsU0FBUSxTQUFTO0lBQzVDLG1DQUFtQztJQUMxQixLQUFLLEdBQW9CLEdBQUcsQ0FBQztJQUN0QywrQkFBK0I7SUFDdEIsTUFBTSxHQUFHO1FBQ2hCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7S0FDVixDQUFDO0lBQ08sUUFBUSxHQUF1RCxVQUFVLENBQUM7SUFFbkY7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQWtDO1FBQy9ELElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO3VHQW5DVSxlQUFlOzJGQUFmLGVBQWUsMkdBWmY7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMvQztTQUNGLGlEQXRGUzs7Ozs7Ozs7Ozs7O0dBWVQsZ3NDQW1IK0IscUJBQXFCOztTQXZDMUMsZUFBZTsyRkFBZixlQUFlO2tCQTFGM0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7Ozs7Ozs7Ozs7OztHQVlULG1CQThEZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7eUJBQy9DO3FCQUNGOzBFQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBa0JHLFFBQVE7c0JBQWhCLEtBQUs7O0FBZ0JSLE1BS2EsaUJBQWlCO3VHQUFqQixpQkFBaUI7d0dBQWpCLGlCQUFpQixpQkEzQ2pCLGVBQWUsRUF1Q00scUJBQXFCLGFBRTNDLFlBQVksRUFBRSxZQUFZLGFBekN6QixlQUFlLEVBd0NDLHFCQUFxQjt3R0FHckMsaUJBQWlCLFlBRmxCLFlBQVksRUFBRSxZQUFZOztTQUV6QixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbG9yV3JhcCwgaXNWYWxpZEhleCwgU3dhdGNoTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IEdpdGh1YlN3YXRjaENvbXBvbmVudCB9IGZyb20gJy4vZ2l0aHViLXN3YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLWdpdGh1YicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJnaXRodWItcGlja2VyIHt7IHRyaWFuZ2xlIH19LXRyaWFuZ2xlIHt7IGNsYXNzTmFtZSB9fVwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJ0cmlhbmdsZVNoYWRvd1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0cmlhbmdsZVwiPjwvZGl2PlxuICAgIDxjb2xvci1naXRodWItc3dhdGNoICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIlxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgIChvbkNsaWNrKT1cImhhbmRsZUJsb2NrQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG9uU3dhdGNoSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxuICAgID48L2NvbG9yLWdpdGh1Yi1zd2F0Y2g+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gIC5naXRodWItcGlja2VyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDNweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLnRyaWFuZ2xlU2hhZG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICB9XG4gIC50cmlhbmdsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci13aWR0aDogN3B4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICB9XG4gIC5oaWRlLXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlLXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50b3AtbGVmdC10cmlhbmdsZSA+IC50cmlhbmdsZSB7XG4gICAgdG9wOiAtMTRweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIC50b3AtbGVmdC10cmlhbmdsZSA+IC50cmlhbmdsZVNoYWRvdyB7XG4gICAgdG9wOiAtMTZweDtcbiAgICBsZWZ0OiA5cHg7XG4gIH1cbiAgLnRvcC1yaWdodC10cmlhbmdsZSA+IC50cmlhbmdsZSB7XG4gICAgdG9wOiAtMTRweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAudG9wLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcbiAgICB0b3A6IC0xNnB4O1xuICAgIHJpZ2h0OiA5cHg7XG4gIH1cbiAgLmJvdHRvbS1yaWdodC10cmlhbmdsZSA+IC50cmlhbmdsZSB7XG4gICAgdG9wOiAzNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgLmJvdHRvbS1yaWdodC10cmlhbmdsZSA+IC50cmlhbmdsZVNoYWRvdyB7XG4gICAgdG9wOiAzN3B4O1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gR2l0aHViQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29sb3JXcmFwLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gR2l0aHViQ29tcG9uZW50KSxcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdpdGh1YkNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMTI7XG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjQjgwMDAwJyxcbiAgICAnI0RCM0UwMCcsXG4gICAgJyNGQ0NCMDAnLFxuICAgICcjMDA4QjAyJyxcbiAgICAnIzAwNkI3NicsXG4gICAgJyMxMjczREUnLFxuICAgICcjMDA0RENGJyxcbiAgICAnIzUzMDBFQicsXG4gICAgJyNFQjk2OTQnLFxuICAgICcjRkFEMEMzJyxcbiAgICAnI0ZFRjNCRCcsXG4gICAgJyNDMUUxQzUnLFxuICAgICcjQkVEQURDJyxcbiAgICAnI0M0REVGNicsXG4gICAgJyNCRUQzRjMnLFxuICAgICcjRDRDNEZCJyxcbiAgXTtcbiAgQElucHV0KCkgdHJpYW5nbGU6ICdoaWRlJyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tcmlnaHQnID0gJ3RvcC1sZWZ0JztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9OiB7IGhleDogc3RyaW5nLCAkZXZlbnQ6IEV2ZW50IH0pIHtcbiAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7IGhleCwgc291cmNlOiAnaGV4JyB9LCAkZXZlbnQpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHaXRodWJDb21wb25lbnQsIEdpdGh1YlN3YXRjaENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHaXRodWJDb21wb25lbnQsIEdpdGh1YlN3YXRjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN3YXRjaE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yR2l0aHViTW9kdWxlIHt9XG4iXX0=