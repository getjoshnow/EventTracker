import { TestService } from 'src/app/service/service.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SiteComponent } from './component/site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SiteComponent,
    TestService
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
