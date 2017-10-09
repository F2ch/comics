import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { CommonsModule } from './common/common.modulde';
import { ComicsListComponent } from './pages/comics/comics-list/comics-list.component';
import { ComicsService } from './core/services/comics.service';
import { HttpService } from './core/services/http.service';
import { HttpModule} from '@angular/http';
import { AlertService } from './core/services/alert/alert.service';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
