import { NgModule } from '@angular/core';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { AeButtonComponent } from "./ae-button/ae-button.component";
import { AeToolbarSetComponent } from './ae-toolbar-set/ae-toolbar-set.component';
import * as i0 from "@angular/core";
export class AngularEditorModule {
}
AngularEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AngularEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AngularEditorModule, declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent] });
AngularEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AngularEditorModule, imports: [[
            CommonModule, FormsModule, ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AngularEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule, FormsModule, ReactiveFormsModule
                    ],
                    declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
                    exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3Ivc3JjL2xpYi9hbmd1bGFyLWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQVNsRixNQUFNLE9BQU8sbUJBQW1COztpSEFBbkIsbUJBQW1CO2tIQUFuQixtQkFBbUIsaUJBSGYsc0JBQXNCLEVBQUUsNkJBQTZCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLGFBRi9ILFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLGFBR3RDLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQjtrSEFFOUYsbUJBQW1CLFlBTnJCO1lBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7U0FDL0M7NEZBSVUsbUJBQW1CO2tCQVAvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtxQkFDL0M7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7b0JBQ2xJLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2lCQUMzRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRWRpdG9yQ29tcG9uZW50fSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQge0FuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2FlLXNlbGVjdC9hZS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7QWVCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2FlLWJ1dHRvbi9hZS1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZVRvb2xiYXJTZXRDb21wb25lbnQgfSBmcm9tICcuL2FlLXRvb2xiYXItc2V0L2FlLXRvb2xiYXItc2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50LCBBZVNlbGVjdENvbXBvbmVudCwgQWVCdXR0b25Db21wb25lbnQsIEFlVG9vbGJhclNldENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyRWRpdG9yQ29tcG9uZW50LCBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudCwgQWVCdXR0b25Db21wb25lbnQsIEFlVG9vbGJhclNldENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvck1vZHVsZSB7XG59XG4iXX0=