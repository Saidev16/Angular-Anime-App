import { Component, Input, OnInit } from '@angular/core';
import { AnimeInterface } from '../model/animeInterface';

@Component({
  selector: 'anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent  {

  

  @Input()
  anime!: AnimeInterface;

  @Input() animeId!: number;
}
