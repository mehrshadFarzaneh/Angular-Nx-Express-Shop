import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, NgModule, Directive, Output, HostListener, EventEmitter, isDevMode, forwardRef } from '@angular/core';
import { Subject, Subscription, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { TinyColor } from '@ctrl/tinycolor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const checkboardCache = {};
function render(c1, c2, size) {
    if (typeof document === 'undefined') {
        return null;
    }
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    } // If no context can be found, return early.
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c2;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
}
function getCheckerboard(c1, c2, size) {
    const key = `${c1}-${c2}-${size}`;
    if (checkboardCache[key]) {
        return checkboardCache[key];
    }
    const checkboard = render(c1, c2, size);
    if (!checkboard) {
        return null;
    }
    checkboardCache[key] = checkboard;
    return checkboard;
}

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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CheckboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CheckboardComponent],
                    exports: [CheckboardComponent],
                    imports: [CommonModule],
                }]
        }] });

class CoordinatesDirective {
    el;
    coordinatesChange = new Subject();
    mousechange = new Subject();
    mouseListening = false;
    sub;
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.1", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: { coordinatesChange: "coordinatesChange" }, host: { listeners: { "window:mousemove": "mousemove($event,$event.pageX,$event.pageY)", "window:touchmove": "mousemove($event,$event.touches[0].clientX,$event.touches[0].clientY,true)", "window:mouseup": "mouseup()", "window:touchend": "mouseup()", "mousedown": "mousedown($event,$event.pageX,$event.pageY)", "touchstart": "mousedown($event,$event.touches[0].clientX,$event.touches[0].clientY,true)" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngx-color-coordinates]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { coordinatesChange: [{
                type: Output
            }], mousemove: [{
                type: HostListener,
                args: ['window:mousemove', ['$event', '$event.pageX', '$event.pageY']]
            }, {
                type: HostListener,
                args: ['window:touchmove', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY',
                        'true',
                    ]]
            }], mouseup: [{
                type: HostListener,
                args: ['window:mouseup']
            }, {
                type: HostListener,
                args: ['window:touchend']
            }], mousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event', '$event.pageX', '$event.pageY']]
            }, {
                type: HostListener,
                args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY',
                        'true',
                    ]]
            }] } });
class CoordinatesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, declarations: [CoordinatesDirective], exports: [CoordinatesDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CoordinatesDirective],
                    exports: [CoordinatesDirective],
                }]
        }] });

class AlphaComponent {
    hsl;
    rgb;
    pointer;
    shadow;
    radius;
    direction = 'horizontal';
    onChange = new EventEmitter();
    gradient;
    pointerLeft;
    pointerTop;
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: AlphaComponent, selector: "color-alpha", inputs: { hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius", direction: "direction" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".alpha{position:absolute;inset:0}.alpha-checkboard{position:absolute;inset:0;overflow:hidden}.alpha-gradient{position:absolute;inset:0}.alpha-container{position:relative;height:100%;margin:0 3px}.alpha-pointer{position:absolute}.alpha-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: CheckboardComponent, selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }, { kind: "directive", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-alpha', template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".alpha{position:absolute;inset:0}.alpha-checkboard{position:absolute;inset:0;overflow:hidden}.alpha-gradient{position:absolute;inset:0}.alpha-container{position:relative;height:100%;margin:0 3px}.alpha-pointer{position:absolute}.alpha-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], pointer: [{
                type: Input
            }], shadow: [{
                type: Input
            }], radius: [{
                type: Input
            }], direction: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class AlphaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, declarations: [AlphaComponent], imports: [CommonModule, CheckboardModule, CoordinatesModule], exports: [AlphaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, imports: [CommonModule, CheckboardModule, CoordinatesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: AlphaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlphaComponent],
                    exports: [AlphaComponent],
                    imports: [CommonModule, CheckboardModule, CoordinatesModule],
                }]
        }] });

