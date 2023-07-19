import { Browser, remove, EventHandler, isUndefined, closest, classList } from '@syncfusion/ej2-base';
import { parentsUntil, isGroupAdaptive } from '../base/util';
import * as events from '../base/constant';
import * as literals from '../base/string-literals';
/**
 * The `Clipboard` module is used to handle clipboard copy action.
 */
var Clipboard = /** @class */ (function () {
    /**
     * Constructor for the Grid clipboard module
     *
     * @param {IGrid} parent - specifies the IGrid
     * @param {ServiceLocator} serviceLocator - specifies the serviceLocator
     * @hidden
     */
    function Clipboard(parent, serviceLocator) {
        this.copyContent = '';
        this.isSelect = false;
        this.parent = parent;
        this.serviceLocator = serviceLocator;
        this.addEventListener();
    }
    /**
     * @returns {void}
     * @hidden
     */
    Clipboard.prototype.addEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.on(events.contentReady, this.initialEnd, this);
        this.parent.on(events.keyPressed, this.keyDownHandler, this);
        this.parent.on(events.click, this.clickHandler, this);
        this.parent.on(events.onEmpty, this.initialEnd, this);
        EventHandler.add(this.parent.element, 'keydown', this.pasteHandler, this);
    };
    /**
     * @returns {void}
     * @hidden
     */
    Clipboard.prototype.removeEventListener = function () {
        if (this.parent.isDestroyed) {
            return;
        }
        this.parent.off(events.keyPressed, this.keyDownHandler);
        this.parent.off(events.contentReady, this.initialEnd);
        this.parent.off(events.click, this.clickHandler);
        this.parent.off(events.onEmpty, this.initialEnd);
        EventHandler.remove(this.parent.element, 'keydown', this.pasteHandler);
    };
    Clipboard.prototype.clickHandler = function (e) {
        var target = e.target;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        target = parentsUntil(target, 'e-rowcell');
    };
    Clipboard.prototype.pasteHandler = function (e) {
        var _this = this;
        var grid = this.parent;
        var isMacLike = /(Mac)/i.test(navigator.platform);
        if (e.keyCode === 67 && isMacLike && e.metaKey && !grid.isEdit) {
            this.copy();
        }
        if (e.keyCode === 86 && (e.ctrlKey || (isMacLike && e.metaKey)) && !grid.isEdit) {
            var target = closest(document.activeElement, '.' + literals.rowCell);
            if (!target || !grid.editSettings.allowEditing || grid.editSettings.mode !== 'Batch' ||
                grid.selectionSettings.mode !== 'Cell' || grid.selectionSettings.cellSelectionMode === 'Flow' || !this.clipBoardTextArea) {
                return;
            }
            this.activeElement = document.activeElement;
            this.clipBoardTextArea.value = '';
            var x_1 = window.scrollX;
            var y_1 = window.scrollY;
            this.clipBoardTextArea.focus();
            setTimeout(function () {
                _this.activeElement.focus();
                window.scrollTo(x_1, y_1);
                _this.paste(_this.clipBoardTextArea.value, _this.parent.getSelectedRowCellIndexes()[0].rowIndex, _this.parent.getSelectedRowCellIndexes()[0].cellIndexes[0]);
            }, 10);
        }
    };
    /**
     * Paste data from clipboard to selected cells.
     *
     * @param {boolean} data - Specifies the date for paste.
     * @param {boolean} rowIndex - Specifies the row index.
     * @param {boolean} colIndex - Specifies the column index.
     * @returns {void}
     */
    Clipboard.prototype.paste = function (data, rowIndex, colIndex) {
        var grid = this.parent;
        var cIdx = colIndex;
        var rIdx = rowIndex;
        var col;
        var value;
        var isAvail;
        if (!grid.editSettings.allowEditing || grid.editSettings.mode !== 'Batch' ||
            grid.selectionSettings.mode !== 'Cell' || grid.selectionSettings.cellSelectionMode === 'Flow') {
            return;
        }
        var rows = data.split('\n');
        var cols;
        var dataRows = grid.getDataRows();
        var mRows;
        var frRows;
        var isFrozen = this.parent.isFrozenGrid();
        if (isFrozen) {
            mRows = grid.getMovableDataRows();
            if (grid.getFrozenRightColumnsCount()) {
                frRows = grid.getFrozenRightDataRows();
            }
        }
        for (var r = 0; r < rows.length; r++) {
            cols = rows[parseInt(r.toString(), 10)].split('\t');
            cIdx = colIndex;
            if ((r === rows.length - 1 && rows[parseInt(r.toString(), 10)] === '') || isUndefined(grid.getRowByIndex(rIdx))) {
                cIdx++;
                break;
            }
            for (var c = 0; c < cols.length; c++) {
                isAvail = grid.getCellFromIndex(rIdx, cIdx);
                if (isFrozen) {
                    var fTr = dataRows[parseInt(rIdx.toString(), 10)];
                    var mTr = mRows[parseInt(rIdx.toString(), 10)];
                    isAvail = !fTr.querySelector('[data-colindex="' + cIdx + '"]') ?
                        mTr.querySelector('[data-colindex="' + cIdx + '"]') : true;
                    if (frRows && !isAvail) {
                        var frTr = frRows[parseInt(rIdx.toString(), 10)];
                        isAvail = frTr.querySelector('[data-colindex="' + cIdx + '"]');
                    }
                }
                if (!isAvail) {
                    cIdx++;
                    break;
                }
                col = grid.getColumnByIndex(cIdx);
                value = col.getParser() ? col.getParser()(cols[parseInt(c.toString(), 10)]) : cols[parseInt(c.toString(), 10)];
                if (col.allowEditing && !col.isPrimaryKey && !col.template) {
                    var args = {
                        column: col,
                        data: value,
                        rowIndex: rIdx
                    };
                    this.parent.trigger(events.beforePaste, args);
                    rIdx = args.rowIndex;
                    if (!args.cancel) {
                        if (grid.editModule) {
                            if (col.type === 'number') {
                                this.parent.editModule.updateCell(rIdx, col.field, parseFloat(args.data));
                            }
                            else {
                                grid.editModule.updateCell(rIdx, col.field, args.data);
                            }
                        }
                    }
                }
                cIdx++;
            }
            rIdx++;
        }
        grid.selectionModule.selectCellsByRange({ rowIndex: rowIndex, cellIndex: colIndex }, { rowIndex: rIdx - 1, cellIndex: cIdx - 1 });
        var cell = this.parent.getCellFromIndex(rIdx - 1, cIdx - 1);
        if (cell) {
            classList(cell, ['e-focus', 'e-focused'], []);
        }
    };
    Clipboard.prototype.initialEnd = function () {
        this.l10n = this.serviceLocator.getService('localization');
        this.parent.off(events.contentReady, this.initialEnd);
        this.clipBoardTextArea = this.parent.createElement('textarea', {
            className: 'e-clipboard',
            styles: 'opacity: 0',
            attrs: { tabindex: '-1', 'aria-label': this.l10n.getConstant('ClipBoard') }
        });
        this.parent.element.appendChild(this.clipBoardTextArea);
    };
    Clipboard.prototype.keyDownHandler = function (e) {
        if (e.action === 'ctrlPlusC') {
            this.copy();
        }
        else if (e.action === 'ctrlShiftPlusH') {
            this.copy(true);
        }
    };
    Clipboard.prototype.setCopyData = function (withHeader) {
        if (window.getSelection().toString() === '') {
            var isFrozen = this.parent.isFrozenGrid();
            this.clipBoardTextArea.value = this.copyContent = '';
            var mRows = void 0;
            var frRows = void 0;
            var rows = this.parent.getDataRows();
            if (isFrozen) {
                mRows = this.parent.getMovableDataRows();
                if (this.parent.getFrozenMode() === literals.leftRight || this.parent.getFrozenMode() === 'Right') {
                    frRows = this.parent.getFrozenRightRows();
                }
            }
            if (this.parent.selectionSettings.mode !== 'Cell') {
                var selectedIndexes = this.parent.getSelectedRowIndexes().sort(function (a, b) { return a - b; });
                if (withHeader) {
                    var headerTextArray = [];
                    for (var i = 0; i < this.parent.getVisibleColumns().length; i++) {
                        headerTextArray[parseInt(i.toString(), 10)] = this.parent
                            .getVisibleColumns()[parseInt(i.toString(), 10)].headerText;
                    }
                    this.getCopyData(headerTextArray, false, '\t', withHeader);
                    this.copyContent += '\n';
                }
                for (var i = 0; i < selectedIndexes.length; i++) {
                    if (i > 0) {
                        this.copyContent += '\n';
                    }
                    var leftCols = [];
                    var rightCols = [];
                    var movableCols = [];
                    if (isFrozen) {
                        movableCols.push.apply(movableCols, [].slice.call(mRows[selectedIndexes[parseInt(i.toString(), 10)]].
                            querySelectorAll('.e-rowcell:not(.e-hide)')));
                        if (this.parent.getFrozenMode() === 'Right' || this.parent.getFrozenMode() === literals.leftRight) {
                            rightCols.push.apply(rightCols, [].slice.call(frRows[selectedIndexes[parseInt(i.toString(), 10)]].
                                querySelectorAll('.e-rowcell:not(.e-hide)')));
                        }
                        if (this.parent.getFrozenMode() === 'Left' || this.parent.getFrozenMode() === literals.leftRight ||
                            (this.parent.isFrozenGrid() && !this.parent.getFrozenMode())) {
                            leftCols.push.apply(leftCols, [].slice.call(rows[selectedIndexes[parseInt(i.toString(), 10)]].
                                querySelectorAll('.e-rowcell:not(.e-hide)')));
                        }
                    }
                    else {
                        var idx = selectedIndexes[parseInt(i.toString(), 10)];
                        if (!isGroupAdaptive(this.parent) && (this.parent.enableVirtualization ||
                            (this.parent.enableInfiniteScrolling && this.parent.infiniteScrollSettings.enableCache) ||
                            (this.parent.groupSettings.columns.length && this.parent.groupSettings.enableLazyLoading))) {
                            idx = rows.map(function (m) { return m.getAttribute('data-rowindex'); }).indexOf(selectedIndexes[parseInt(i.toString(), 10)].toString());
                        }
                        leftCols.push.apply(leftCols, [].slice.call(rows[parseInt(idx.toString(), 10)].querySelectorAll('.e-rowcell:not(.e-hide)')));
                    }
                    var cells = leftCols.concat(movableCols).concat(rightCols);
                    this.getCopyData(cells, false, '\t', withHeader);
                }
            }
            else {
                var obj = this.checkBoxSelection();
                if (obj.status) {
                    if (withHeader) {
                        var headers = [];
                        for (var i = 0; i < obj.colIndexes.length; i++) {
                            headers.push(this.parent.getColumnHeaderByIndex(obj.colIndexes[parseInt(i.toString(), 10)]));
                        }
                        this.getCopyData(headers, false, '\t', withHeader);
                        this.copyContent += '\n';
                    }
                    for (var i = 0; i < obj.rowIndexes.length; i++) {
                        if (i > 0) {
                            this.copyContent += '\n';
                        }
                        var cells = [].slice.call(rows[obj.rowIndexes[parseInt(i.toString(), 10)]].
                            getElementsByClassName('e-cellselectionbackground'));
                        if (isFrozen) {
                            cells.push.apply(cells, [].slice.call(mRows[obj.rowIndexes[parseInt(i.toString(), 10)]]
                                .getElementsByClassName('e-cellselectionbackground')));
                            if (frRows) {
                                cells.push.apply(cells, [].slice.call(frRows[obj.rowIndexes[parseInt(i.toString(), 10)]]
                                    .getElementsByClassName('e-cellselectionbackground')));
                            }
                        }
                        this.getCopyData(cells, false, '\t', withHeader);
                    }
                }
                else {
                    this.getCopyData([].slice.call(this.parent.element.getElementsByClassName('e-cellselectionbackground')), true, '\n', withHeader);
                }
            }
            var args = {
                data: this.copyContent,
                cancel: false
            };
            this.parent.trigger(events.beforeCopy, args);
            if (args.cancel) {
                return;
            }
            this.clipBoardTextArea.value = this.copyContent = args.data;
            if (!Browser.userAgent.match(/ipad|ipod|iphone/i)) {
                this.clipBoardTextArea.select();
            }
            else {
                this.clipBoardTextArea.setSelectionRange(0, this.clipBoardTextArea.value.length);
            }
            this.isSelect = true;
        }
    };
    Clipboard.prototype.getCopyData = function (cells, isCell, splitKey, withHeader) {
        var isElement = typeof cells[0] !== 'string';
        for (var j = 0; j < cells.length; j++) {
            if (withHeader && isCell) {
                var colIdx = parseInt(cells[parseInt(j.toString(), 10)].getAttribute(literals.dataColIndex), 10);
                this.copyContent += this.parent.getColumns()[parseInt(colIdx.toString(), 10)].headerText + '\n';
            }
            if (isElement) {
                if (!cells[parseInt(j.toString(), 10)].classList.contains('e-hide')) {
                    this.copyContent += cells[parseInt(j.toString(), 10)].innerText;
                }
            }
            else {
                this.copyContent += cells[parseInt(j.toString(), 10)];
            }
            if (j < cells.length - 1) {
                this.copyContent += splitKey;
            }
        }
    };
    /**
     * Copy selected rows or cells data into clipboard.
     *
     * @returns {void}
     * @param {boolean} withHeader - Specifies whether the column header data need to be copied or not.
     */
    Clipboard.prototype.copy = function (withHeader) {
        if (document.queryCommandSupported('copy') && this.clipBoardTextArea) {
            this.setCopyData(withHeader);
            document.execCommand('copy');
            this.clipBoardTextArea.blur();
        }
        if (this.isSelect) {
            window.getSelection().removeAllRanges();
            this.isSelect = false;
        }
    };
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} returns the module name
     * @private
     */
    Clipboard.prototype.getModuleName = function () {
        return 'clipboard';
    };
    /**
     * To destroy the clipboard
     *
     * @returns {void}
     * @hidden
     */
    Clipboard.prototype.destroy = function () {
        this.removeEventListener();
        if (this.clipBoardTextArea) {
            remove(this.clipBoardTextArea);
        }
    };
    Clipboard.prototype.checkBoxSelection = function () {
        var gridObj = this.parent;
        var obj = { status: false };
        if (gridObj.selectionSettings.mode === 'Cell') {
            var rowCellIndxes = gridObj.getSelectedRowCellIndexes();
            var str = void 0;
            var rowIndexes = [];
            var i = void 0;
            for (i = 0; i < rowCellIndxes.length; i++) {
                if (rowCellIndxes[parseInt(i.toString(), 10)].cellIndexes.length) {
                    rowIndexes.push(rowCellIndxes[parseInt(i.toString(), 10)].rowIndex);
                }
                if (rowCellIndxes[parseInt(i.toString(), 10)].cellIndexes.length) {
                    if (!str) {
                        str = JSON.stringify(rowCellIndxes[parseInt(i.toString(), 10)].cellIndexes.sort());
                    }
                    if (str !== JSON.stringify(rowCellIndxes[parseInt(i.toString(), 10)].cellIndexes.sort())) {
                        break;
                    }
                }
            }
            rowIndexes.sort(function (a, b) { return a - b; });
            if (i === rowCellIndxes.length) {
                obj = { status: true, rowIndexes: rowIndexes, colIndexes: rowCellIndxes[0].cellIndexes };
            }
        }
        return obj;
    };
    return Clipboard;
}());
export { Clipboard };
