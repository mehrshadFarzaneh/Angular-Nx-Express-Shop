import { EditorManager } from './../base/editor-manager';
import { IHtmlItem } from './../base/interface';
/**
 * Video internal component
 *
 * @hidden

 */
export declare class VideoCommand {
    private parent;
    /**
     * Constructor for creating the Video plugin
     *
     * @param {EditorManager} parent - specifies the parent element
     * @hidden

     */
    constructor(parent: EditorManager);
    private addEventListener;
    /**
     * videoCommand method
     *
     * @param {IHtmlItem} e - specifies the element
     * @returns {void}
     * @hidden

     */
    videoCommand(e: IHtmlItem): void;
    private createVideo;
    private editAreaVideoClick;
    private setStyle;
    private videoDimension;
    private callBack;
}
