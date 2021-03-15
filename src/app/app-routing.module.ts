import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ArticlesComponent } from './articles/articles.component';
import { BabylonComponent } from './babylon/babylon.component';

import { HubbleNewsComponent } from './hubble-news/hubble-news.component';
import { HubbleImagesComponent } from './hubble-images/hubble-images.component';
import { HubbleVideosComponent } from './hubble-videos/hubble-videos.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'hubble-news', component: HubbleNewsComponent },
  { path: 'hubble-images', component: HubbleImagesComponent },
  { path: 'hubble-videos', component: HubbleVideosComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'babylon', component: BabylonComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:  'about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
