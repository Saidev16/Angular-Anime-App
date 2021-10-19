import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AnimeListComponent},
  {path: 'anime/:id', component: AnimeProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
