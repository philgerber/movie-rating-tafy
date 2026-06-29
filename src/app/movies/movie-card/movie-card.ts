import { Component, input } from '@angular/core';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  readonly movie = input.required<Movie>();
}
