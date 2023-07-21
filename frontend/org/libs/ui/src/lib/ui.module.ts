import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AngularMaterialModule } from '../../../angular-material/src';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './services/dialog.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { HostUrlChangerPipe } from './pipes/host-url-changer.pipe';
// TODO: Put Your Component Inside A Component Folder Exactly like The Services
@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [
    BannerComponent,
    SliderComponent,
    ConfirmDialogComponent,
    GalleryComponent,
    HostUrlChangerPipe,
  ],
  exports: [
    BannerComponent,
    SliderComponent,
    ConfirmDialogComponent,
    GalleryComponent,
    HostUrlChangerPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
