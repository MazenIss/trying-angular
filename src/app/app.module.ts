import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
