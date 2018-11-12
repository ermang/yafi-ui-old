import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThreadComponent } from './thread/thread.component';
import { TopicComponent } from './topic/topic.component';
import { LoginComponent } from './login/login.component';
import { PagingComponent } from './paging/paging.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    TopicComponent,
    LoginComponent,
    PagingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
