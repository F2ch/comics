import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule , RequestOptions, XHRBackend} from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { HttpService } from './services/http.service';
import { Router } from '@angular/router';
import { AlertService } from './services/alert/alert.service';
//
// export function HttpFactory(backend: XHRBackend,
//                             defaultOptions: RequestOptions,
//                             router: Router,
//                             alertService: AlertService): HttpService {
//   return new HttpService(backend, defaultOptions, router, alertService);
// }

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpModule,
    MaterializeModule,
  ],
  exports: [
  ],
})
export class CoreModule {
}
