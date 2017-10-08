import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { CommonsModule } from './common/common.modulde';
import {ComicsListComponent} from "./pages/comics/comics-list/comics-list.component";
import {ComicsService} from "./core/services/comics.service";
import {HttpService} from "./core/services/http.service";
import {HttpFactory} from "./core/core.module";
import {HttpModule, XHRBackend} from "@angular/http";
import {AlertService} from "./core/services/alert/alert.service";

@NgModule({
  declarations: [
    AppComponent,
    ComicsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    HttpModule
  ],
  providers: [
    ComicsService,
    HttpService,
    AlertService,
    {
      provide: HttpService,
      useFactory: HttpFactory,
      deps: [XHRBackend, Router, AlertService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
