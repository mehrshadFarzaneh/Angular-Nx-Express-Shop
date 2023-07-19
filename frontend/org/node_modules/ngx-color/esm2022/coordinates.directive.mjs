import { Directive, HostListener, NgModule, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
class CoordinatesDirective {
    el;
    coordinatesChange = new Subject();
    mousechange = new Subject();
    mouseListening = false;
    sub;
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.1", type: CoordinatesDirective, selector: "[ngx-color-coordinates]", outputs: { coordinatesChange: "coordinatesChange" }, host: { listeners: { "window:mousemove": "mousemove($event,$event.pageX,$event.pageY)", "window:touchmove": "mousemove($event,$event.touches[0].clientX,$event.touches[0].clientY,true)", "window:mouseup": "mouseup()", "window:touchend": "mouseup()", "mousedown": "mousedown($event,$event.pageX,$event.pageY)", "touchstart": "mousedown($event,$event.touches[0].clientX,$event.touches[0].clientY,true)" } }, ngImport: i0 });
}
export { CoordinatesDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngx-color-coordinates]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { coordinatesChange: [{
                type: Output
            }], mousemove: [{
                type: HostListener,
                args: ['window:mousemove', ['$event', '$event.pageX', '$event.pageY']]
            }, {
                type: HostListener,
                args: ['window:touchmove', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY',
                        'true',
                    ]]
            }], mouseup: [{
                type: HostListener,
                args: ['window:mouseup']
            }, {
                type: HostListener,
                args: ['window:touchend']
            }], mousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event', '$event.pageX', '$event.pageY']]
            }, {
                type: HostListener,
                args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY',
                        'true',
                    ]]
            }] } });
class CoordinatesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, declarations: [CoordinatesDirective], exports: [CoordinatesDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule });
}
export { CoordinatesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: CoordinatesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CoordinatesDirective],
                    exports: [CoordinatesDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jb29yZGluYXRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osUUFBUSxFQUdSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFdEQsTUFDYSxvQkFBb0I7SUFtRFg7SUFqRHBCLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQVEzQixDQUFDO0lBQ0csV0FBVyxHQUFHLElBQUksT0FBTyxFQUs3QixDQUFDO0lBRUcsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUN2QixHQUFHLENBQWdCO0lBUTNCLFNBQVMsQ0FBQyxNQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFPLEdBQUcsS0FBSztRQUM1RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQVFELFNBQVMsQ0FBQyxNQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFPLEdBQUcsS0FBSztRQUM1RCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsSUFBSTtRQUNILDhDQUE4QztRQUM5QyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0Q7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYSxFQUFFLE9BQWdCO1FBQ2hFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN6RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDM0QsTUFBTSxJQUFJLEdBQ1IsQ0FBQztZQUNELENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUVoRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQixDQUFDO1lBQ0QsQ0FBQztZQUNELEdBQUc7WUFDSCxJQUFJO1lBQ0osY0FBYztZQUNkLGVBQWU7WUFDZixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1R0F0RlUsb0JBQW9COzJGQUFwQixvQkFBb0I7O1NBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQURoQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2lHQUdoRCxpQkFBaUI7c0JBRGhCLE1BQU07Z0JBMEJQLFNBQVM7c0JBUFIsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDOztzQkFDM0UsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRTt3QkFDaEMsUUFBUTt3QkFDUiwyQkFBMkI7d0JBQzNCLDJCQUEyQjt3QkFDM0IsTUFBTTtxQkFDUDtnQkFTRCxPQUFPO3NCQUZOLFlBQVk7dUJBQUMsZ0JBQWdCOztzQkFDN0IsWUFBWTt1QkFBQyxpQkFBaUI7Z0JBVy9CLFNBQVM7c0JBUFIsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQzs7c0JBQ3BFLFlBQVk7dUJBQUMsWUFBWSxFQUFFO3dCQUMxQixRQUFRO3dCQUNSLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQixNQUFNO3FCQUNQOztBQTZDSCxNQUlhLGlCQUFpQjt1R0FBakIsaUJBQWlCO3dHQUFqQixpQkFBaUIsaUJBN0ZqQixvQkFBb0IsYUFBcEIsb0JBQW9CO3dHQTZGcEIsaUJBQWlCOztTQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFKN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE5nTW9kdWxlLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25neC1jb2xvci1jb29yZGluYXRlc10nIH0pXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBjb29yZGluYXRlc0NoYW5nZSA9IG5ldyBTdWJqZWN0PHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICAgIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICAgICRldmVudDogYW55O1xuICB9PigpO1xuICBwcml2YXRlIG1vdXNlY2hhbmdlID0gbmV3IFN1YmplY3Q8e1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgJGV2ZW50OiBhbnk7XG4gICAgaXNUb3VjaDogYm9vbGVhbjtcbiAgfT4oKTtcblxuICBwcml2YXRlIG1vdXNlTGlzdGVuaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgc3ViPzogU3Vic2NyaXB0aW9uO1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2Vtb3ZlJywgWyckZXZlbnQnLCAnJGV2ZW50LnBhZ2VYJywgJyRldmVudC5wYWdlWSddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6dG91Y2htb3ZlJywgW1xuICAgICckZXZlbnQnLFxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRYJyxcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WScsXG4gICAgJ3RydWUnLFxuICBdKVxuICBtb3VzZW1vdmUoJGV2ZW50OiBFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGlzVG91Y2ggPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLm1vdXNlTGlzdGVuaW5nKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMubW91c2VjaGFuZ2UubmV4dCh7ICRldmVudCwgeCwgeSwgaXNUb3VjaCB9KTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6dG91Y2hlbmQnKVxuICBtb3VzZXVwKCkge1xuICAgIHRoaXMubW91c2VMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCcsICckZXZlbnQucGFnZVgnLCAnJGV2ZW50LnBhZ2VZJ10pXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbXG4gICAgJyRldmVudCcsXG4gICAgJyRldmVudC50b3VjaGVzWzBdLmNsaWVudFgnLFxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRZJyxcbiAgICAndHJ1ZScsXG4gIF0pXG4gIG1vdXNlZG93bigkZXZlbnQ6IEV2ZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgaXNUb3VjaCA9IGZhbHNlKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5tb3VzZUxpc3RlbmluZyA9IHRydWU7XG4gICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHsgJGV2ZW50LCB4LCB5LCBpc1RvdWNoIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMubW91c2VjaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICAvLyBsaW1pdCB0aW1lcyBpdCBpcyB1cGRhdGVkIGZvciB0aGUgc2FtZSBhcmVhXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwLCBxKSA9PiBwLnggPT09IHEueCAmJiBwLnkgPT09IHEueSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKG4gPT4gdGhpcy5oYW5kbGVDaGFuZ2Uobi54LCBuLnksIG4uJGV2ZW50LCBuLmlzVG91Y2gpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViPy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHg6IG51bWJlciwgeTogbnVtYmVyLCAkZXZlbnQ6IEV2ZW50LCBpc1RvdWNoOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBsZWZ0ID1cbiAgICAgIHggLVxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KTtcbiAgICBsZXQgdG9wID0geSAtIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICBpZiAoIWlzVG91Y2gpIHtcbiAgICAgIHRvcCA9IHRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG4gICAgdGhpcy5jb29yZGluYXRlc0NoYW5nZS5uZXh0KHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgdG9wLFxuICAgICAgbGVmdCxcbiAgICAgIGNvbnRhaW5lcldpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgJGV2ZW50LFxuICAgIH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Nvb3JkaW5hdGVzRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0Nvb3JkaW5hdGVzRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNNb2R1bGUge31cbiJdfQ==