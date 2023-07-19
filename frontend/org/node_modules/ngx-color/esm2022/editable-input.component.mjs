import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let nextUniqueId = 0;
class EditableInputComponent {
    style;
    label;
    value;
    arrowOffset;
    dragLabel;
    dragMax;
    placeholder = '';
    onChange = new EventEmitter();
    currentValue;
    blurValue;
    wrapStyle;
    inputStyle;
    labelStyle;
    focus = false;
    mousemove;
    mouseup;
    uniqueId = `editableInput-${++nextUniqueId}`;
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (isNaN(num)) {
            return;
        }
        const amount = this.arrowOffset || 1;
        // Up
        if ($event.keyCode === 38) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num + amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num + amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num + amount}%`;
            }
            else {
                this.currentValue = num + amount;
            }
        }
        // Down
        if ($event.keyCode === 40) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num - amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num - amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num - amount}%`;
            }
            else {
                this.currentValue = num - amount;
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (`${this.currentValue}` === $event.target.value) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = fromEvent(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = fromEvent(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        this.mousemove?.unsubscribe();
        this.mouseup?.unsubscribe();
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: EditableInputComponent, selector: "color-editable-input", inputs: { style: "style", label: "label", value: "value", arrowOffset: "arrowOffset", dragLabel: "dragLabel", dragMax: "dragMax", placeholder: "placeholder" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="wrap" [ngStyle]="wrapStyle">
      <input
        [ngStyle]="inputStyle"
        spellCheck="false"
        [value]="currentValue"
        [placeholder]="placeholder"
        (keydown)="handleKeydown($event)"
        (keyup)="handleKeyup($event)"
        (focus)="handleFocus($event)"
        (focusout)="handleFocusOut($event)"
        [attr.aria-labelledby]="uniqueId"
      />
      <span [id]="uniqueId" *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
        {{ label }}
      </span>
    </div>
  `, isInline: true, styles: [":host{display:flex}.wrap{position:relative}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
export { EditableInputComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-editable-input', template: `
    <div class="wrap" [ngStyle]="wrapStyle">
      <input
        [ngStyle]="inputStyle"
        spellCheck="false"
        [value]="currentValue"
        [placeholder]="placeholder"
        (keydown)="handleKeydown($event)"
        (keyup)="handleKeyup($event)"
        (focus)="handleFocus($event)"
        (focusout)="handleFocusOut($event)"
        [attr.aria-labelledby]="uniqueId"
      />
      <span [id]="uniqueId" *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
        {{ label }}
      </span>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex}.wrap{position:relative}\n"] }]
        }], propDecorators: { style: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], arrowOffset: [{
                type: Input
            }], dragLabel: [{
                type: Input
            }], dragMax: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class EditableInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: EditableInputModule, declarations: [EditableInputComponent], imports: [CommonModule], exports: [EditableInputComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputModule, imports: [CommonModule] });
}
export { EditableInputModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EditableInputComponent],
                    exports: [EditableInputComponent],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9lZGl0YWJsZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUlSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7O0FBRS9DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUVyQixNQWdDYSxzQkFBc0I7SUFDeEIsS0FBSyxDQUlaO0lBQ08sS0FBSyxDQUFVO0lBQ2YsS0FBSyxDQUFtQjtJQUN4QixXQUFXLENBQVU7SUFDckIsU0FBUyxDQUFXO0lBQ3BCLE9BQU8sQ0FBVTtJQUNqQixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3hDLFlBQVksQ0FBbUI7SUFDL0IsU0FBUyxDQUFVO0lBQ25CLFNBQVMsQ0FBMEI7SUFDbkMsVUFBVSxDQUEwQjtJQUNwQyxVQUFVLENBQTBCO0lBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDZCxTQUFTLENBQWdCO0lBQ3pCLE9BQU8sQ0FBZ0I7SUFDdkIsUUFBUSxHQUFXLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDO0lBRXJELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMs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Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7O1NBYVUsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBaENsQyxTQUFTOytCQUNFLHNCQUFzQixZQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQsbUJBV2dCLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNOztBQStIVCxNQUthLG1CQUFtQjt1R0FBbkIsbUJBQW1CO3dHQUFuQixtQkFBbUIsaUJBaEpuQixzQkFBc0IsYUE4SXZCLFlBQVksYUE5SVgsc0JBQXNCO3dHQWdKdEIsbUJBQW1CLFlBRnBCLFlBQVk7O1NBRVgsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItZWRpdGFibGUtaW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCIgW25nU3R5bGVdPVwid3JhcFN0eWxlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW25nU3R5bGVdPVwiaW5wdXRTdHlsZVwiXG4gICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgIFt2YWx1ZV09XCJjdXJyZW50VmFsdWVcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAoa2V5ZG93bik9XCJoYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgICAoa2V5dXApPVwiaGFuZGxlS2V5dXAoJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJoYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKGZvY3Vzb3V0KT1cImhhbmRsZUZvY3VzT3V0KCRldmVudClcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwidW5pcXVlSWRcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIFtpZF09XCJ1bmlxdWVJZFwiICpuZ0lmPVwibGFiZWxcIiBbbmdTdHlsZV09XCJsYWJlbFN0eWxlXCIgKG1vdXNlZG93bik9XCJoYW5kbGVNb3VzZWRvd24oJGV2ZW50KVwiPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAud3JhcCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdGFibGVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzdHlsZSE6IHtcbiAgICB3cmFwPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICBpbnB1dD86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgbGFiZWw/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9O1xuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGFycm93T2Zmc2V0ITogbnVtYmVyO1xuICBASW5wdXQoKSBkcmFnTGFiZWwhOiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnTWF4ITogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGN1cnJlbnRWYWx1ZSE6IHN0cmluZyB8IG51bWJlcjtcbiAgYmx1clZhbHVlITogc3RyaW5nO1xuICB3cmFwU3R5bGUhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBpbnB1dFN0eWxlITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgbGFiZWxTdHlsZSE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGZvY3VzID0gZmFsc2U7XG4gIG1vdXNlbW92ZSE6IFN1YnNjcmlwdGlvbjtcbiAgbW91c2V1cCE6IFN1YnNjcmlwdGlvbjtcbiAgdW5pcXVlSWQ6IHN0cmluZyA9IGBlZGl0YWJsZUlucHV0LSR7KytuZXh0VW5pcXVlSWR9YDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndyYXBTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS53cmFwID8gdGhpcy5zdHlsZS53cmFwIDoge307XG4gICAgdGhpcy5pbnB1dFN0eWxlID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmlucHV0ID8gdGhpcy5zdHlsZS5pbnB1dCA6IHt9O1xuICAgIHRoaXMubGFiZWxTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5sYWJlbCA/IHRoaXMuc3R5bGUubGFiZWwgOiB7fTtcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWxTdHlsZS5jdXJzb3IgPSAnZXctcmVzaXplJztcbiAgICB9XG4gIH1cbiAgaGFuZGxlRm9jdXMoJGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gIH1cbiAgaGFuZGxlRm9jdXNPdXQoJGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5ibHVyVmFsdWU7XG4gIH1cbiAgaGFuZGxlS2V5ZG93bigkZXZlbnQpIHtcbiAgICAvLyBJbiBjYXNlIGBlLnRhcmdldC52YWx1ZWAgaXMgYSBwZXJjZW50YWdlIHJlbW92ZSB0aGUgYCVgIGNoYXJhY3RlclxuICAgIC8vIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgd2l0aCBhIHBlcmNlbnRhZ2VcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2FzZXNhbmRiZXJnL3JlYWN0LWNvbG9yL2lzc3Vlcy8zODNcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZygkZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBpc1BlcmNlbnRhZ2UgPSBzdHJpbmdWYWx1ZS5pbmRleE9mKCclJykgPiAtMTtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyaW5nVmFsdWUucmVwbGFjZSgvJS9nLCAnJykpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuYXJyb3dPZmZzZXQgfHwgMTtcblxuICAgIC8vIFVwXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLmxhYmVsXTogbnVtICsgYW1vdW50IH0sXG4gICAgICAgICAgJGV2ZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6IG51bSArIGFtb3VudCwgJGV2ZW50IH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQZXJjZW50YWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gYCR7bnVtICsgYW1vdW50fSVgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudW0gKyBhbW91bnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG93blxuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5sYWJlbF06IG51bSAtIGFtb3VudCB9LFxuICAgICAgICAgICRldmVudCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiBudW0gLSBhbW91bnQsICRldmVudCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGVyY2VudGFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGAke251bSAtIGFtb3VudH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVtIC0gYW1vdW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoYW5kbGVLZXl1cCgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDQwIHx8ICRldmVudC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYCR7dGhpcy5jdXJyZW50VmFsdWV9YCA9PT0gJGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICBkYXRhOiB7IFt0aGlzLmxhYmVsXTogJGV2ZW50LnRhcmdldC52YWx1ZSB9LFxuICAgICAgICAkZXZlbnQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogJGV2ZW50LnRhcmdldC52YWx1ZSwgJGV2ZW50IH0pO1xuICAgIH1cbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuZm9jdXMpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLmJsdXJWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXJWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMubW91c2Vtb3ZlID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChldjogRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZyhldikpO1xuICAgIHRoaXMubW91c2V1cCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuICB1bnN1YnNjcmliZSgpIHtcbiAgICB0aGlzLm1vdXNlbW92ZT8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm1vdXNldXA/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5oYW5kbGVEcmFnKCRldmVudCk7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVEcmFnKCRldmVudCkge1xuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKHRoaXMudmFsdWUgKyAkZXZlbnQubW92ZW1lbnRYKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDw9IHRoaXMuZHJhZ01heCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiB7IFt0aGlzLmxhYmVsXTogbmV3VmFsdWUgfSwgJGV2ZW50IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFZGl0YWJsZUlucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0VkaXRhYmxlSW5wdXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdGFibGVJbnB1dE1vZHVsZSB7fVxuIl19