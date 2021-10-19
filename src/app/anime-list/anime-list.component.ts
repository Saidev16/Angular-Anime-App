import { Component, OnInit } from '@angular/core';
import { ANIME } from 'src/db-data';

@Component({
  selector: 'anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animes = ANIME;

}
