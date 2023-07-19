import { Color } from './color.interfaces';
export declare function simpleCheckForValidColor(data: any): any;
export declare function toState(data: any, oldHue?: number, disableAlpha?: boolean): Color;
export declare function isValidHex(hex: string): boolean;
export declare function getContrastingColor(data: any): "#fff" | "rgba(0,0,0,0.4)" | "#000";
