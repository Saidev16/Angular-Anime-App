import { AnimeInterface } from './model/animeInterface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ANIME } from 'src/db-data';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() { }
  getAnime(id:number):Observable<AnimeInterface | undefined >  {
    return of( ANIME.find( anime=>anime.id === id+1 ) );
  }
}
