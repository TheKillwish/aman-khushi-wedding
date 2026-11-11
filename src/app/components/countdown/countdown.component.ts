
import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'ak-countdown',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {

  // Wedding date: 24 November 2026, midnight IST
  private readonly weddingDate =
    new Date('2026-11-24T19:00:00+05:30').getTime();

  private timerId?: ReturnType<typeof setInterval>;

  // Reactive current time
  private readonly currentTime = signal(Date.now());

  // Calculate remaining milliseconds
  private readonly remainingTime = computed(() =>
    Math.max(0, this.weddingDate - this.currentTime())
  );

  // Individual countdown values
  readonly days = computed(() =>
    Math.floor(this.remainingTime() / 86_400_000)
  );

  readonly hours = computed(() =>
    Math.floor((this.remainingTime() % 86_400_000) / 3_600_000)
  );

  readonly minutes = computed(() =>
    Math.floor((this.remainingTime() % 3_600_000) / 60_000)
  );

  readonly seconds = computed(() =>
    Math.floor((this.remainingTime() % 60_000) / 1000)
  );

  // Check whether wedding date has arrived
  readonly weddingStarted = computed(() =>
    this.remainingTime() === 0
  );

  ngOnInit(): void {

    // Initial calculation
    this.updateCountdown();

    // Update every second without page refresh
    this.timerId = setInterval(() => {
      this.updateCountdown();
    }, 1000);

    // Recalculate when user returns to the browser tab
    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
  }

  private updateCountdown(): void {
    this.currentTime.set(Date.now());
  }

  private handleVisibilityChange = (): void => {
    if (!document.hidden) {
      this.updateCountdown();
    }
  };

  ngOnDestroy(): void {

    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
  }
}