function simpleCheckForValidColor(data) {
    const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    let checked = 0;
    let passed = 0;
    keysToCheck.forEach(letter => {
        if (!data[letter]) {
            return;
        }
        checked += 1;
        if (!isNaN(data[letter])) {
            passed += 1;
        }
        if (letter === 's' || letter === 'l') {
            const percentPatt = /^\d+%$/;
            if (percentPatt.test(data[letter])) {
                passed += 1;
            }
        }
    });
    return checked === passed ? data : false;
}
function toState(data, oldHue, disableAlpha) {
    const color = data.hex ? new TinyColor(data.hex) : new TinyColor(data);
    if (disableAlpha) {
        color.setAlpha(1);
    }
    const hsl = color.toHsl();
    const hsv = color.toHsv();
    const rgb = color.toRgb();
    const hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    const transparent = hex === '000000' && rgb.a === 0;
    return {
        hsl,
        hex: transparent ? 'transparent' : color.toHexString(),
        rgb,
        hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
}
function isValidHex(hex) {
    return new TinyColor(hex).isValid;
}
function getContrastingColor(data) {
    if (!data) {
        return '#fff';
    }
    const col = toState(data);
    if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
    }
    const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
}

var ColorMode;
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorWrapModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ColorWrap],
                    exports: [ColorWrap],
                    imports: [CommonModule],
                }]
        }] });

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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: EditableInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EditableInputComponent],
                    exports: [EditableInputComponent],
                    imports: [CommonModule],
                }]
        }] });

