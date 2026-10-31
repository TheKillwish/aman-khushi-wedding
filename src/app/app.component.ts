import { Component } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { EngagementGalleryComponent } from './components/engagement-gallery/engagement-gallery.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { WeddingEventsComponent } from './components/wedding-events/wedding-events.component';
import { BaraatComponent } from './components/baraat/baraat.component';
import { VenueMapComponent } from './components/venue-map/venue-map.component';
import { ClosingInvitationComponent } from './components/closing-invitation/closing-invitation.component';

@Component({
  selector: 'ak-root',
  standalone: true,
  imports: [WelcomeComponent, OurStoryComponent, EngagementGalleryComponent, CountdownComponent, WeddingEventsComponent, BaraatComponent, VenueMapComponent, ClosingInvitationComponent],
  template: `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Aman and Khushi home">A <span>♥</span> K</a>
      <nav aria-label="Main navigation">
        <a href="#story">Our Story</a><a href="#events">Celebrations</a><a href="#venue">Venue</a>
      </nav>
      <a class="header-cta" href="#venue">Join us <span>↗</span></a>
    </header>
    <main>
      <ak-welcome />
      <ak-our-story />
      <ak-engagement-gallery />
      <ak-countdown />
      <ak-wedding-events />
      <ak-baraat />
      <ak-venue-map />
      <ak-closing-invitation />
    </main>
    <footer class="site-footer"><span>MADE WITH LOVE</span><span>Aman & Khushi · 2026</span><span>♥</span></footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}
