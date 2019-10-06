import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeComponent } from './youtube.component';

import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [YoutubeComponent],
  imports: [CommonModule, YoutubeRoutingModule, YouTubePlayerModule]
})
export class YoutubeModule {}