class HueComponent {
    hsl;
    pointer;
    radius;
    shadow;
    hidePointer = false;
    direction = 'horizontal';
    onChange = new EventEmitter();
    left = '0px';
    top = '';
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: HueComponent, selector: "color-hue", inputs: { hsl: "hsl", pointer: "pointer", radius: "radius", shadow: "shadow", hidePointer: "hidePointer", direction: "direction" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".color-hue{position:absolute;inset:0}.color-hue-container{margin:0 2px;position:relative;height:100%}.color-hue-pointer{position:absolute}.color-hue-slider{margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;transform:translate(-2px)}.color-hue-horizontal{background:linear-gradient(to right,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}.color-hue-vertical{background:linear-gradient(to top,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-hue', template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".color-hue{position:absolute;inset:0}.color-hue-container{margin:0 2px;position:relative;height:100%}.color-hue-pointer{position:absolute}.color-hue-slider{margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;transform:translate(-2px)}.color-hue-horizontal{background:linear-gradient(to right,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}.color-hue-vertical{background:linear-gradient(to top,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], pointer: [{
                type: Input
            }], radius: [{
                type: Input
            }], shadow: [{
                type: Input
            }], hidePointer: [{
                type: Input
            }], direction: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class HueModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: HueModule, declarations: [HueComponent], imports: [CommonModule, CoordinatesModule], exports: [HueComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, imports: [CommonModule, CoordinatesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HueComponent],
                    exports: [HueComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });

class RaisedComponent {
    zDepth = 1;
    radius = 1;
    background = '#fff';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: RaisedComponent, selector: "color-raised", inputs: { zDepth: "zDepth", radius: "radius", background: "background" }, ngImport: i0, template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `, isInline: true, styles: [".raised-wrap{position:relative;display:inline-block}.raised-bg{position:absolute;inset:0}.raised-content{position:relative}.zDepth-0{box-shadow:none}.zDepth-1{box-shadow:0 2px 10px #0000001f,0 2px 5px #00000029}.zDepth-2{box-shadow:0 6px 20px #00000030,0 8px 17px #0003}.zDepth-3{box-shadow:0 17px 50px #00000030,0 12px 15px #0000003d}.zDepth-4{box-shadow:0 25px 55px #00000036,0 16px 28px #00000038}.zDepth-5{box-shadow:0 40px 77px #00000038,0 27px 24px #0003}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-raised', template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".raised-wrap{position:relative;display:inline-block}.raised-bg{position:absolute;inset:0}.raised-content{position:relative}.zDepth-0{box-shadow:none}.zDepth-1{box-shadow:0 2px 10px #0000001f,0 2px 5px #00000029}.zDepth-2{box-shadow:0 6px 20px #00000030,0 8px 17px #0003}.zDepth-3{box-shadow:0 17px 50px #00000030,0 12px 15px #0000003d}.zDepth-4{box-shadow:0 25px 55px #00000036,0 16px 28px #00000038}.zDepth-5{box-shadow:0 40px 77px #00000038,0 27px 24px #0003}\n"] }]
        }], propDecorators: { zDepth: [{
                type: Input
            }], radius: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
class RaisedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, declarations: [RaisedComponent], imports: [CommonModule], exports: [RaisedComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: RaisedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [RaisedComponent],
                    exports: [RaisedComponent],
                    imports: [CommonModule],
                }]
        }] });

class SaturationComponent {
    hsl;
    hsv;
    radius;
    pointer;
    circle;
    onChange = new EventEmitter();
    background;
    pointerTop;
    pointerLeft;
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: SaturationComponent, selector: "color-saturation", inputs: { hsl: "hsl", hsv: "hsv", radius: "radius", pointer: "pointer", circle: "circle" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `, isInline: true, styles: [".saturation-white{background:linear-gradient(to right,#fff,rgba(255,255,255,0));position:absolute;inset:0}.saturation-black{background:linear-gradient(to top,#000,rgba(0,0,0,0));position:absolute;inset:0}.color-saturation{position:absolute;inset:0}.saturation-pointer{position:absolute;cursor:default}.saturation-circle{width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006;border-radius:50%;cursor:hand;transform:translate(-2px,-4px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-saturation', template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".saturation-white{background:linear-gradient(to right,#fff,rgba(255,255,255,0));position:absolute;inset:0}.saturation-black{background:linear-gradient(to top,#000,rgba(0,0,0,0));position:absolute;inset:0}.color-saturation{position:absolute;inset:0}.saturation-pointer{position:absolute;cursor:default}.saturation-circle{width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px #0000004d,0 0 1px 2px #0006;border-radius:50%;cursor:hand;transform:translate(-2px,-4px)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], hsv: [{
                type: Input
            }], radius: [{
                type: Input
            }], pointer: [{
                type: Input
            }], circle: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class SaturationModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, declarations: [SaturationComponent], imports: [CommonModule, CoordinatesModule], exports: [SaturationComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, imports: [CommonModule, CoordinatesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SaturationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SaturationComponent],
                    exports: [SaturationComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });

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
  `, isInline: true, styles: [".swatch{outline:none;height:100%;width:100%;cursor:pointer;position:relative}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: CheckboardComponent, selector: "color-checkboard", inputs: ["white", "size", "grey", "boxShadow", "borderRadius"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: SwatchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwatchComponent],
                    exports: [SwatchComponent],
                    imports: [CommonModule, CheckboardModule],
                }]
        }] });

class ShadeComponent {
    hsl;
    rgb;
    pointer;
    shadow;
    radius;
    onChange = new EventEmitter();
    gradient;
    pointerLeft;
    pointerTop;
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new TinyColor(this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: ShadeComponent, selector: "color-shade", inputs: { hsl: "hsl", rgb: "rgb", pointer: "pointer", shadow: "shadow", radius: "radius" }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".shade,.shade-gradient{position:absolute;inset:0}.shade-container{position:relative;height:100%;margin:0 3px}.shade-pointer{position:absolute}.shade-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: ["coordinatesChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-shade', template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, styles: [".shade,.shade-gradient{position:absolute;inset:0}.shade-container{position:relative;height:100%;margin:0 3px}.shade-pointer{position:absolute}.shade-slider{width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px #0009;background:#fff;margin-top:1px;transform:translate(-2px)}\n"] }]
        }], propDecorators: { hsl: [{
                type: Input
            }], rgb: [{
                type: Input
            }], pointer: [{
                type: Input
            }], shadow: [{
                type: Input
            }], radius: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
class ShadeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, declarations: [ShadeComponent], imports: [CommonModule, CoordinatesModule], exports: [ShadeComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, imports: [CommonModule, CoordinatesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ShadeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShadeComponent],
                    exports: [ShadeComponent],
                    imports: [CommonModule, CoordinatesModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorMode, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState };
//# sourceMappingURL=ngx-color.mjs.map
