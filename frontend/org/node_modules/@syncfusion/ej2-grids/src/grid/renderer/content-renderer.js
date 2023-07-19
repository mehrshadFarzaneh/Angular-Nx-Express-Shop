import { Droppable } from '@syncfusion/ej2-base';
import { isNullOrUndefined, extend } from '@syncfusion/ej2-base';
import { setStyleAttribute, remove, updateBlazorTemplate } from '@syncfusion/ej2-base';
import { getUpdateUsingRaf, appendChildren, setDisplayValue, clearReactVueTemplates } from '../base/util';
import * as events from '../base/constant';
import { RowRenderer } from './row-renderer';
import { CellMergeRender } from './cell-merge-renderer';
import { RowModelGenerator } from '../services/row-model-generator';
import { GroupModelGenerator } from '../services/group-model-generator';
import { isGroupAdaptive } from '../base/util';
import * as literals from '../base/string-literals';
// eslint-disable-next-line valid-jsdoc
/**
 * Content module is used to render grid content
 *
 * @hidden
 */
var ContentRender = /** @class */ (function () {
    /**
     * Constructor for content renderer module
     *
     * @param {IGrid} parent - specifies the Igrid
     * @param {ServiceLocator} serviceLocator - specifies the service locator
     */
    function ContentRender(parent, serviceLocator) {
        var _this = this;
        this.rows = [];
        this.freezeRows = [];
        this.movableRows = [];
        this.freezeRowElements = [];
        /** @hidden */
        this.currentInfo = {};
        /** @hidden */
        this.prevCurrentView = [];
        this.isLoaded = true;
        this.viewColIndexes = [];
        this.drop = function (e) {
            _this.parent.notify(events.columnDrop, { target: e.target, droppedElement: e.droppedElement });
            remove(e.droppedElement);
        };
        this.infiniteCache = {};
        this.isRemove = false;
        /** @hidden */
        this.visibleRows = [];
        this.visibleFrozenRows = [];
        this.rightFreezeRows = [];
        this.isAddRows = false;
        this.isInfiniteFreeze = false;
        this.useGroupCache = false;
        /** @hidden */
        this.tempFreezeRows = [];
        this.rafCallback = function (args) {
            var arg = args;
            return function () {
                if (_this.parent.isFrozenGrid() && (_this.parent.enableVirtualization || _this.parent.enableInfiniteScrolling)) {
                    var tableName = args.tableName;
                    _this.isLoaded = _this.parent.getFrozenMode() === literals.leftRight ? tableName === 'frozen-right' : tableName === 'movable';
                    if (_this.parent.enableColumnVirtualization && args.requestType === 'virtualscroll' && _this.isLoaded) {
                        var mHdr = [].slice.call(_this.parent.getMovableVirtualHeader().getElementsByClassName(literals.row));
                        var fHdr = [].slice.call(_this.parent.getFrozenVirtualHeader().getElementsByClassName(literals.row));
                        _this.isLoaded = mHdr.length === fHdr.length;
                    }
                }
                _this.ariaService.setBusy(_this.getPanel().querySelector('.' + literals.content), false);
                if (_this.parent.isDestroyed) {
                    return;
                }
                var rows = _this.rows.slice(0);
                if (_this.parent.enableInfiniteScrolling) {
                    if (_this.parent.groupSettings.enableLazyLoading) {
                        for (var i = 0; i < _this.visibleRows.length; i++) {
                            _this.setRowsInLazyGroup(_this.visibleRows[parseInt(i.toString(), 10)], i);
                        }
                    }
                    rows = _this.parent.getRowsObject();
                    var prevPage = arg.prevPage;
                    if (_this.parent.infiniteScrollSettings.enableCache && prevPage) {
                        var maxBlock = _this.parent.infiniteScrollSettings.maxBlocks;
                        rows = [];
                        var rowIdx = (parseInt(_this.rowElements[0].getAttribute('data-rowindex'), 10) + 1);
                        var startIdx = Math.ceil(rowIdx / _this.parent.pageSettings.pageSize);
                        for (var i = 0, count = startIdx; i < maxBlock; i++, count++) {
                            if (_this.infiniteCache[parseInt(count.toString(), 10)]) {
                                rows = rows.concat(_this.infiniteCache[parseInt(count.toString(), 10)]);
                            }
                        }
                    }
                }
                if (_this.parent.isFrozenGrid()) {
                    rows = args.isFrozen ? _this.freezeRows : args.renderFrozenRightContent ? _this.parent.getFrozenRightRowsObject()
                        : _this.movableRows;
                }
                _this.parent.notify(events.contentReady, { rows: rows, args: arg });
                if (_this.parent.autoFit) {
                    _this.parent.preventAdjustColumns();
                }
                if (!_this.parent.isInitialLoad) {
                    _this.parent.focusModule.setFirstFocusableTabIndex();
                }
                if (_this.isLoaded) {
                    _this.parent.isManualRefresh = false;
                    if (_this.parent.enableInfiniteScrolling && _this.parent.groupSettings.enableLazyLoading && args.requestType === 'sorting') {
                        _this.parent.infiniteScrollModule['groupCaptionAction'] = undefined;
                    }
                    var isReactChild = _this.parent.parentDetails && _this.parent.parentDetails.parentInstObj &&
                        _this.parent.parentDetails.parentInstObj.isReact;
                    if ((_this.parent.isReact || isReactChild) && _this.parent.element.querySelectorAll('.e-templatecell').length) {
                        // eslint-disable-next-line @typescript-eslint/no-this-alias
                        var thisRef_1 = _this;
                        thisRef_1.parent.renderTemplates(function () {
                            thisRef_1.parent.trigger(events.dataBound, {}, function () {
                                if (thisRef_1.parent.allowTextWrap) {
                                    thisRef_1.parent.notify(events.freezeRender, { case: 'textwrap' });
                                }
                            });
                        });
                    }
                    else {
                        _this.parent.trigger(events.dataBound, {}, function () {
                            if (_this.parent.allowTextWrap) {
                                _this.parent.notify(events.freezeRender, { case: 'textwrap' });
                            }
                        });
                    }
                    if (_this.parent.allowTextWrap && _this.parent.height === 'auto') {
                        if (_this.parent.getContentTable().scrollHeight > _this.parent.getContent().clientHeight) {
                            _this.parent.scrollModule.setPadding();
                        }
                        else {
                            _this.parent.scrollModule.removePadding();
                        }
                    }
                }
                if (arg) {
                    var action = (arg.requestType || '').toLowerCase() + '-complete';
                    _this.parent.notify(action, arg);
                    if (args.requestType === 'batchsave') {
                        args.cancel = false;
                        _this.parent.trigger(events.actionComplete, args);
                    }
                }
                if (_this.isLoaded) {
                    _this.parent.hideSpinner();
                }
            };
        };
        this.parent = parent;
        this.serviceLocator = serviceLocator;
        this.ariaService = this.serviceLocator.getService('ariaService');
        this.parent.enableDeepCompare = this.parent.getDataModule().isRemote();
        this.generator = this.getModelGenerator();
        if (this.parent.isDestroyed) {
            return;
        }
        if (!this.parent.enableColumnVirtualization && !this.parent.enableVirtualization
            && !this.parent.groupSettings.enableLazyLoading) {
            this.parent.on(events.columnVisibilityChanged, this.setVisible, this);
        }
        this.parent.on(events.colGroupRefresh, this.colGroupRefresh, this);
        this.parent.on(events.uiUpdate, this.enableAfterRender, this);
        this.parent.on(events.refreshInfiniteModeBlocks, this.refreshContentRows, this);
        this.parent.on(events.beforeCellFocused, this.beforeCellFocused, this);
        this.parent.on(events.destroy, this.droppableDestroy, this);
    }
    ContentRender.prototype.beforeCellFocused = function (e) {
        if (e.byKey && (e.keyArgs.action === 'upArrow' || e.keyArgs.action === 'downArrow')) {
            this.pressedKey = e.keyArgs.action;
        }
        else {
            this.pressedKey = undefined;
        }
    };
    /**
     * The function is used to render grid content div
     *
     * @returns {void}
     */
    ContentRender.prototype.renderPanel = function () {
        var gObj = this.parent;
        var div = this.parent.element.querySelector('.' + literals.gridContent);
        if (div) {
            this.ariaService.setOptions(this.parent.element.querySelector('.' + literals.content), { busy: false });
            this.setPanel(div);
            return;
        }
        div = this.parent.createElement('div', { className: literals.gridContent });
        var innerDiv = this.parent.createElement('div', {
            className: literals.content
        });
        this.ariaService.setOptions(innerDiv, { busy: false });
        div.appendChild(innerDiv);
        this.setPanel(div);
        gObj.element.appendChild(div);
    };
    /**
     * The function is used to render grid content table
     *
     * @returns {void}
     */
    ContentRender.prototype.renderTable = function () {
        var contentDiv = this.getPanel();
        var virtualTable = contentDiv.querySelector('.e-virtualtable');
        var virtualTrack = contentDiv.querySelector('.e-virtualtrack');
        if (this.parent.enableVirtualization && !isNullOrUndefined(virtualTable) && !isNullOrUndefined(virtualTrack)) {
            remove(virtualTable);
            remove(virtualTrack);
        }
        contentDiv.appendChild(this.createContentTable('_content_table'));
        this.setTable(contentDiv.querySelector('.' + literals.table));
        this.ariaService.setOptions(this.getTable(), {
            multiselectable: this.parent.selectionSettings.type === 'Multiple'
        });
        this.initializeContentDrop();
        if (this.parent.frozenRows) {
            this.parent.getHeaderContent().classList.add('e-frozenhdrcont');
        }
    };
    /**
     * The function is used to create content table elements
     *
     * @param {string} id - specifies the id
     * @returns {Element} returns the element
     * @hidden
     */
    ContentRender.prototype.createContentTable = function (id) {
        var innerDiv = this.getPanel().firstElementChild;
        if (this.getTable()) {
            remove(this.getTable());
        }
        var table = innerDiv.querySelector('.' + literals.table) ? innerDiv.querySelector('.' + literals.table) :
            this.parent.createElement('table', {
                className: literals.table, attrs: {
                    cellspacing: '0.25px', role: 'grid',
                    id: this.parent.element.id + id
                }
            });
        this.setColGroup(this.parent.getHeaderTable().querySelector(literals.colGroup).cloneNode(true));
        table.appendChild(this.getColGroup());
        table.appendChild(this.parent.createElement(literals.tbody, { attrs: { role: 'rowgroup' } }));
        innerDiv.appendChild(table);
        return innerDiv;
    };
    /**
     * Refresh the content of the Grid.
     *
     * @param {NotifyArgs} args - specifies the args
     * @returns {void}
     */
    // tslint:disable-next-line:max-func-body-length
    ContentRender.prototype.refreshContentRows = function (args) {
        var _this = this;
        if (args === void 0) { args = {}; }
        var gObj = this.parent;
        if (gObj.currentViewData.length === 0) {
            return;
        }
        var dataSource = this.currentMovableRows || gObj.currentViewData;
        var contentModule = this.parent.contentModule;
        var isReact = gObj.isReact && !isNullOrUndefined(gObj.rowTemplate);
        var frag = isReact ? gObj.createElement(literals.tbody, { attrs: { role: 'rowgroup' } }) : document.createDocumentFragment();
        if (!this.initialPageRecords) {
            this.initialPageRecords = extend([], dataSource);
        }
        var hdrfrag = isReact ? gObj.createElement(literals.tbody, { attrs: { role: 'rowgroup' } }) : document.createDocumentFragment();
        var refFrag;
        var refHdrfrag;
        if (gObj.isReact && gObj.rowTemplate) {
            refFrag = frag;
            refHdrfrag = hdrfrag;
        }
        var columns = gObj.getColumns();
        var tr;
        var hdrTbody;
        var frzCols = gObj.getFrozenColumns();
        var isFrozenGrid = this.parent.isFrozenGrid();
        var trElement;
        var row = new RowRenderer(this.serviceLocator, null, this.parent);
        var isInfiniteScroll = this.parent.enableInfiniteScrolling
            && args.requestType === 'infiniteScroll';
        gObj.notify(events.destroyChildGrid, {});
        this.rowElements = [];
        this.rows = [];
        this.tempFreezeRows = [];
        var fCont = this.getPanel().querySelector('.' + literals.frozenContent);
        var mCont = this.getPanel().querySelector('.' + literals.movableContent);
        var cont = this.getPanel().querySelector('.' + literals.content);
        var tbdy;
        var tableName;
        if (isGroupAdaptive(gObj)) {
            if (['sorting', 'filtering', 'searching', 'grouping', 'ungrouping', 'reorder', 'save', 'delete']
                .some(function (value) { return args.requestType === value; })) {
                this.emptyVcRows();
            }
        }
        var modelData;
        if (this.parent.enableVirtualization && this.parent.isFrozenGrid()) {
            if (this.parent.enableColumnVirtualization && args.requestType === 'virtualscroll'
                && args.virtualInfo.sentinelInfo.axis === 'X') {
                modelData = this.parent.contentModule.generateRows(dataSource, args);
                args.renderMovableContent = true;
            }
            modelData = this.parent.contentModule.generateRows(dataSource, args);
        }
        else {
            modelData = this.checkCache(modelData, args);
            if (!this.isAddRows && !this.useGroupCache) {
                modelData = this.generator.generateRows(dataSource, args);
            }
        }
        this.setGroupCache(modelData, args);
        this.parent.notify(events.setInfiniteCache, { isInfiniteScroll: isInfiniteScroll, modelData: modelData, args: args });
        var idx = modelData[0].cells[0].index;
        if (isFrozenGrid) {
            tableName = contentModule.setTbody(modelData, args);
            tbdy = contentModule.getTbody(tableName);
        }
        var isFrozenLeft = this.parent.getFrozenMode() === literals.leftRight && tableName === literals.frozenRight;
        /* eslint-disable */
        if (!(args.requestType === 'infiniteScroll' && !this.parent.infiniteScrollSettings.enableCache) && this.parent.registeredTemplate
            && this.parent.registeredTemplate.template && !args.isFrozen && !isFrozenLeft) {
            var templatetoclear = [];
            for (var i = 0; i < this.parent.registeredTemplate.template.length; i++) {
                for (var j = 0; j < this.parent.registeredTemplate.template[i].rootNodes.length; j++) {
                    if (isNullOrUndefined(this.parent.registeredTemplate.template[i].rootNodes[j].parentNode)) {
                        templatetoclear.push(this.parent.registeredTemplate.template[i]);
                        /* eslint-enable */
                    }
                }
            }
            this.parent.destroyTemplate(['template'], templatetoclear);
        }
        if ((this.parent.isReact || this.parent.isVue) && !(args.requestType === 'infiniteScroll' && !this.parent.infiniteScrollSettings.enableCache) && !args.isFrozen) {
            var templates = [
                this.parent.isVue ? 'template' : 'columnTemplate', 'rowTemplate', 'detailTemplate',
                'captionTemplate', 'commandsTemplate', 'groupFooterTemplate', 'groupCaptionTemplate'
            ];
            if (args.requestType === 'infiniteScroll' && this.parent.infiniteScrollSettings.enableCache) {
                templates = [
                    this.parent.isVue ? 'template' : 'columnTemplate', 'commandsTemplate'
                ];
            }
            clearReactVueTemplates(this.parent, templates);
        }
        if (this.parent.enableColumnVirtualization) {
            var cellMerge = new CellMergeRender(this.serviceLocator, this.parent);
            cellMerge.updateVirtualCells(modelData);
        }
        if (!isFrozenGrid) {
            this.tbody = this.getTable().querySelector(literals.tbody);
        }
        var startIndex = 0;
        var blockLoad = true;
        if (isGroupAdaptive(gObj) && gObj.vcRows.length) {
            var top_1 = 'top';
            var scrollTop = !isNullOrUndefined(args.virtualInfo.offsets) ? args.virtualInfo.offsets.top :
                (!isNullOrUndefined(args.scrollTop) ? args.scrollTop["" + top_1] : 0);
            if (scrollTop !== 0) {
                var offsets_1 = gObj.vGroupOffsets;
                var bSize = gObj.pageSettings.pageSize / 2;
                var values = Object.keys(offsets_1).map(function (key) { return offsets_1["" + key]; });
                for (var m = 0; m < values.length; m++) {
                    if (scrollTop < values[parseInt(m.toString(), 10)]) {
                        if (!isNullOrUndefined(args.virtualInfo) && args.virtualInfo.direction === 'up') {
                            startIndex = m > 0 ? ((m - 1) * bSize) : (m * bSize);
                            break;
                        }
                        else {
                            startIndex = m * bSize;
                            if (this.parent.contentModule.isEndBlock(m) || this.parent.contentModule.isEndBlock(m + 1)) {
                                args.virtualInfo.blockIndexes = [m, m + 1];
                            }
                            break;
                        }
                    }
                }
                if (Math.round(scrollTop + this.contentPanel.firstElementChild.offsetHeight) >=
                    this.contentPanel.firstElementChild.scrollHeight && !args.rowObject) {
                    blockLoad = false;
                }
            }
        }
        var isVFFrozenOnly = gObj.frozenRows && !gObj.isFrozenGrid() && this.parent.enableVirtualization
            && args.requestType === 'reorder';
        if ((gObj.frozenRows && args.requestType === 'virtualscroll' && args.virtualInfo.sentinelInfo.axis === 'X') || isVFFrozenOnly) {
            var bIndex = args.virtualInfo.blockIndexes;
            var page = args.virtualInfo.page;
            args.virtualInfo.blockIndexes = [1, 2];
            if (isVFFrozenOnly) {
                args.virtualInfo.page = 1;
            }
            var data = isVFFrozenOnly ? this.initialPageRecords : dataSource;
            var mhdrData = this.vgenerator
                .generateRows(data, args);
            mhdrData.splice(this.parent.frozenRows);
            for (var i = 0; i < this.parent.frozenRows; i++) {
                mhdrData[parseInt(i.toString(), 10)].cells.splice(0, this.parent.getFrozenColumns());
                tr = row.render(mhdrData[parseInt(i.toString(), 10)], columns);
                hdrfrag.appendChild(tr);
            }
            args.virtualInfo.blockIndexes = bIndex;
            args.virtualInfo.page = page;
            if (isVFFrozenOnly && args.virtualInfo.page === 1) {
                modelData.splice(0, this.parent.frozenRows);
            }
        }
        this.virtualFrozenHdrRefresh(hdrfrag, modelData, row, args, dataSource, columns);
        if (this.parent.groupSettings.enableLazyLoading && !this.useGroupCache && this.parent.groupSettings.columns.length) {
            (this.parent.enableVirtualization ? this.parent.lazyLoadRender :
                this.parent.contentModule).refRowsObj[this.parent.pageSettings.currentPage] = [];
        }
        if (this.parent.enableInfiniteScrolling && this.parent.groupSettings.enableLazyLoading && args.requestType === 'delete') { //  || (this.parent.infiniteScrollSettings && this.parent.infiniteScrollSettings.enableCache))
            this.visibleRows = [];
        }
        var _loop_1 = function (i, len) {
            this_1.rows.push(modelData[parseInt(i.toString(), 10)]);
            if (isFrozenGrid) {
                this_1.tempFreezeRows.push(modelData[parseInt(i.toString(), 10)]);
            }
            if (this_1.parent.groupSettings.enableLazyLoading && !this_1.useGroupCache && this_1.parent.groupSettings.columns.length) {
                (this_1.parent.enableVirtualization ? this_1.parent.lazyLoadRender :
                    this_1.parent.contentModule).refRowsObj[this_1.parent.pageSettings.currentPage].push(modelData[parseInt(i.toString(), 10)]);
                this_1.setRowsInLazyGroup(modelData[parseInt(i.toString(), 10)], i);
                if (isNullOrUndefined(modelData[parseInt(i.toString(), 10)].indent)) {
                    return "continue";
                }
            }
            this_1.setInfiniteVisibleRows(args, modelData[parseInt(i.toString(), 10)], tableName);
            if (isGroupAdaptive(gObj) && args.virtualInfo && args.virtualInfo.blockIndexes
                && (this_1.rowElements.length >= (args.virtualInfo.blockIndexes.length * this_1.parent.contentModule.getBlockSize()))
                && blockLoad) {
                this_1.parent.currentViewData['records'] = this_1.rows.map(function (m) { return m.data; });
                return "break";
            }
            if (!gObj.rowTemplate) {
                tr = row.render(modelData[parseInt(i.toString(), 10)], columns);
                var isVFreorder = this_1.ensureFrozenHeaderRender(args);
                if (gObj.frozenRows && i < gObj.frozenRows && !isInfiniteScroll && args.requestType !== 'virtualscroll' && isVFreorder
                    && this_1.ensureVirtualFrozenHeaderRender(args)) {
                    hdrfrag.appendChild(tr);
                }
                else {
                    frag.appendChild(tr);
                }
                if (modelData[parseInt(i.toString(), 10)].isExpand) {
                    gObj.notify(events.expandChildGrid, tr.cells[gObj.groupSettings.columns.length]);
                }
            }
            else {
                var rowTemplateID = gObj.element.id + 'rowTemplate';
                var elements = void 0;
                if (gObj.isReact) {
                    var isHeader = gObj.frozenRows && i < gObj.frozenRows;
                    var copied = extend({ index: i }, dataSource[parseInt(i.toString(), 10)]);
                    gObj.getRowTemplate()(copied, gObj, 'rowTemplate', rowTemplateID, null, null, isHeader ? hdrfrag : frag);
                    if (gObj.requireTemplateRef) {
                        // eslint-disable-next-line @typescript-eslint/no-this-alias
                        var thisRef_2 = this_1;
                        thisRef_2.parent.renderTemplates(function () {
                            if (gObj.frozenRows && i < gObj.frozenRows) {
                                tr = refHdrfrag.childNodes[parseInt(i.toString(), 10)];
                            }
                            else {
                                trElement = refFrag.childNodes[parseInt(i.toString(), 10)];
                            }
                            var arg = { data: modelData[parseInt(i.toString(), 10)].data,
                                row: trElement ? trElement : tr };
                            thisRef_2.parent.trigger(events.rowDataBound, arg);
                            if (modelData[parseInt(i.toString(), 10)].isDataRow || (thisRef_2.parent.enableVirtualization &&
                                thisRef_2.parent.groupSettings.enableLazyLoading)) {
                                thisRef_2.rowElements.push(tr);
                            }
                            thisRef_2.ariaService.setOptions(thisRef_2.getTable(), {
                                colcount: gObj.getColumns().length.toString()
                            });
                            if (i === modelData.length - 1) {
                                refFrag = null;
                                refHdrfrag = null;
                            }
                        });
                        return "continue";
                    }
                }
                else {
                    elements = gObj.getRowTemplate()(extend({ index: i }, dataSource[parseInt(i.toString(), 10)]), gObj, 'rowTemplate', rowTemplateID, undefined, undefined, undefined, this_1.parent['root']);
                }
                if (!gObj.isReact && elements[0].tagName === 'TBODY') {
                    for (var j = 0; j < elements.length; j++) {
                        var isTR = elements[parseInt(j.toString(), 10)].nodeName.toLowerCase() === 'tr';
                        if (isTR || (elements[parseInt(j.toString(), 10)].querySelectorAll && elements[parseInt(j.toString(), 10)].querySelectorAll('tr').length)) {
                            tr = isTR ? elements[parseInt(j.toString(), 10)] : elements[parseInt(j.toString(), 10)].querySelector('tr');
                        }
                    }
                    if (gObj.frozenRows && i < gObj.frozenRows) {
                        hdrfrag.appendChild(tr);
                    }
                    else {
                        frag.appendChild(tr);
                    }
                }
                else {
                    if (gObj.frozenRows && i < gObj.frozenRows) {
                        tr = !gObj.isReact ? appendChildren(hdrfrag, elements) : hdrfrag.lastElementChild;
                    }
                    else {
                        // frag.appendChild(tr);
                        if (!gObj.isReact) {
                            tr = appendChildren(frag, elements);
                        }
                        trElement = gObj.isReact ? frag.lastElementChild : tr.lastElementChild;
                    }
                }
                var arg = { data: modelData[parseInt(i.toString(), 10)].data, row: trElement ? trElement : tr };
                this_1.parent.trigger(events.rowDataBound, arg);
            }
            if (modelData[parseInt(i.toString(), 10)].isDataRow || (this_1.parent.enableVirtualization &&
                this_1.parent.groupSettings.enableLazyLoading)) {
                this_1.rowElements.push(tr);
            }
            this_1.ariaService.setOptions(this_1.getTable(), { colcount: gObj.getColumns().length.toString() });
        };
        var this_1 = this;
        for (var i = startIndex, len = modelData.length; i < len; i++) {
            var state_1 = _loop_1(i, len);
            if (state_1 === "break")
                break;
        }
        var isReactChild = gObj.parentDetails && gObj.parentDetails.parentInstObj && gObj.parentDetails.parentInstObj.isReact;
        if ((gObj.isReact || isReactChild) && !gObj.requireTemplateRef) {
            gObj.renderTemplates();
        }
        if (this.parent.enableInfiniteScrolling && this.parent.groupSettings.enableLazyLoading) {
            this.parent.contentModule.refRowsObj[this.parent.pageSettings.currentPage] =
                this.parent.contentModule['groupCache'][this.parent.pageSettings.currentPage];
        }
        if (this.parent.groupSettings.enableLazyLoading && !this.useGroupCache && this.parent.groupSettings.columns.length) {
            this.parent.notify(events.refreshExpandandCollapse, {
                rows: (this.parent.enableVirtualization ? this.parent.lazyLoadRender :
                    this.parent.contentModule).refRowsObj[this.parent.pageSettings.currentPage]
            });
        }
        if (isFrozenGrid) {
            contentModule.splitRows(tableName);
        }
        gObj.removeMaskRow();
        this.parent.notify('removeGanttShimmer', { requestType: 'hideShimmer' });
        if ((gObj.frozenRows && args.requestType !== 'virtualscroll' && !isInfiniteScroll && this.ensureVirtualFrozenHeaderRender(args))
            || (args.requestType === 'virtualscroll' && args.virtualInfo.sentinelInfo && args.virtualInfo.sentinelInfo.axis === 'X')) {
            hdrTbody = isFrozenGrid ? contentModule.getFrozenHeader(tableName) : gObj.getHeaderTable().querySelector(literals.tbody);
            if (isReact) {
                var parentTable = hdrTbody.parentElement;
                remove(hdrTbody);
                parentTable.appendChild(hdrfrag);
            }
            else {
                hdrTbody.innerHTML = '';
                hdrTbody.appendChild(hdrfrag);
            }
        }
        if (!gObj.enableVirtualization && gObj.frozenRows && idx === 0 && cont.offsetHeight === Number(gObj.height)) {
            cont.style.height = (cont.offsetHeight - hdrTbody.offsetHeight) + 'px';
        }
        args.rows = this.rows.slice(0);
        if (isFrozenGrid) {
            contentModule.setIsFrozen(args, tableName);
        }
        this.index = idx;
        getUpdateUsingRaf(function () {
            _this.parent.notify(events.beforeFragAppend, args);
            var isVFTable = _this.parent.enableVirtualization && _this.parent.isFrozenGrid();
            if (!_this.parent.enableVirtualization && !isInfiniteScroll) {
                if (_this.parent.isFrozenGrid()) {
                    remove(contentModule.getTbody(tableName));
                    tbdy = _this.parent.createElement(literals.tbody, { attrs: { role: 'rowgroup' } });
                }
                else {
                    if (!gObj.isReact) {
                        _this.tbody.innerHTML = '';
                    }
                    if (!isNullOrUndefined(_this.tbody.parentElement)) {
                        remove(_this.tbody);
                    }
                    else {
                        remove(gObj.getContentTable().querySelector(literals.tbody));
                    }
                    _this.tbody = _this.parent.createElement(literals.tbody, { attrs: { role: 'rowgroup' } });
                }
            }
            if (isFrozenGrid && !isVFTable && !_this.parent.enableInfiniteScrolling) {
                _this.appendContent(tbdy, frag, args, tableName);
            }
            else {
                if (gObj.rowTemplate) {
                    updateBlazorTemplate(gObj.element.id + 'rowTemplate', 'RowTemplate', gObj);
                }
                if (isVFTable) {
                    if (args.renderFrozenRightContent) {
                        var frCont = gObj.getContent().querySelector('.e-frozen-right-content').querySelector(literals.tbody);
                        _this.appendContent(frCont, frag, args);
                    }
                    else if (!args.renderMovableContent) {
                        _this.appendContent(fCont.querySelector(literals.tbody), frag, args);
                    }
                    else {
                        _this.appendContent(mCont.querySelector(literals.tbody), frag, args);
                        args.renderMovableContent = false;
                    }
                    if (!_this.parent.getFrozenColumns()) {
                        contentModule.renderNextFrozentPart(args, tableName);
                    }
                }
                else {
                    if (!isNullOrUndefined(_this.parent.infiniteScrollModule) && _this.parent.enableInfiniteScrolling) {
                        _this.isAddRows = false;
                        _this.parent.notify(events.removeInfiniteRows, { args: args });
                        _this.parent.notify(events.appendInfiniteContent, {
                            tbody: tbdy ? tbdy : _this.tbody, frag: frag, args: args, rows: _this.rows,
                            rowElements: _this.rowElements, visibleRows: _this.visibleRows,
                            tableName: tableName
                        });
                        if (!frzCols && isFrozenGrid) {
                            if ((gObj.getFrozenMode() !== literals.leftRight
                                && (tableName === literals.frozenLeft || tableName === literals.frozenRight))
                                || (gObj.getFrozenMode() === literals.leftRight
                                    && (tableName === literals.frozenLeft || tableName === 'movable'))) {
                                _this.refreshContentRows(extend({}, args));
                            }
                        }
                    }
                    else {
                        _this.useGroupCache = false;
                        _this.appendContent(_this.tbody, frag, args);
                    }
                }
            }
            if (frzCols) {
                contentModule.renderNextFrozentPart(args, tableName);
            }
            frag = null;
        }, this.rafCallback(extend({}, args)));
    };
    ContentRender.prototype.emptyVcRows = function () {
        this.parent.vcRows = [];
        this.parent.vRows = [];
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ContentRender.prototype.appendContent = function (tbody, frag, args, tableName) {
        var isReact = this.parent.isReact && !isNullOrUndefined(this.parent.rowTemplate);
        if (isReact) {
            this.getTable().appendChild(frag);
        }
        else {
            tbody.appendChild(frag);
            this.getTable().appendChild(tbody);
        }
        if (this.parent.rowRenderingMode === 'Vertical' && this.parent.allowTextWrap && (this.parent.textWrapSettings.wrapMode === 'Header'
            || this.parent.textWrapSettings.wrapMode === 'Both')) {
            var cells = tbody.querySelectorAll('td');
            for (var i = 0; i < cells.length; i++) {
                var headerCellHeight = parseFloat(document.defaultView.getComputedStyle(cells[parseInt(i.toString(), 10)], '::before').getPropertyValue('height'));
                var cellHeight = cells[parseInt(i.toString(), 10)].offsetHeight;
                if (headerCellHeight > cellHeight) {
                    cells[parseInt(i.toString(), 10)].style.height = headerCellHeight + 'px';
                    cells[parseInt(i.toString(), 10)].style.boxSizing = 'content-box';
                }
            }
        }
    };
    ContentRender.prototype.setRowsInLazyGroup = function (row, index) {
        if (this.parent.groupSettings.enableLazyLoading && !this.useGroupCache && this.parent.groupSettings.columns.length) {
            (this.parent.enableVirtualization ? this.parent.lazyLoadRender :
                this.parent.contentModule).maintainRows(row, index);
        }
    };
    ContentRender.prototype.setGroupCache = function (data, args) {
        if (!this.useGroupCache && this.parent.groupSettings.enableLazyLoading) {
            this.parent.notify(events.setGroupCache, { args: args, data: data });
        }
    };
    ContentRender.prototype.ensureFrozenHeaderRender = function (args) {
        return !((this.parent.enableVirtualization
            && (args.requestType === 'reorder' || args.requestType === 'refresh')) || (this.parent.infiniteScrollSettings.enableCache
            && this.parent.frozenRows && this.parent.infiniteScrollModule.requestType === 'delete'
            && this.parent.pageSettings.currentPage !== 1));
    };
    ContentRender.prototype.ensureVirtualFrozenHeaderRender = function (args) {
        return !(this.parent.enableVirtualization && args.requestType === 'delete');
    };
    ContentRender.prototype.checkCache = function (modelData, args) {
        if (this.parent.infiniteScrollSettings.enableCache && args.requestType === 'infiniteScroll') {
            var index = args.isFrozen ? 1 : 0;
            var frozenCols = this.parent.isFrozenGrid();
            this.isAddRows = !isNullOrUndefined(this.infiniteCache[this.parent.pageSettings.currentPage]);
            if (frozenCols && !isNullOrUndefined(this.infiniteCache[this.parent.pageSettings.currentPage])) {
                this.isAddRows = this.infiniteCache[this.parent.pageSettings
                    .currentPage][parseInt(index.toString(), 10)].length !== 0;
            }
            if (this.isAddRows) {
                var data = !frozenCols ? this.infiniteCache[this.parent.pageSettings.currentPage]
                    : this.infiniteCache[this.parent.pageSettings.currentPage][parseInt(index.toString(), 10)];
                modelData = this.parent.pageSettings.currentPage === 1 ? data.slice(this.parent.frozenRows) : data;
            }
            return modelData;
        }
        if (this.parent.groupSettings.enableLazyLoading && this.parent.groupSettings.columns.length && (args.requestType === 'paging'
            || args.requestType === 'columnstate' || args.requestType === 'reorder' || args.requestType === 'virtualscroll')
            && (this.parent.enableVirtualization ? this.parent.lazyLoadRender :
                this.parent.contentModule).getGroupCache()[this.parent.pageSettings.currentPage]) {
            if (!this.parent.enableVirtualization) {
                this.useGroupCache = true;
            }
            return this.parent.enableVirtualization ? this.parent.getRowsObject() :
                this.parent.contentModule.initialGroupRows(args.requestType === 'reorder');
        }
        return null;
    };
    ContentRender.prototype.setInfiniteVisibleRows = function (args, data, tableName) {
        var frozenCols = this.parent.isFrozenGrid();
        if (this.parent.enableInfiniteScrolling && !this.parent.infiniteScrollSettings.enableCache) {
            if (frozenCols) {
                if (tableName === literals.frozenLeft || (this.parent.getFrozenMode() === 'Right' && tableName === literals.frozenRight)) {
                    this.visibleFrozenRows.push(data);
                }
                else if (tableName === 'movable') {
                    this.visibleRows.push(data);
                }
                else {
                    this.rightFreezeRows.push(data);
                }
            }
            else if (!this.parent.infiniteScrollSettings.enableCache) {
                this.visibleRows.push(data);
            }
        }
    };
    ContentRender.prototype.getCurrentBlockInfiniteRecords = function (isFreeze) {
        var data = [];
        if (this.parent.infiniteScrollSettings.enableCache) {
            if (!Object.keys(this.infiniteCache).length) {
                return [];
            }
            var frozenCols = this.parent.isFrozenGrid();
            var rows = this.parent.getRows();
            var index = parseInt(rows[this.parent.frozenRows].getAttribute(literals.dataRowIndex), 10);
            var first = Math.ceil((index + 1) / this.parent.pageSettings.pageSize);
            index = parseInt(rows[rows.length - 1].getAttribute(literals.dataRowIndex), 10);
            var last = Math.ceil((index + (rows.length ? 1 : 0)) / this.parent.pageSettings.pageSize);
            if (frozenCols) {
                var idx = isFreeze ? 0 : 1;
                for (var i = first; i <= last; i++) {
                    data = !data.length ? this.infiniteCache[parseInt(i.toString(), 10)][parseInt(idx.toString(), 10)]
                        : data.concat(this.infiniteCache[parseInt(i.toString(), 10)][parseInt(idx.toString(), 10)]);
                }
                if (this.parent.frozenRows && this.parent.pageSettings.currentPage > 1) {
                    data = this.infiniteCache[1][parseInt(idx.toString(), 10)]
                        .slice(0, this.parent.frozenRows).concat(data);
                }
            }
            else {
                for (var i = first; i <= last; i++) {
                    data = !data.length ? this.infiniteCache[parseInt(i.toString(), 10)]
                        : data.concat(this.infiniteCache[parseInt(i.toString(), 10)]);
                }
                if (this.parent.frozenRows && this.parent.pageSettings.currentPage > 1) {
                    data = this.infiniteCache[1].slice(0, this.parent.frozenRows).concat(data);
                }
            }
        }
        return data;
    };
    ContentRender.prototype.getReorderedVFRows = function (args) {
        return this.parent.contentModule.getReorderedFrozenRows(args);
    };
    ContentRender.prototype.getReorderedRows = function (args) {
        return this.parent.contentModule.getReorderedFrozenRows(args);
    };
    ContentRender.prototype.virtualFrozenHdrRefresh = function (hdrfrag, modelData, row, args, dataSource, columns) {
        if (this.parent.frozenRows && this.parent.enableVirtualization
            && (args.requestType === 'reorder' || args.requestType === 'refresh')) {
            var tr = void 0;
            var fhdrData = [];
            if (this.parent.isFrozenGrid()) {
                this.currentMovableRows = dataSource;
                fhdrData = this.getReorderedVFRows(args);
            }
            else {
                fhdrData = this.getReorderedRows(args);
            }
            for (var i = 0; i < fhdrData.length; i++) {
                tr = row.render(fhdrData[parseInt(i.toString(), 10)], columns);
                hdrfrag.appendChild(tr);
            }
            if (args.virtualInfo.page === 1) {
                modelData.splice(0, this.parent.frozenRows);
            }
            if (args.renderMovableContent) {
                this.parent.currentViewData = this.currentMovableRows;
                this.currentMovableRows = null;
            }
        }
    };
    ContentRender.prototype.getInfiniteRows = function () {
        var rows = [];
        var frozenCols = this.parent.isFrozenGrid();
        if (this.parent.enableInfiniteScrolling) {
            if (this.parent.infiniteScrollSettings.enableCache) {
                var keys = Object.keys(this.infiniteCache);
                for (var i = 0; i < keys.length; i++) {
                    rows = !frozenCols ? rows.concat(this.infiniteCache[keys[parseInt(i.toString(), 10)]]) : rows.concat(this.infiniteCache[keys[parseInt(i.toString(), 10)]][0]);
                }
            }
            else {
                rows = frozenCols ? this.visibleFrozenRows : this.visibleRows;
            }
        }
        return rows;
    };
    ContentRender.prototype.getInfiniteMovableRows = function () {
        var infiniteCacheRows = this.getCurrentBlockInfiniteRecords();
        var infiniteRows = this.parent.enableInfiniteScrolling ? infiniteCacheRows.length ? infiniteCacheRows
            : this.visibleRows : [];
        return infiniteRows;
    };
    /**
     * Get the content div element of grid
     *
     * @returns {Element} returns the element
     */
    ContentRender.prototype.getPanel = function () {
        return this.contentPanel;
    };
    /**
     * Set the content div element of grid
     *
     * @param  {Element} panel - specifies the panel
     * @returns {void}
     */
    ContentRender.prototype.setPanel = function (panel) {
        this.contentPanel = panel;
    };
    /**
     * Get the content table element of grid
     *
     * @returns {Element} returns the element
     */
    ContentRender.prototype.getTable = function () {
        return this.contentTable;
    };
    /**
     * Set the content table element of grid
     *
     * @param  {Element} table - specifies the table
     * @returns {void}
     */
    ContentRender.prototype.setTable = function (table) {
        this.contentTable = table;
    };
    /**
     * Get the Movable Row collection in the Freeze pane Grid.
     *
     * @returns {Row[] | HTMLCollectionOf<HTMLTableRowElement>} returns the row
     */
    ContentRender.prototype.getRows = function () {
        var infiniteRows = this.getInfiniteRows();
        return infiniteRows.length ? infiniteRows : this.parent.getFrozenColumns() ? this.freezeRows : this.rows;
    };
    /**
     * Get the Movable Row collection in the Freeze pane Grid.
     *
     * @returns {Row[] | HTMLCollectionOf<HTMLTableRowElement>} returns the row
     */
    ContentRender.prototype.getMovableRows = function () {
        var infiniteRows = this.getInfiniteMovableRows();
        return infiniteRows.length ? infiniteRows : this.movableRows;
    };
    /**
     * Get the content table data row elements
     *
     * @returns {Element} returns the element
     */
    ContentRender.prototype.getRowElements = function () {
        return this.parent.getFrozenColumns() ? this.freezeRowElements : this.rowElements;
    };
    /**
     * Get the Freeze pane movable content table data row elements
     *
     * @returns {Element} returns the element
     */
    ContentRender.prototype.getMovableRowElements = function () {
        return this.rowElements;
    };
    /**
     * Get the content table data row elements
     *
     * @param {Element[]} elements - specifies the elements
     * @returns {void}
     */
    ContentRender.prototype.setRowElements = function (elements) {
        this.rowElements = elements;
    };
    /**
     * Get the header colgroup element
     *
     * @returns {Element} returns the element
     */
    ContentRender.prototype.getColGroup = function () {
        return this.colgroup;
    };
    /**
     * Set the header colgroup element
     *
     * @param {Element} colGroup - specifies the colgroup
     * @returns {Element} returns the element
     */
    ContentRender.prototype.setColGroup = function (colGroup) {
        if (!isNullOrUndefined(colGroup)) {
            colGroup.id = 'content-' + colGroup.id;
        }
        return this.colgroup = colGroup;
    };
    /**
     * Function to hide content table column based on visible property
     *
     * @param {Column[]} columns - specifies the column
     * @returns {void}
     */
    ContentRender.prototype.setVisible = function (columns) {
        var gObj = this.parent;
        var isFrozenGrid = this.parent.isFrozenGrid();
        var frzCols = gObj.getFrozenColumns();
        var rows = [];
        if (isFrozenGrid) {
            var fRows = this.freezeRows;
            var mRows = this.movableRows;
            var rowLen = fRows.length;
            var cellLen = void 0;
            var rightRows = [];
            if (gObj.getFrozenMode() === literals.leftRight) {
                rightRows = gObj.getFrozenRightRowsObject();
            }
            for (var i = 0, row = void 0; i < rowLen; i++) {
                cellLen = mRows[parseInt(i.toString(), 10)].cells.length;
                var rightLen = rightRows.length ? rightRows[parseInt(i.toString(), 10)].cells.length : 0;
                row = fRows[parseInt(i.toString(), 10)].clone();
                for (var j = 0; j < cellLen; j++) {
                    row.cells.push(mRows[parseInt(i.toString(), 10)].cells[parseInt(j.toString(), 10)]);
                }
                for (var k = 0; k < rightLen; k++) {
                    row.cells.push(rightRows[parseInt(i.toString(), 10)].cells[parseInt(k.toString(), 10)]);
                }
                rows.push(row);
            }
        }
        else {
            rows = this.getRows();
        }
        var testRow;
        rows.some(function (r) { if (r.isDataRow) {
            testRow = r;
        } return r.isDataRow; });
        var needFullRefresh = true;
        if (!gObj.groupSettings.columns.length && testRow) {
            needFullRefresh = false;
        }
        var tr = gObj.getDataRows();
        var args = {};
        var infiniteData = this.infiniteRowVisibility();
        var contentrows = infiniteData ? infiniteData
            : this.rows.filter(function (row) { return !row.isDetailRow; });
        for (var c = 0, clen = columns.length; c < clen; c++) {
            var column = columns[parseInt(c.toString(), 10)];
            var idx = this.parent.getNormalizedColumnIndex(column.uid);
            var colIdx = this.parent.getColumnIndexByUid(column.uid);
            var displayVal = column.visible === true ? '' : 'none';
            if (idx !== -1 && testRow && idx < testRow.cells.length) {
                if (isFrozenGrid) {
                    if (column.getFreezeTableName() !== 'movable') {
                        if (column.getFreezeTableName() === literals.frozenRight) {
                            var left = this.parent.getFrozenLeftColumnsCount();
                            var movable = this.parent.getMovableColumnsCount();
                            colIdx = idx = idx - (left + movable);
                            var colG = this.parent.getContent().querySelector('.e-frozen-right-content').querySelector(literals.colGroup);
                            setStyleAttribute(colG.childNodes[parseInt(idx.toString(), 10)], { 'display': displayVal });
                            contentrows = gObj.getFrozenRightRowsObject();
                            tr = gObj.getFrozenRightDataRows();
                        }
                        else {
                            setStyleAttribute(this.getColGroup().childNodes[parseInt(idx.toString(), 10)], { 'display': displayVal });
                            var infiniteFreezeData = this.infiniteRowVisibility(true);
                            contentrows = infiniteFreezeData ? infiniteFreezeData : this.freezeRows;
                            tr = gObj.getDataRows();
                        }
                    }
                    else {
                        var mTable = gObj.getContent().querySelector('.' + literals.movableContent).querySelector(literals.colGroup);
                        colIdx = idx = idx - frzCols - this.parent.getFrozenLeftColumnsCount();
                        setStyleAttribute(mTable.childNodes[parseInt(idx.toString(), 10)], { 'display': displayVal });
                        tr = gObj.getMovableDataRows();
                        var infiniteMovableData = this.infiniteRowVisibility();
                        contentrows = infiniteMovableData ? infiniteMovableData : this.movableRows;
                    }
                }
                else {
                    setStyleAttribute(this.getColGroup().childNodes[parseInt(idx.toString(), 10)], { 'display': displayVal });
                }
            }
            if (!needFullRefresh) {
                this.setDisplayNone(tr, colIdx, displayVal, contentrows);
                if (isFrozenGrid) {
                    this.parent.notify(events.freezeRender, { case: 'refreshHeight', isModeChg: true });
                }
            }
            if (!this.parent.invokedFromMedia && column.hideAtMedia) {
                this.parent.updateMediaColumns(column);
            }
            this.parent.invokedFromMedia = false;
        }
        if (needFullRefresh) {
            this.refreshContentRows({ requestType: 'refresh' });
        }
        else {
            if (!this.parent.getFrozenColumns()) {
                this.parent.notify(events.partialRefresh, { rows: contentrows, args: args });
            }
            else {
                this.parent.notify(events.partialRefresh, { rows: this.freezeRows, args: { isFrozen: true, rows: this.freezeRows } });
                this.parent.notify(events.partialRefresh, { rows: this.movableRows, args: { isFrozen: false, rows: this.movableRows } });
            }
        }
    };
    /**
     * @param {Object} tr - specifies the trr
     * @param {number} idx - specifies the idx
     * @param {string} displayVal - specifies the displayval
     * @param {Row<Column>} rows - specifies the rows
     * @returns {void}
     * @hidden
     */
    ContentRender.prototype.setDisplayNone = function (tr, idx, displayVal, rows) {
        setDisplayValue(tr, idx, displayVal, rows, this.parent, this.parent.isRowDragable());
        this.parent.notify(events.infiniteShowHide, { visible: displayVal, index: idx, isFreeze: this.isInfiniteFreeze });
    };
    ContentRender.prototype.infiniteRowVisibility = function (isFreeze) {
        var infiniteData;
        if (this.parent.enableInfiniteScrolling) {
            this.isInfiniteFreeze = isFreeze;
            if (this.parent.infiniteScrollSettings.enableCache) {
                infiniteData = isFreeze ? this.getCurrentBlockInfiniteRecords(true) : this.getCurrentBlockInfiniteRecords();
            }
            else {
                infiniteData = isFreeze ? this.visibleFrozenRows : this.visibleRows;
            }
        }
        return infiniteData;
    };
    ContentRender.prototype.colGroupRefresh = function () {
        if (this.getColGroup()) {
            var colGroup = void 0;
            if (this.parent.enableColumnVirtualization && this.parent.getFrozenColumns()
                && this.parent.contentModule.isXaxis()) {
                colGroup = this.parent.getMovableVirtualHeader()
                    .querySelector(literals.colGroup + ':not(.e-masked-colgroup)').cloneNode(true);
            }
            else {
                colGroup = this.getHeaderColGroup();
            }
            this.getTable().replaceChild(colGroup, this.getColGroup());
            this.setColGroup(colGroup);
        }
    };
    ContentRender.prototype.getHeaderColGroup = function () {
        return this.parent.element.querySelector('.' + literals.gridHeader)
            .querySelector(literals.colGroup + ':not(.e-masked-colgroup)').cloneNode(true);
    };
    ContentRender.prototype.initializeContentDrop = function () {
        var gObj = this.parent;
        this.droppable = new Droppable(gObj.element, {
            accept: '.e-dragclone',
            drop: this.drop
        });
    };
    ContentRender.prototype.droppableDestroy = function () {
        if (this.droppable && !this.droppable.isDestroyed) {
            this.droppable.destroy();
        }
    };
    ContentRender.prototype.canSkip = function (column, row, index) {
        /**
         * Skip the toggle visiblity operation when one of the following success
         * 1. Grid has empty records
         * 2. column visible property is unchanged
         * 3. cell`s isVisible property is same as column`s visible property.
         */
        return isNullOrUndefined(row) || //(1)
            isNullOrUndefined(column.visible) || //(2)
            row.cells[parseInt(index.toString(), 10)].visible === column.visible; //(3)
    };
    ContentRender.prototype.getModelGenerator = function () {
        return this.generator = this.parent.allowGrouping ? new GroupModelGenerator(this.parent) : new RowModelGenerator(this.parent);
    };
    ContentRender.prototype.renderEmpty = function (tbody) {
        this.getTable().appendChild(tbody);
        if (this.parent.frozenRows) {
            this.parent.getHeaderContent().querySelector(literals.tbody).innerHTML = '';
        }
    };
    ContentRender.prototype.setSelection = function (uid, set, clearAll) {
        this.parent.notify(events.setFreezeSelection, { uid: uid, set: set, clearAll: clearAll });
        var isFrozen = this.parent.isFrozenGrid();
        if (isFrozen && this.parent.enableVirtualization) {
            return;
        }
        if (isFrozen) {
            var rows = this.getMovableRows().filter(function (row) { return clearAll || uid === row.uid; });
            for (var i = 0; i < rows.length; i++) {
                rows[parseInt(i.toString(), 10)].isSelected = set;
            }
        }
        var row = this.getRows().filter(function (row) { return clearAll || uid === row.uid; });
        for (var j = 0; j < row.length; j++) {
            row[parseInt(j.toString(), 10)].isSelected = set;
            var cells = row[parseInt(j.toString(), 10)].cells;
            for (var k = 0; k < cells.length; k++) {
                cells[parseInt(k.toString(), 10)].isSelected = set;
            }
        }
    };
    ContentRender.prototype.getRowByIndex = function (index) {
        index = this.getInfiniteRowIndex(index);
        return !isNullOrUndefined(index) ? this.parent.getDataRows()[parseInt(index.toString(), 10)] : undefined;
    };
    ContentRender.prototype.getInfiniteRowIndex = function (index) {
        if (this.parent.infiniteScrollSettings.enableCache) {
            var fRows = this.parent.frozenRows;
            var idx = fRows > index ? 0 : fRows;
            var firstRowIndex = parseInt(this.parent.getRows()[parseInt(idx.toString(), 10)]
                .getAttribute(literals.dataRowIndex), 10);
            index = fRows > index ? index : (index - firstRowIndex) + fRows;
        }
        return index;
    };
    ContentRender.prototype.getVirtualRowIndex = function (index) {
        return index;
    };
    ContentRender.prototype.getMovableRowByIndex = function (index) {
        index = this.getInfiniteRowIndex(index);
        return !isNullOrUndefined(index) ? this.parent.getMovableDataRows()[parseInt(index.toString(), 10)] : undefined;
    };
    ContentRender.prototype.enableAfterRender = function (e) {
        if (e.module === 'group' && e.enable) {
            this.generator = this.getModelGenerator();
        }
    };
    ContentRender.prototype.setRowObjects = function (rows) {
        this.rows = rows;
    };
    /**
     * @param {NotifyArgs} args - specifies the args
     * @returns {void}
     * @hidden
     */
    ContentRender.prototype.immutableModeRendering = function (args) {
        var _this = this;
        if (args === void 0) { args = {}; }
        var gObj = this.parent;
        gObj.hideSpinner();
        var key = gObj.getPrimaryKeyFieldNames()[0];
        var oldKeys = {};
        var newKeys = {};
        var newRowObjs = [];
        var oldIndexes = {};
        var oldRowObjs = gObj.getRowsObject().slice();
        var batchChangeKeys = this.getBatchEditedRecords(key, oldRowObjs);
        var newIndexes = {};
        var hasBatch = Object.keys(batchChangeKeys).length !== 0;
        if (gObj.getContent().querySelector('.e-emptyrow') || args.requestType === 'reorder'
            || this.parent.groupSettings.columns.length) {
            this.refreshContentRows(args);
        }
        else {
            if (gObj.currentViewData.length === 0) {
                return;
            }
            var oldRowElements = {};
            var tbody = gObj.createElement(literals.tbody, { attrs: { role: 'rowgroup' } });
            var dataSource = gObj.currentViewData;
            var trs = [].slice.call(this.getTable().querySelector(literals.tbody).children);
            if (this.prevCurrentView.length) {
                var prevLen = this.prevCurrentView.length;
                var currentLen = dataSource.length;
                if (prevLen === currentLen) {
                    for (var i = 0; i < currentLen; i++) {
                        if (this.parent.editSettings.mode === 'Batch'
                            && trs[parseInt(i.toString(), 10)].classList.contains('e-insertedrow')) {
                            trs.splice(i, 1);
                            --i;
                            continue;
                        }
                        newKeys[dataSource[parseInt(i.toString(), 10)]["" + key]] = oldKeys[this.prevCurrentView[parseInt(i.toString(), 10)]["" + key]] = i;
                        newIndexes[parseInt(i.toString(), 10)] = dataSource[parseInt(i.toString(), 10)]["" + key];
                        oldRowElements[oldRowObjs[parseInt(i.toString(), 10)].uid] = trs[parseInt(i.toString(), 10)];
                        oldIndexes[parseInt(i.toString(), 10)] = this.prevCurrentView[parseInt(i.toString(), 10)]["" + key];
                    }
                }
                else {
                    for (var i = 0; i < currentLen; i++) {
                        newKeys[dataSource[parseInt(i.toString(), 10)]["" + key]] = i;
                        newIndexes[parseInt(i.toString(), 10)] = dataSource[parseInt(i.toString(), 10)]["" + key];
                    }
                    for (var i = 0; i < prevLen; i++) {
                        if (this.parent.editSettings.mode === 'Batch'
                            && trs[parseInt(i.toString(), 10)].classList.contains('e-insertedrow')) {
                            trs.splice(i, 1);
                            --i;
                            continue;
                        }
                        oldRowElements[oldRowObjs[parseInt(i.toString(), 10)].uid] = trs[parseInt(i.toString(), 10)];
                        oldKeys[this.prevCurrentView[parseInt(i.toString(), 10)]["" + key]] = i;
                        oldIndexes[parseInt(i.toString(), 10)] = this.prevCurrentView[parseInt(i.toString(), 10)]["" + key];
                    }
                }
            }
            for (var i = 0; i < dataSource.length; i++) {
                var oldIndex = oldKeys[dataSource[parseInt(i.toString(), 10)]["" + key]];
                if (!isNullOrUndefined(oldIndex)) {
                    var isEqual = false;
                    if (this.parent.enableDeepCompare) {
                        isEqual = this.objectEqualityChecker(this.prevCurrentView[parseInt(oldIndex.toString(), 10)], dataSource[parseInt(i.toString(), 10)]);
                    }
                    var tr = oldRowElements[oldRowObjs[parseInt(oldIndex.toString(), 10)]
                        .uid];
                    newRowObjs.push(oldRowObjs[parseInt(oldIndex.toString(), 10)]);
                    if (this.rowElements[parseInt(oldIndex.toString(), 10)] && this.rowElements[parseInt(oldIndex.toString(), 10)].getAttribute('data-uid') === newRowObjs[parseInt(i.toString(), 10)].uid
                        && ((hasBatch && isNullOrUndefined(batchChangeKeys[newIndexes[parseInt(i.toString(), 10)]]))
                            || (!hasBatch && (isEqual
                                || this.prevCurrentView[parseInt(oldIndex.toString(), 10)] === dataSource[parseInt(i.toString(), 10)])))) {
                        if (oldIndex !== i) {
                            this.refreshImmutableContent(i, tr, newRowObjs[parseInt(i.toString(), 10)]);
                        }
                        tbody.appendChild(tr);
                        continue;
                    }
                    if ((hasBatch && !isNullOrUndefined(batchChangeKeys[newIndexes[parseInt(i.toString(), 10)]]))
                        || (!this.parent.enableDeepCompare
                            && dataSource[parseInt(i.toString(), 10)] !== this.prevCurrentView[parseInt(oldIndex.toString(), 10)])
                        || (this.parent.enableDeepCompare && !isEqual)) {
                        oldRowObjs[parseInt(oldIndex.toString(), 10)].setRowValue(dataSource[parseInt(i.toString(), 10)]);
                    }
                    tbody.appendChild(tr);
                    this.refreshImmutableContent(i, tr, newRowObjs[parseInt(i.toString(), 10)]);
                }
                else {
                    var row = new RowRenderer(this.serviceLocator, null, gObj);
                    var args_1 = { startIndex: i };
                    var modelData = this.generator.generateRows([dataSource[parseInt(i.toString(), 10)]], args_1);
                    newRowObjs.push(modelData[0]);
                    var tr = row.render(modelData[0], gObj.getColumns());
                    tbody.appendChild(tr);
                    this.refreshImmutableContent(i, tr, newRowObjs[parseInt(i.toString(), 10)]);
                }
            }
            this.rows = newRowObjs;
            this.rowElements = [].slice.call(tbody.children);
            remove(this.getTable().querySelector(literals.tbody));
            this.getTable().appendChild(tbody);
            this.parent.trigger(events.dataBound, {}, function () {
                if (_this.parent.allowTextWrap) {
                    _this.parent.notify(events.freezeRender, { case: 'textwrap' });
                }
            });
            if (args) {
                var action = (args.requestType || '').toLowerCase() + '-complete';
                this.parent.notify(action, args);
            }
        }
    };
    ContentRender.prototype.objectEqualityChecker = function (old, next) {
        var keys = Object.keys(old);
        var isEqual = true;
        for (var i = 0; i < keys.length; i++) {
            if (old[keys[parseInt(i.toString(), 10)]] !== next[keys[parseInt(i.toString(), 10)]]) {
                var isDate = old[keys[parseInt(i.toString(), 10)]] instanceof Date
                    && next[keys[parseInt(i.toString(), 10)]] instanceof Date;
                if (!isDate || (old[keys[parseInt(i.toString(), 10)]]
                    .getTime() !== next[keys[parseInt(i.toString(), 10)]].getTime())) {
                    isEqual = false;
                    break;
                }
            }
        }
        return isEqual;
    };
    ContentRender.prototype.getBatchEditedRecords = function (primaryKey, rows) {
        var keys = {};
        var changes = this.parent.getBatchChanges();
        var changedRecords = [];
        var addedRecords = [];
        if (Object.keys(changes).length) {
            changedRecords = changes.changedRecords;
            addedRecords = changes.addedRecords;
        }
        var args = { cancel: false };
        this.parent.notify(events.immutableBatchCancel, { rows: rows, args: args });
        if (addedRecords.length) {
            if (this.parent.editSettings.newRowPosition === 'Bottom') {
                rows.splice(rows.length - 1, addedRecords.length);
            }
            else {
                if (!args.cancel) {
                    rows.splice(0, addedRecords.length);
                }
            }
        }
        for (var i = 0; i < changedRecords.length; i++) {
            keys[changedRecords[parseInt(i.toString(), 10)]["" + primaryKey]] = i;
        }
        return keys;
    };
    ContentRender.prototype.refreshImmutableContent = function (index, tr, row) {
        row.isAltRow = this.parent.enableAltRow ? index % 2 !== 0 : false;
        if (row.isAltRow) {
            tr.classList.add('e-altrow');
        }
        else {
            tr.classList.remove('e-altrow');
        }
        row.index = index;
        row.edit = undefined;
        row.isDirty = false;
        tr.setAttribute(literals.dataRowIndex, index.toString());
        tr.setAttribute(literals.ariaRowIndex, (index + 1).toString());
        this.updateCellIndex(tr, index);
    };
    ContentRender.prototype.updateCellIndex = function (rowEle, index) {
        for (var i = 0; i < rowEle.cells.length; i++) {
            rowEle.cells[parseInt(i.toString(), 10)].setAttribute('index', index.toString());
        }
    };
    return ContentRender;
}());
export { ContentRender };
