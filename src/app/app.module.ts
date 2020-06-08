import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VideosComponent } from './videos/videos.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BabylonComponent } from './babylon/babylon.component';
import { HubbleImagesComponent } from './hubble-images/hubble-images.component';
import { HubbleNewsComponent } from './hubble-news/hubble-news.component';
import { HubbleVideosComponent } from './hubble-videos/hubble-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PicturesComponent,
    VideosComponent,
    AboutComponent,
    NavbarComponent,
    BabylonComponent,
    HubbleImagesComponent,
    HubbleNewsComponent,
    HubbleVideosComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
