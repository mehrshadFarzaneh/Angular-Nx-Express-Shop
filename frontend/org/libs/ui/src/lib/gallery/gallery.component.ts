import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  selectedImageUrl!: string;

  @Input() images!: string[];

  ngOnInit(): void {
    if (this.hasImages) {
      this.selectedImageUrl = this.images[0];
    }
  }

  changeSelectedImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  get hasImages() {
    return this.images?.length > 0;
  }
}
