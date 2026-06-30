import { Component, input, output } from '@angular/core';
import { Movie } from '../shared/movie';
import { RatingDisplay } from "../rating-display/rating-display";

@Component({
  selector: 'app-movie-card',
  imports: [RatingDisplay],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  readonly movie = input.required<Movie>();

  // Output: hier fliessen die Daten zum Parent Component
  // von unten gegen oben
  readonly rateUp = output<Movie>();
  readonly rateDown = output<Movie>();

  doRateUp() {
    this.rateUp.emit(this.movie());
  }

  doRateDown() {
    this.rateDown.emit(this.movie());
  }

  readonly maxRating = input<number>(5);
  readonly minRating = input<number>(1);

}
