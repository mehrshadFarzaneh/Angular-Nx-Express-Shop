import { FileManager } from '../base';
export declare class Virtualization {
    constructor(instance: FileManager);
    private filemanagerInstance;
    private largeIconInstance;
    private itemCount;
    private rowItemCount;
    private items;
    private itemList;
    private scrollPosition;
    private totalHeight;
    private listItemHeight;
    private topElementHeight;
    private bottomElementHeight;
    private renderedCount;
    private lastRowCount;
    private topElement;
    private bottomElement;
    private listDiff;
    /**
     * Sets up UI virtualization for the large icon view.
     */
    setUIVirtualization(): void;
    /**
     * Sets the height of the top and bottom elements that are used for virtualization.
     * These elements are used to give the appearance of an infinitely scrolling list.
     */
    setUlElementHeight(): void;
    /**
     * Calculates the number of items to display in the list based on the available width and height.
     * @param dataSourceLength The length of the data source.
     * @returns The number of items to display.
     */
    private getItemCount;
    /**
     * Wires or un wires the scroll event for the list element.
     * @param destroy - Set `true` to unwire the scroll event.
     */
    wireScrollEvent(destroy: boolean): void;
    /**
     * Handles the scroll event for the list element.
     * This method updates the top and bottom elements and the displayed items based on the scroll position.
     */
    private onVirtualUiScroll;
    /**
     * Calculates the current scroll position of the list element.
     * @param startingHeight The starting height from which to calculate the scroll position.
     * @returns The current scroll position.
     */
    private getscrollerHeight;
    /**
     * This method updates the displayed items and the selection based on the scroll direction.
     * @param listDiff The number of rows to update.
     * @param isScrollingDown If set to true, the scroll direction is downward.
     */
    private onNormalScroll;
    /**
     * Updates the items in the large icons view.
     * @param isScrollingDown If set to true, the scroll direction is downward.
     */
    private updateUI;
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - returns the module name.
     * @private
     */
    private getModuleName;
    /**
     * Destroys the component.
     */
    destroy(): void;
}
