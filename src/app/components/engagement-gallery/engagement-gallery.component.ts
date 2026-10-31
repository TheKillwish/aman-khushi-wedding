import { Component, HostListener } from '@angular/core';

@Component({ selector:'ak-engagement-gallery', standalone:true, templateUrl:'./engagement-gallery.component.html', styleUrl:'./engagement-gallery.component.scss' })
export class EngagementGalleryComponent {

  photos = [1, 2, 3, 4, 5, 6];

  activePhoto: number | null = null;

  openPhoto(photo: number): void {
    this.activePhoto = photo;
    document.body.style.overflow = 'hidden';
  }

  closePhoto(): void {
    this.activePhoto = null;
    document.body.style.overflow = '';
  }

  showPrevious(): void {
    if (this.activePhoto === null) return;

    this.activePhoto =
      this.activePhoto === 1
        ? this.photos.length
        : this.activePhoto - 1;
  }

  showNext(): void {
    if (this.activePhoto === null) return;

    this.activePhoto =
      this.activePhoto === this.photos.length
        ? 1
        : this.activePhoto + 1;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closePhoto();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.activePhoto !== null) {
      this.showPrevious();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.activePhoto !== null) {
      this.showNext();
    }
  }
}
