import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, isDevMode, NgModule, Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { simpleCheckForValidColor, toState } from './helpers/color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export var ColorMode;
(function (ColorMode) {
    ColorMode["HEX"] = "hex";
    ColorMode["HSL"] = "hsl";
    ColorMode["HSV"] = "hsv";
    ColorMode["RGB"] = "rgb";
})(ColorMode || (ColorMode = {}));
class ColorWrap {
    className;
    /**
     * Descriptors the return color format if the component is used with two-way binding
     */
    mode = ColorMode.HEX;
    color = {
        h: 250,
        s: 0.5,
        l: 0.2,
        a: 1,
    };
    colorChange = new EventEmitter();
    onChange = new EventEmitter();
    onChangeComplete = new EventEmitter();
    onSwatchHover = new EventEmitter();
    oldHue;
    hsl;
    hsv;
    rgb;
    hex;
    source;
    currentColor;
    changes;
    disableAlpha;
    _onChangeCompleteSubscription = new Subscription();
    _onSwatchHoverSubscription = new Subscription();
    ngOnInit() {
        this.changes = this.onChange
            .pipe(debounceTime(100), tap(event => {
            this.onChangeComplete.emit(event);
            switch (this.mode) {
                case ColorMode.HEX:
                    this.colorChange.emit(event.color.hex);
                    break;
                case ColorMode.HSL:
                    this.colorChange.emit(event.color.hsl);
                    break;
                case ColorMode.HSV:
                    this.colorChange.emit(event.color.hsv);
                    break;
                case ColorMode.RGB:
                    this.colorChange.emit(event.color.rgb);
                    break;
                default:
                    const msg = `The mode '${this.mode}' is not supported`;
                    if (isDevMode()) {
                        throw new Error(msg);
                    }
                    else {
                        console.warn(msg);
                    }
                    break;
            }
        }))
            .subscribe();
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    ngOnDestroy() {
        this.changes?.unsubscribe();
        this._onChangeCompleteSubscription?.unsubscribe();
        this._onSwatchHoverSubscription?.unsubscribe();
    }
    setState(data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue, this.disableAlpha);
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
    }
    registerOnChange(fn) {
        this._onChangeCompleteSubscription.add(this.onChangeComplete.pipe(tap(event => fn(event.color.hex))).subscribe());
    }
    registerOnTouched(fn) {
        this._onSwatchHoverSubscription.add(this.onSwatchHover.pipe(tap(() => fn())).subscribe());
    }
    setDisabledState(isDisabled) { }
    writeValue(hex) {
        this.color = hex;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrap, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ColorWrap, selector: "color-wrap", inputs: { className: "className", mode: "mode", color: "color" }, outputs: { colorChange: "colorChange", onChange: "onChange", onChangeComplete: "onChangeComplete", onSwatchHover: "onSwatchHover" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ColorWrap),
                multi: true,
            }
        ], usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
}
export { ColorWrap };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrap, decorators: [{
            type: Component,
            args: [{
                    // create seletor base for test override property
                    selector: 'color-wrap',
                    template: ``,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ColorWrap),
                            multi: true,
                        }
                    ]
                }]
        }], propDecorators: { className: [{
                type: Input
            }], mode: [{
                type: Input
            }], color: [{
                type: Input
            }], colorChange: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onChangeComplete: [{
                type: Output
            }], onSwatchHover: [{
                type: Output
            }] } });
class ColorWrapModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorWrapModule, declarations: [ColorWrap], imports: [CommonModule], exports: [ColorWrap] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrapModule, imports: [CommonModule] });
}
export { ColorWrapModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrapModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ColorWrap],
                    exports: [ColorWrap],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd3JhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2NvbG9yLXdyYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBSVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU96RSxNQUFNLENBQU4sSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ25CLHdCQUFXLENBQUE7SUFDWCx3QkFBVyxDQUFBO0lBQ1gsd0JBQVcsQ0FBQTtJQUNYLHdCQUFXLENBQUE7QUFDYixDQUFDLEVBTFcsU0FBUyxLQUFULFNBQVMsUUFLcEI7QUFFRCxNQVlhLFNBQVM7SUFDWCxTQUFTLENBQVU7SUFFNUI7O09BRUc7SUFDTSxJQUFJLEdBQWMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUVoQyxLQUFLLEdBQWdDO1FBQzVDLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDO0tBQ0wsQ0FBQztJQUNRLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztJQUM5RCxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUMxQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ2xELGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ3pELE1BQU0sQ0FBVTtJQUNoQixHQUFHLENBQVE7SUFDWCxHQUFHLENBQVE7SUFDWCxHQUFHLENBQVE7SUFDWCxHQUFHLENBQVU7SUFDYixNQUFNLENBQVU7SUFDaEIsWUFBWSxDQUFVO0lBQ3RCLE9BQU8sQ0FBZ0I7SUFDdkIsWUFBWSxDQUFXO0lBRWYsNkJBQTZCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNuRCwwQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXhELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3pCLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLFNBQVMsQ0FBQyxHQUFHO29CQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUNSLEtBQUssU0FBUyxDQUFDLEdBQUc7b0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxTQUFTLENBQUMsR0FBRztvQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLFNBQVMsQ0FBQyxHQUFHO29CQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sR0FBRyxHQUFHLGFBQWEsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUM7b0JBQ3ZELElBQUksU0FBUyxFQUFFLEVBQUU7d0JBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdEI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbkI7b0JBQ0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDRCxRQUFRLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU07UUFDdkIsTUFBTSxZQUFZLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxrREFBa0Q7SUFDbEQsZ0JBQWdCLEtBQUksQ0FBQztJQUVyQixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUM1QixNQUFNLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF5QjtRQUN4QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2xDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDaEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQixJQUFTLENBQUM7SUFFOUMsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzt1R0F2SFUsU0FBUzsyRkFBVCxTQUFTLDRPQVJUO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwrQ0FQUyxFQUFFOztTQVNELFNBQVM7MkZBQVQsU0FBUztrQkFackIsU0FBUzttQkFBQztvQkFDVCxpREFBaUQ7b0JBQ2pELFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsRUFBRTtvQkFDWixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFVSxTQUFTO3NCQUFqQixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNOztBQTBHVCxNQUthLGVBQWU7dUdBQWYsZUFBZTt3R0FBZixlQUFlLGlCQWhJZixTQUFTLGFBOEhWLFlBQVksYUE5SFgsU0FBUzt3R0FnSVQsZUFBZSxZQUZoQixZQUFZOztTQUVYLGVBQWU7MkZBQWYsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDcEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgTmdNb2R1bGUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHNpbXBsZUNoZWNrRm9yVmFsaWRDb2xvciwgdG9TdGF0ZSB9IGZyb20gJy4vaGVscGVycy9jb2xvcic7XG5pbXBvcnQgeyBDb2xvciwgSFNMQSwgSFNWQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvckV2ZW50IHtcbiAgJGV2ZW50OiBFdmVudDtcbiAgY29sb3I6IENvbG9yO1xufVxuXG5leHBvcnQgZW51bSBDb2xvck1vZGUge1xuICBIRVggPSAnaGV4JyxcbiAgSFNMID0gJ2hzbCcsXG4gIEhTViA9ICdoc3YnLFxuICBSR0IgPSAncmdiJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gY3JlYXRlIHNlbGV0b3IgYmFzZSBmb3IgdGVzdCBvdmVycmlkZSBwcm9wZXJ0eVxuICBzZWxlY3RvcjogJ2NvbG9yLXdyYXAnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29sb3JXcmFwKSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldyYXAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRvcnMgdGhlIHJldHVybiBjb2xvciBmb3JtYXQgaWYgdGhlIGNvbXBvbmVudCBpcyB1c2VkIHdpdGggdHdvLXdheSBiaW5kaW5nXG4gICAqL1xuICBASW5wdXQoKSBtb2RlOiBDb2xvck1vZGUgPSBDb2xvck1vZGUuSEVYO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBIU0xBIHwgSFNWQSB8IFJHQkEgfCBzdHJpbmcgPSB7XG4gICAgaDogMjUwLFxuICAgIHM6IDAuNSxcbiAgICBsOiAwLjIsXG4gICAgYTogMSxcbiAgfTtcbiAgQE91dHB1dCgpIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxIU0xBIHwgSFNWQSB8IFJHQkEgfCBzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sb3JFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPENvbG9yRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xvckV2ZW50PigpO1xuICBvbGRIdWUhOiBudW1iZXI7XG4gIGhzbCE6IEhTTEE7XG4gIGhzdiE6IEhTVkE7XG4gIHJnYiE6IFJHQkE7XG4gIGhleCE6IHN0cmluZztcbiAgc291cmNlITogc3RyaW5nO1xuICBjdXJyZW50Q29sb3IhOiBzdHJpbmc7XG4gIGNoYW5nZXM/OiBTdWJzY3JpcHRpb247XG4gIGRpc2FibGVBbHBoYT86IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2VDb21wbGV0ZVN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBfb25Td2F0Y2hIb3ZlclN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZXMgPSB0aGlzLm9uQ2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNvbXBsZXRlLmVtaXQoZXZlbnQpO1xuICAgICAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIENvbG9yTW9kZS5IRVg6XG4gICAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChldmVudC5jb2xvci5oZXgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29sb3JNb2RlLkhTTDpcbiAgICAgICAgICAgICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGV2ZW50LmNvbG9yLmhzbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb2xvck1vZGUuSFNWOlxuICAgICAgICAgICAgICB0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoZXZlbnQuY29sb3IuaHN2KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbG9yTW9kZS5SR0I6XG4gICAgICAgICAgICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChldmVudC5jb2xvci5yZ2IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBUaGUgbW9kZSAnJHt0aGlzLm1vZGV9JyBpcyBub3Qgc3VwcG9ydGVkYDtcbiAgICAgICAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUodG9TdGF0ZSh0aGlzLmNvbG9yLCAwKSk7XG4gICAgdGhpcy5jdXJyZW50Q29sb3IgPSB0aGlzLmhleDtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRvU3RhdGUodGhpcy5jb2xvciwgdGhpcy5vbGRIdWUpKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoYW5nZXM/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fb25DaGFuZ2VDb21wbGV0ZVN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9vblN3YXRjaEhvdmVyU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG4gIHNldFN0YXRlKGRhdGEpIHtcbiAgICB0aGlzLm9sZEh1ZSA9IGRhdGEub2xkSHVlO1xuICAgIHRoaXMuaHNsID0gZGF0YS5oc2w7XG4gICAgdGhpcy5oc3YgPSBkYXRhLmhzdjtcbiAgICB0aGlzLnJnYiA9IGRhdGEucmdiO1xuICAgIHRoaXMuaGV4ID0gZGF0YS5oZXg7XG4gICAgdGhpcy5zb3VyY2UgPSBkYXRhLnNvdXJjZTtcbiAgICB0aGlzLmFmdGVyVmFsaWRDaGFuZ2UoKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KSB7XG4gICAgY29uc3QgaXNWYWxpZENvbG9yID0gc2ltcGxlQ2hlY2tGb3JWYWxpZENvbG9yKGRhdGEpO1xuICAgIGlmIChpc1ZhbGlkQ29sb3IpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gdG9TdGF0ZShkYXRhLCBkYXRhLmggfHwgdGhpcy5vbGRIdWUsIHRoaXMuZGlzYWJsZUFscGhhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoY29sb3IpO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgY29sb3IsICRldmVudCB9KTtcbiAgICAgIHRoaXMuYWZ0ZXJWYWxpZENoYW5nZSgpO1xuICAgIH1cbiAgfVxuICAvKiogaG9vayBmb3IgY29tcG9uZW50cyBhZnRlciBhIGNvbXBsZXRlIGNoYW5nZSAqL1xuICBhZnRlclZhbGlkQ2hhbmdlKCkge31cblxuICBoYW5kbGVTd2F0Y2hIb3ZlcihkYXRhLCAkZXZlbnQpIHtcbiAgICBjb25zdCBpc1ZhbGlkQ29sb3IgPSBzaW1wbGVDaGVja0ZvclZhbGlkQ29sb3IoZGF0YSk7XG4gICAgaWYgKGlzVmFsaWRDb2xvcikge1xuICAgICAgY29uc3QgY29sb3IgPSB0b1N0YXRlKGRhdGEsIGRhdGEuaCB8fCB0aGlzLm9sZEh1ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKGNvbG9yKTtcbiAgICAgIHRoaXMub25Td2F0Y2hIb3Zlci5lbWl0KHsgY29sb3IsICRldmVudCB9KTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoaGV4OiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZUNvbXBsZXRlU3Vic2NyaXB0aW9uLmFkZCh0aGlzLm9uQ2hhbmdlQ29tcGxldGUucGlwZShcbiAgICAgIHRhcChldmVudCA9PiBmbihldmVudC5jb2xvci5oZXgpKSxcbiAgICApLnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Td2F0Y2hIb3ZlclN1YnNjcmlwdGlvbi5hZGQodGhpcy5vblN3YXRjaEhvdmVyLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gZm4oKSksXG4gICAgKS5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgd3JpdGVWYWx1ZShoZXg6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSBoZXg7XG4gIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb2xvcldyYXBdLFxuICBleHBvcnRzOiBbQ29sb3JXcmFwXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yV3JhcE1vZHVsZSB7fVxuIl19