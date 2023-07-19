import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SelectOption {
    label: string;
    value: string;
}
export declare class AeSelectComponent implements OnInit, ControlValueAccessor {
    private elRef;
    private r;
    options: SelectOption[];
    isHidden: boolean;
    selectedOption: SelectOption;
    disabled: boolean;
    optionId: number;
    get label(): string;
    opened: boolean;
    get value(): string;
    hidden: string;
    changeEvent: EventEmitter<any>;
    labelButton: ElementRef;
    constructor(elRef: ElementRef, r: Renderer2);
    ngOnInit(): void;
    hide(): void;
    optionSelect(option: SelectOption, event: MouseEvent): void;
    toggleOpen(event: MouseEvent): void;
    onClick($event: MouseEvent): void;
    close(): void;
    get isOpen(): boolean;
    writeValue(value: any): void;
    setValue(value: any): void;
    onChange: any;
    onTouched: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    handleKeyDown($event: KeyboardEvent): void;
    _handleArrowDown($event: any): void;
    _handleArrowUp($event: any): void;
    _handleSpace($event: any): void;
    _handleEnter($event: any): void;
    _handleTab($event: any): void;
    _handleBackspace(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AeSelectComponent, "ae-select", never, { "options": "options"; "isHidden": "hidden"; }, { "changeEvent": "change"; }, never, never>;
}
