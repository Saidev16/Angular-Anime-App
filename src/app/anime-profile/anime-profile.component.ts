import { AnimeService } from './../anime.service';
import { AnimeInterface } from './../model/animeInterface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import {ActivatedRoute , Router } from '@angular/router';



@Component({
  selector: 'anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.css']
})
export class AnimeProfileComponent implements OnInit {

  anime!: AnimeInterface;
  animeSubscription!: Subscription;


  constructor( 
    private animeService: AnimeService,
    private location:Location,
    private route: ActivatedRoute
   ) { 

  }

  ngOnInit(): void {
    this.getAnime();
  }

  //store the comment
  addComment( comment:string ){
    if(comment){
      this.anime.comments.push(comment);
    }
  }

  // fetch the anime profile using a service
  getAnime(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.animeSubscription = this.animeService.getAnime(id)
      .subscribe(anime => this.anime = anime);


  }

  // go back
  goBack():void {
    this.location.back();
  }

}
