import { createElement, isNullOrUndefined as isNOU, detach, addClass, Browser, formatUnit } from '@syncfusion/ej2-base';
import * as CONSTANT from './../base/constant';
import * as classes from './../base/classes';
import { InsertHtml } from './inserthtml';
/**
 * Video internal component
 *
 * @hidden

 */
var VideoCommand = /** @class */ (function () {
    /**
     * Constructor for creating the Video plugin
     *
     * @param {EditorManager} parent - specifies the parent element
     * @hidden

     */
    function VideoCommand(parent) {
        this.parent = parent;
        this.addEventListener();
    }
    VideoCommand.prototype.addEventListener = function () {
        this.parent.observer.on(CONSTANT.VIDEO, this.videoCommand, this);
    };
    /**
     * videoCommand method
     *
     * @param {IHtmlItem} e - specifies the element
     * @returns {void}
     * @hidden

     */
    VideoCommand.prototype.videoCommand = function (e) {
        var selectNode;
        var videoWrapNode;
        var videoClickElem;
        var value = e.value.toString().toLowerCase();
        if (value !== 'video' && value !== 'videoreplace') {
            selectNode = e.item.selectNode[0];
            videoWrapNode = selectNode.closest('.' + classes.CLASS_EMBED_VIDEO_WRAP);
            videoClickElem = selectNode.closest('.' + classes.CLASS_VIDEO_CLICK_ELEM);
        }
        switch (value) {
            case 'video':
            case 'videoreplace':
                this.createVideo(e);
                break;
            case 'videodimension':
                this.videoDimension(e);
                break;
            case 'inline':
                selectNode.removeAttribute('class');
                if (videoWrapNode) {
                    videoWrapNode.style.display = 'inline-block';
                }
                if (videoClickElem) {
                    selectNode.parentElement.style.cssFloat = '';
                }
                addClass([selectNode], [classes.CLASS_VIDEO, classes.CLASS_VIDEO_INLINE, classes.CLASS_VIDEO_FOCUS]);
                this.callBack(e);
                break;
            case 'break':
                selectNode.removeAttribute('class');
                if (videoWrapNode) {
                    videoWrapNode.style.display = 'block';
                }
                if (videoClickElem) {
                    selectNode.parentElement.style.cssFloat = '';
                }
                addClass([selectNode], [classes.CLASS_VIDEO_BREAK, classes.CLASS_VIDEO, classes.CLASS_VIDEO_FOCUS]);
                this.callBack(e);
                break;
            case 'justifyleft':
                selectNode.removeAttribute('class');
                if (videoWrapNode) {
                    videoWrapNode.style.display = 'block';
                }
                if (videoClickElem) {
                    selectNode.parentElement.style.cssFloat = 'left';
                }
                addClass([selectNode], [classes.CLASS_VIDEO, classes.CLASS_VIDEO_LEFT]);
                this.callBack(e);
                break;
            case 'justifycenter':
                selectNode.removeAttribute('class');
                if (videoWrapNode) {
                    videoWrapNode.style.display = 'block';
                }
                if (videoClickElem) {
                    selectNode.parentElement.style.cssFloat = '';
                }
                addClass([selectNode], [classes.CLASS_VIDEO, classes.CLASS_VIDEO_CENTER]);
                this.callBack(e);
                break;
            case 'justifyright':
                selectNode.removeAttribute('class');
                if (videoWrapNode) {
                    videoWrapNode.style.display = 'block';
                }
                if (videoClickElem) {
                    selectNode.parentElement.style.cssFloat = 'right';
                }
                addClass([selectNode], [classes.CLASS_VIDEO, classes.CLASS_VIDEO_RIGHT]);
                this.callBack(e);
                break;
            case 'videoremove':
                detach(selectNode.parentElement);
                this.callBack(e);
                break;
        }
    };
    VideoCommand.prototype.createVideo = function (e) {
        var _this = this;
        var isReplaced = false;
        var wrapElement;
        var vidElement;
        var sourceElement;
        if (e.value === 'VideoReplace' && !isNOU(e.item.selectParent) && (e.item.selectParent[0].tagName === 'VIDEO')) {
            var videoEle = e.item.selectParent[0].querySelector('source');
            this.setStyle(videoEle, e, videoEle);
            isReplaced = true;
        }
        else if (e.value === 'VideoReplace' && !isNOU(e.item.selectParent) &&
            e.item.selectParent[0].classList &&
            e.item.selectParent[0].classList.contains(classes.CLASS_VIDEO_CLICK_ELEM)) {
            e.item.selectParent[0].innerHTML = e.item.fileName;
            this.setStyle(e.item.selectParent[0].firstElementChild, e, e.item.selectParent[0].firstElementChild);
        }
        else {
            if (!e.item.isEmbedUrl) {
                wrapElement = createElement('span', { className: classes.CLASS_VIDEO_WRAP, attrs: { contentEditable: 'false', title: e.item.fileName } });
                vidElement = createElement('video', { className: classes.CLASS_VIDEO + ' ' + classes.CLASS_VIDEO_INLINE, attrs: { controls: '' } });
                sourceElement = createElement('source');
                this.setStyle(sourceElement, e, vidElement);
                vidElement.appendChild(sourceElement);
                wrapElement.appendChild(vidElement);
            }
            else {
                wrapElement = createElement('span', { className: classes.CLASS_EMBED_VIDEO_WRAP, attrs: { contentEditable: 'false' } });
                var clickElement = createElement('span', { className: classes.CLASS_VIDEO_CLICK_ELEM });
                var temp = createElement('template');
                temp.innerHTML = e.item.fileName;
                clickElement.appendChild(temp.content);
                vidElement = sourceElement = clickElement.firstElementChild;
                this.setStyle(sourceElement, e, vidElement);
                wrapElement.appendChild(clickElement);
            }
            if (!isNOU(e.item.selection)) {
                e.item.selection.restore();
            }
            InsertHtml.Insert(this.parent.currentDocument, wrapElement, this.parent.editableElement);
            if (wrapElement.nextElementSibling === null) {
                var insertElem = createElement('br');
                wrapElement.parentNode.insertBefore(insertElem, wrapElement.nextSibling);
            }
        }
        if (e.callBack && (isNOU(e.selector) || !isNOU(e.selector) && e.selector !== 'pasteCleanupModule')) {
            var selectedNode = this.parent.nodeSelection.getSelectedNodes(this.parent.currentDocument)[0];
            var videoElm_1 = (e.value === 'VideoReplace' || isReplaced) ? !e.item.isEmbedUrl ? e.item.selectParent[0] : e.item.selectParent[0].querySelector('iframe')
                : (Browser.isIE ? selectedNode : !e.item.isEmbedUrl ? selectedNode.lastElementChild : selectedNode.querySelector('iframe'));
            videoElm_1.addEventListener(videoElm_1.tagName !== 'IFRAME' ? 'loadeddata' : 'load', function () {
                if (e.value !== 'VideoReplace' || !isReplaced) {
                    if (e.item.isEmbedUrl && videoElm_1) {
                        videoElm_1.classList.add('e-rte-embed-url');
                    }
                    e.callBack({
                        requestType: 'Videos',
                        editorMode: 'HTML',
                        event: e.event,
                        range: _this.parent.nodeSelection.getRange(_this.parent.currentDocument),
                        elements: [videoElm_1]
                    });
                }
            });
            if (isReplaced) {
                videoElm_1.load();
            }
            if (Browser.userAgent.indexOf('Firefox') !== -1) {
                vidElement.addEventListener('play', function () { _this.editAreaVideoClick(e); });
                vidElement.addEventListener('pause', function () { _this.editAreaVideoClick(e); });
            }
        }
    };
    VideoCommand.prototype.editAreaVideoClick = function (e) {
        e.callBack({
            requestType: 'VideosPlayPause',
            editorMode: 'HTML',
            event: e.event
        });
    };
    VideoCommand.prototype.setStyle = function (sourceElement, e, videoEle) {
        if (e.item.url !== '' && !isNOU(e.item.url)) {
            sourceElement.setAttribute('src', e.item.url);
        }
        if (!e.item.isEmbedUrl) {
            sourceElement.type = e.item.fileName && e.item.fileName.split('.').length > 0 ?
                'video/' + e.item.fileName.split('.')[e.item.fileName.split('.').length - 1] :
                e.item.url && e.item.url.split('.').length > 0 ? 'video/' + e.item.url.split('.')[e.item.url.split('.').length - 1] : '';
        }
        if (!isNOU(e.item.width) && !isNOU(e.item.width.width)) {
            videoEle.setAttribute('width', formatUnit(e.item.width.width));
        }
        if (!isNOU(e.item.height) && !isNOU(e.item.height.height)) {
            videoEle.setAttribute('height', formatUnit(e.item.height.height));
        }
        if (!isNOU(e.item.width) && !isNOU(e.item.width.minWidth)) {
            videoEle.style.minWidth = formatUnit(e.item.width.minWidth);
        }
        if (!isNOU(e.item.width) && !isNOU(e.item.width.maxWidth)) {
            videoEle.style.maxWidth = formatUnit(e.item.width.maxWidth);
        }
        if (!isNOU(e.item.height) && !isNOU(e.item.height.minHeight)) {
            videoEle.style.minHeight = formatUnit(e.item.height.minHeight);
        }
        if (!isNOU(e.item.height) && !isNOU(e.item.height.maxHeight)) {
            videoEle.style.maxHeight = formatUnit(e.item.height.maxHeight);
        }
    };
    VideoCommand.prototype.videoDimension = function (e) {
        var selectNode = !(e.item.selectNode[0].classList.contains(classes.CLASS_VIDEO_CLICK_ELEM)) ? e.item.selectNode[0] :
            e.item.selectNode[0].querySelector('iframe');
        selectNode.style.height = '';
        selectNode.style.width = '';
        if (e.item.width !== 'auto') {
            selectNode.style.width = formatUnit(e.item.width);
        }
        else {
            selectNode.removeAttribute('width');
        }
        if (e.item.height !== 'auto') {
            selectNode.style.height = formatUnit(e.item.height);
        }
        else {
            selectNode.removeAttribute('height');
        }
        this.callBack(e);
    };
    VideoCommand.prototype.callBack = function (e) {
        if (e.callBack) {
            e.callBack({
                requestType: e.item.subCommand,
                editorMode: 'HTML',
                event: e.event,
                range: this.parent.nodeSelection.getRange(this.parent.currentDocument),
                elements: this.parent.nodeSelection.getSelectedNodes(this.parent.currentDocument)
            });
        }
    };
    return VideoCommand;
}());
export { VideoCommand };
