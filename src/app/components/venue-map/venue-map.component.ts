import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({ selector:'ak-venue-map', standalone:true, templateUrl:'./venue-map.component.html', styleUrl:'./venue-map.component.scss' })
export class VenueMapComponent {
  readonly venueAddress = 'Shree Banquet Hall, Mannat Complex, near Ambey Chowk, Dilawer Pur, Munger, Bihar 811201';
  readonly mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.venueAddress);
  readonly embedUrl: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(this.venueAddress) + '&output=embed';
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
