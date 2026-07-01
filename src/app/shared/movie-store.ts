import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movies/shared/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieStore {

    #http = inject(HttpClient)
    #apiUrl = 'http://localhost:3000';

    getAll(): Observable<Movie[]> {
        return this.#http.get<Movie[]>(this.#apiUrl + '/movies');
    }
}
