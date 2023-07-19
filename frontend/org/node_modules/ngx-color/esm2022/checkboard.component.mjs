import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { getCheckerboard } from './helpers/checkboard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
class CheckboardComponent {
    white = 'transparent';
    size = 8;
    grey = 'rgba(0,0,0,.08)';
    boxShadow;
    borderRadius;
    gridStyles;
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: CheckboardComponent, selector: "color-checkboard", inputs: { white: "white", size: "size", grey: "grey", boxShadow: "boxShadow", borderRadius: "borderRadius" }, ngImport: i0, template: `<div class="grid" [ngStyle]="gridStyles"></div>`, isInline: true, styles: [".grid{inset:0;position:absolute}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { CheckboardComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-checkboard', template: `<div class="grid" [ngStyle]="gridStyles"></div>`, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".grid{inset:0;position:absolute}\n"] }]
        }], propDecorators: { white: [{
                type: Input
            }], size: [{
                type: Input
            }], grey: [{
                type: Input
            }], boxShadow: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });
class CheckboardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: CheckboardModule, declarations: [CheckboardComponent], imports: [CommonModule], exports: [CheckboardComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardModule, imports: [CommonModule] });
}
export { CheckboardModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CheckboardComponent],
                    exports: [CheckboardComponent],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2NoZWNrYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRXZELE1BaUJhLG1CQUFtQjtJQUNyQixLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ3RCLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxJQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDekIsU0FBUyxDQUFVO0lBQ25CLFlBQVksQ0FBVTtJQUMvQixVQUFVLENBQTBCO0lBRXBDLFFBQVE7UUFDTixNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLE9BQU8sVUFBVSxlQUFlO1NBQzdDLENBQUM7SUFDSixDQUFDO3VHQWZVLG1CQUFtQjsyRkFBbkIsbUJBQW1CLHNLQWZwQixpREFBaUQ7O1NBZWhELG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQWpCL0IsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEIsaURBQWlELHVCQVl0QyxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSzs7QUFhUixNQUthLGdCQUFnQjt1R0FBaEIsZ0JBQWdCO3dHQUFoQixnQkFBZ0IsaUJBdkJoQixtQkFBbUIsYUFxQnBCLFlBQVksYUFyQlgsbUJBQW1CO3dHQXVCbkIsZ0JBQWdCLFlBRmpCLFlBQVk7O1NBRVgsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBOZ01vZHVsZSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0Q2hlY2tlcmJvYXJkIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrYm9hcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1jaGVja2JvYXJkJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZ3JpZFwiIFtuZ1N0eWxlXT1cImdyaWRTdHlsZXNcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gIC5ncmlkIHtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgYCxcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgd2hpdGUgPSAndHJhbnNwYXJlbnQnO1xuICBASW5wdXQoKSBzaXplID0gODtcbiAgQElucHV0KCkgZ3JleSA9ICdyZ2JhKDAsMCwwLC4wOCknO1xuICBASW5wdXQoKSBib3hTaGFkb3chOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1cyE6IHN0cmluZztcbiAgZ3JpZFN0eWxlcyE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGdldENoZWNrZXJib2FyZCh0aGlzLndoaXRlLCB0aGlzLmdyZXksIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5ncmlkU3R5bGVzID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyxcbiAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3csXG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7YmFja2dyb3VuZH0pIGNlbnRlciBsZWZ0YCxcbiAgICB9O1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NoZWNrYm9hcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tib2FyZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JvYXJkTW9kdWxlIHt9XG4iXX0=