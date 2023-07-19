import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class EditableInputComponent implements OnInit, OnChanges, OnDestroy {
    style: {
        wrap?: Record<string, any>;
        input?: Record<string, any>;
        label?: Record<string, any>;
    };
    label: string;
    value: string | number;
    arrowOffset: number;
    dragLabel: boolean;
    dragMax: number;
    placeholder: string;
    onChange: EventEmitter<any>;
    currentValue: string | number;
    blurValue: string;
    wrapStyle: Record<string, string>;
    inputStyle: Record<string, string>;
    labelStyle: Record<string, string>;
    focus: boolean;
    mousemove: Subscription;
    mouseup: Subscription;
    uniqueId: string;
    ngOnInit(): void;
    handleFocus($event: any): void;
    handleFocusOut($event: any): void;
    handleKeydown($event: any): void;
    handleKeyup($event: any): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    subscribe(): void;
    unsubscribe(): void;
    handleMousedown($event: Event): void;
    handleDrag($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditableInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditableInputComponent, "color-editable-input", never, { "style": { "alias": "style"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "arrowOffset": { "alias": "arrowOffset"; "required": false; }; "dragLabel": { "alias": "dragLabel"; "required": false; }; "dragMax": { "alias": "dragMax"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
export declare class EditableInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EditableInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EditableInputModule, [typeof EditableInputComponent], [typeof i1.CommonModule], [typeof EditableInputComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EditableInputModule>;
}
