import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./checkboard.component";
class SwatchComponent {
    color;
    style = {};
    focusStyle = {};
    focus;
    onClick = new EventEmitter();
    onHover = new EventEmitter();
    divStyles = {};
    focusStyles = {};
    inFocus = false;
    ngOnInit() {
        this.divStyles = {
            background: this.color,
            ...this.style,
        };
    }
    currentStyles() {
        this.focusStyles = {
            ...this.divStyles,
            ...this.focusStyle,
        };
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SwatchComponent, selector: "color-swatch", inputs: { color: "color", style: "style", focusStyle: "focusStyle", focus: "focus" }, outputs: { onClick: "onClick", onHover: "onHover" }, ngImport: i0, template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `, isInline: true, styles: [".swatch{outline:none;height:100%;width:100%;cursor:pointer;position:relative}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.CheckboardComponent, selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { SwatchComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-swatch', template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".swatch{outline:none;height:100%;width:100%;cursor:pointer;position:relative}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], style: [{
                type: Input
            }], focusStyle: [{
                type: Input
            }], focus: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onHover: [{
                type: Output
            }] } });
class SwatchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: SwatchModule, declarations: [SwatchComponent], imports: [CommonModule, CheckboardModule], exports: [SwatchComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchModule, imports: [CommonModule, CheckboardModule] });
}
export { SwatchModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwatchComponent],
                    exports: [SwatchComponent],
                    imports: [CommonModule, CheckboardModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRTFELE1Ba0NhLGVBQWU7SUFDakIsS0FBSyxDQUFVO0lBQ2YsS0FBSyxHQUEyQixFQUFFLENBQUM7SUFDbkMsVUFBVSxHQUEyQixFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFXO0lBQ2YsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDbEMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDNUMsU0FBUyxHQUEyQixFQUFFLENBQUM7SUFDdkMsV0FBVyxHQUEyQixFQUFFLENBQUM7SUFDekMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBZTtZQUNoQyxHQUFHLElBQUksQ0FBQyxLQUFLO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixHQUFHLElBQUksQ0FBQyxTQUFTO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLFVBQVU7U0FDbkIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQVcsRUFBRSxNQUFNO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELFdBQVcsQ0FBQyxHQUFXLEVBQUUsTUFBTTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7dUdBbkNVLGVBQWU7MkZBQWYsZUFBZSwrTEFoQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7O1NBY1UsZUFBZTsyRkFBZixlQUFlO2tCQWxDM0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVCxtQkFZZ0IsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07O0FBZ0NULE1BS2EsWUFBWTt1R0FBWixZQUFZO3dHQUFaLFlBQVksaUJBM0NaLGVBQWUsYUF5Q2hCLFlBQVksRUFBRSxnQkFBZ0IsYUF6QzdCLGVBQWU7d0dBMkNmLFlBQVksWUFGYixZQUFZLEVBQUUsZ0JBQWdCOztTQUU3QixZQUFZOzJGQUFaLFlBQVk7a0JBTHhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tib2FyZE1vZHVsZSB9IGZyb20gJy4vY2hlY2tib2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1zd2F0Y2gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwic3dhdGNoXCJcbiAgICAgIFtuZ1N0eWxlXT1cImN1cnJlbnRTdHlsZXMoKVwiXG4gICAgICBbYXR0ci50aXRsZV09XCJjb2xvclwiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soY29sb3IsICRldmVudClcIlxuICAgICAgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlQ2xpY2soY29sb3IsICRldmVudClcIlxuICAgICAgKGZvY3VzKT1cImhhbmRsZUZvY3VzKClcIlxuICAgICAgKGJsdXIpPVwiaGFuZGxlRm9jdXNPdXQoKVwiXG4gICAgICAobW91c2VvdmVyKT1cImhhbmRsZUhvdmVyKGNvbG9yLCAkZXZlbnQpXCJcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPGNvbG9yLWNoZWNrYm9hcmRcbiAgICAgICAgKm5nSWY9XCJjb2xvciA9PT0gJ3RyYW5zcGFyZW50J1wiXG4gICAgICAgIGJveFNoYWRvdz1cImluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMSlcIlxuICAgICAgPjwvY29sb3ItY2hlY2tib2FyZD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnN3YXRjaCB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTd2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvciE6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgQElucHV0KCkgZm9jdXNTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBASW5wdXQoKSBmb2N1cyE6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGRpdlN0eWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBmb2N1c1N0eWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBpbkZvY3VzID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXZTdHlsZXMgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmNvbG9yIGFzIHN0cmluZyxcbiAgICAgIC4uLnRoaXMuc3R5bGUsXG4gICAgfTtcbiAgfVxuICBjdXJyZW50U3R5bGVzKCkge1xuICAgIHRoaXMuZm9jdXNTdHlsZXMgPSB7XG4gICAgICAuLi50aGlzLmRpdlN0eWxlcyxcbiAgICAgIC4uLnRoaXMuZm9jdXNTdHlsZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmZvY3VzIHx8IHRoaXMuaW5Gb2N1cyA/IHRoaXMuZm9jdXNTdHlsZXMgOiB0aGlzLmRpdlN0eWxlcztcbiAgfVxuICBoYW5kbGVGb2N1c091dCgpIHtcbiAgICB0aGlzLmluRm9jdXMgPSBmYWxzZTtcbiAgfVxuICBoYW5kbGVGb2N1cygpIHtcbiAgICB0aGlzLmluRm9jdXMgPSB0cnVlO1xuICB9XG4gIGhhbmRsZUhvdmVyKGhleDogc3RyaW5nLCAkZXZlbnQpIHtcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGhleCwgJGV2ZW50IH0pO1xuICB9XG4gIGhhbmRsZUNsaWNrKGhleDogc3RyaW5nLCAkZXZlbnQpIHtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7IGhleCwgJGV2ZW50IH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N3YXRjaENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTd2F0Y2hDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3dhdGNoTW9kdWxlIHt9XG4iXX0=