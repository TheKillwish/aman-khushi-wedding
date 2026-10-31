import { Component } from '@angular/core';
import {inject } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
interface WeddingEvent {
  number: string;
  day: string;
  date: string;
  month: string;
  title: string;
  hindi: string;
  description: string;
  time: string;
  location: string;
  address: string;
  mapUrl: SafeResourceUrl;
  directionsUrl: string;
}
@Component({ selector:'ak-wedding-events', standalone:true, templateUrl:'./wedding-events.component.html', styleUrl:'./wedding-events.component.scss' })
export class WeddingEventsComponent {

  private readonly sanitizer = inject(DomSanitizer);

  // Home Google Maps embed URL
  private readonly homeMapUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.40229981529296!2d86.5046468958347!3d25.323119827307686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1793441911867!5m2!1sen!2sin';

  // Shree Banquet Hall map
  private readonly banquetMapUrl =
    'https://www.google.com/maps?q=Shree+Banquet+Hall,+Mannat+Complex,+Near+Ambey+Chowk,+Dilawer+Pur,+Munger,+Bihar+811201&output=embed';

  // Convert a Google Maps URL to Angular SafeResourceUrl
  private trustMapUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  readonly events: WeddingEvent[] = [

    {
      number: '01',
      day: 'SUN',
      date: '22',
      month: 'NOVEMBER 2026',
      title: 'Haldi & Mehendi',
      hindi: 'हल्दी एवं मेहंदी',
      description:
        'A joyful beginning filled with colours, traditions and family celebrations.',
      time: 'As per family invitation',
      location: 'At Our Residence',
      address: 'Mungerora, Jamalpur, Munger, Bihar – 811214',
      mapUrl: this.trustMapUrl(this.homeMapUrl),
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=25.323119827307686,86.5046468958347'
    },

    {
      number: '02',
      day: 'MON',
      date: '23',
      month: 'NOVEMBER 2026',
      title: 'Mandap Pujan & Ghritdhari',
      hindi: 'मंडप पूजन एवं घृतधारी',
      description:
        'An auspicious day of rituals, blessings and sacred traditions.',
      time: 'As per family invitation',
      location: 'At Our Residence',
      address: 'Mungerora, Jamalpur, Munger, Bihar – 811214',
      mapUrl: this.trustMapUrl(this.homeMapUrl),
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=25.323119827307686,86.5046468958347'
    },

    {
      number: '03',
      day: 'TUE',
      date: '24',
      month: 'NOVEMBER 2026',
      title: 'Shubh Vivah',
      hindi: 'शुभ विवाह',
      description:
        'With the arrival of the baraat, join us as we celebrate the beginning of forever.',
      time: 'Baraat departure: 7:00 PM · Preeti Bhoj: 8:00 PM onwards',
      location: 'Shree Banquet Hall',
      address:
        'Mannat Complex, Near Ambey Chowk, Dilawer Pur, Munger, Bihar – 811201',
      mapUrl: this.trustMapUrl(this.banquetMapUrl),
      directionsUrl:
        'https://www.google.com/maps/search/?api=1&query=Shree+Banquet+Hall+Mannat+Complex+Dilawer+Pur+Munger+Bihar+811201'
    }

  ];
}
