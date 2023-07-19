import * as CONSTANT from './../base/constant';
/**
 * Link internal component
 *
 * @hidden

 */
var MDInsertText = /** @class */ (function () {
    /**
     * Constructor for creating the insert text plugin
     *
     * @param {MarkdownParser} parent - specifies the parent element
     * @hidden

     */
    function MDInsertText(parent) {
        this.parent = parent;
        this.selection = this.parent.markdownSelection;
        this.addEventListener();
    }
    MDInsertText.prototype.addEventListener = function () {
        this.parent.observer.on(CONSTANT.INSERT_TEXT_COMMAND, this.InsertTextExec, this);
    };
    MDInsertText.prototype.InsertTextExec = function (e) {
        var textArea = this.parent.element;
        textArea.focus();
        var start = textArea.selectionStart;
        var end = textArea.selectionEnd;
        var text = e.value.text;
        var startOffset = start + text.length;
        var endOffset = end + text.length;
        textArea.value = textArea.value.substr(0, start)
            + text + textArea.value.substr(end, textArea.value.length);
        this.parent.markdownSelection.setSelection(textArea, startOffset, endOffset);
        this.restore(textArea, startOffset, endOffset, e);
    };
    MDInsertText.prototype.restore = function (textArea, start, end, event) {
        this.selection.save(start, end);
        this.selection.restore(textArea);
        if (event && event.callBack) {
            event.callBack({
                requestType: event.subCommand,
                selectedText: this.selection.getSelectedText(textArea),
                editorMode: 'Markdown',
                event: event.event
            });
        }
    };
    return MDInsertText;
}());
export { MDInsertText };
