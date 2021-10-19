import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeCardComponent,
    AnimeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
