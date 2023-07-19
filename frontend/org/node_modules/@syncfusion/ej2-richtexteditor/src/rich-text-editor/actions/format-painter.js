import { addClass, isNullOrUndefined as isNOU, removeClass } from '@syncfusion/ej2-base';
import * as events from '../base/constant';
var FormatPainter = /** @class */ (function () {
    function FormatPainter(parent) {
        this.isSticky = false;
        this.isActive = false;
        this.parent = parent;
        this.addEventListener();
    }
    FormatPainter.prototype.addEventListener = function () {
        this.parent.on(events.formatPainterClick, this.toolbarClick, this);
        this.parent.on(events.formatPainterDoubleClick, this.toolbarDoubleClick, this);
        this.parent.on(events.editAreaClick, this.editAreaClick, this);
        this.parent.on(events.keyDown, this.onKeyDown, this);
        this.parent.on(events.destroy, this.destroy, this);
    };
    FormatPainter.prototype.toolbarClick = function (clickargs) {
        this.parent.focusIn();
        if (!this.isSticky) {
            this.isActive = true;
            this.actionHandler(clickargs, 'click');
        }
        else {
            // Handling the format painter double click toolbar esape action
            clickargs.args.action = 'escape';
            this.actionHandler(clickargs, 'keyBoard');
        }
    };
    FormatPainter.prototype.toolbarDoubleClick = function (args) {
        this.isActive = true;
        this.isSticky = true;
        this.parent.focusIn();
        this.actionHandler(args, 'dbClick');
    };
    FormatPainter.prototype.onKeyDown = function (event) {
        var originalEvent = event.args;
        if ((originalEvent.altKey && originalEvent.shiftKey && (originalEvent.action === 'format-copy' || originalEvent.action === 'format-paste'))
            || (originalEvent.action === 'escape' && (this.previousAction === 'format-copy' || this.previousAction === 'format-paste'))) {
            if ((originalEvent.action === 'format-copy' || originalEvent.action === 'format-paste')) {
                originalEvent.stopPropagation();
            }
            this.actionHandler(event, 'keyBoard');
        }
    };
    FormatPainter.prototype.actionHandler = function (event, type) {
        var action;
        var isKeyboard = false;
        var originalEvent;
        var args;
        var item;
        switch (type) {
            case 'dbClick':
                args = event.args;
                item = args.item;
                originalEvent = event.args.originalEvent;
                action = 'format-copy';
                break;
            case 'keyBoard':
                args = null;
                originalEvent = event.args;
                isKeyboard = true;
                action = event.args.action;
                if (action === 'escape') {
                    this.isSticky = false;
                    this.isActive = false;
                }
                break;
            case 'click':
                args = event.args;
                item = args.item;
                originalEvent = event.args.originalEvent;
                action = 'format-copy';
                break;
            case 'docClick':
                originalEvent = event;
                action = 'format-paste';
                break;
        }
        this.updateCursor(isKeyboard);
        var enable = type === 'docClick' || action === 'escape' ? false : true;
        this.updateToolbarBtn(enable);
        if (isNOU(item)) {
            item = {
                command: 'FormatPainter',
                subCommand: 'FormatPainter'
            };
        }
        var actionBeginArgs = {
            requestType: 'FormatPainter', originalEvent: originalEvent, name: action, item: item
        };
        var value = {
            formatPainterAction: action
        };
        this.parent.formatter.process(this.parent, actionBeginArgs, originalEvent, value);
        this.previousAction = action;
    };
    FormatPainter.prototype.updateCursor = function (isKeyboard) {
        if (!this.parent.inputElement.classList.contains('e-rte-cursor-brush') && !isKeyboard) {
            addClass([this.parent.inputElement], 'e-rte-cursor-brush');
        }
        else if (!this.isSticky) {
            removeClass([this.parent.inputElement], 'e-rte-cursor-brush');
        }
    };
    FormatPainter.prototype.updateToolbarBtn = function (enable) {
        var toolbarBtn = this.parent.element.querySelector('.e-rte-format-painter').parentElement.parentElement;
        if (enable) {
            addClass([toolbarBtn], 'e-active');
        }
        else if (!this.isSticky) {
            removeClass([toolbarBtn], 'e-active');
        }
    };
    FormatPainter.prototype.editAreaClick = function (args) {
        if (this.isActive) {
            if (!this.isSticky) {
                this.isActive = false;
            }
            this.actionHandler(args, 'docClick');
            this.updateToolbarBtn(false);
        }
    };
    FormatPainter.prototype.destroy = function () {
        if (isNOU(this.parent) || this.parent.isDestroyed) {
            return;
        }
        this.parent.off(events.formatPainterClick, this.toolbarClick);
        this.parent.off(events.editAreaClick, this.editAreaClick);
        this.parent.off(events.formatPainterDoubleClick, this.toolbarDoubleClick);
        this.parent.off(events.keyDown, this.onKeyDown);
        this.parent.off(events.destroy, this.destroy);
        if (!isNOU(this.parent.formatter.editorManager.formatPainterEditor)) {
            this.parent.formatter.editorManager.formatPainterEditor.destroy();
        }
        this.parent = undefined;
        this.isSticky = undefined;
        this.isActive = undefined;
        this.previousAction = undefined;
    };
    /**
     * For internal use only - Get the module name.
     *
     * @returns {void}
     * @hidden
     */
    FormatPainter.prototype.getModuleName = function () {
        return 'formatPainter';
    };
    return FormatPainter;
}());
export { FormatPainter };
