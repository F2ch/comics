import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {ComicsListComponent} from './comics/comics-list/comics-list.component';
import {ComicsDetailComponent} from './comics/comics-detail/comics-detail.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {BioComponent} from "./bio/bio.component";
import {CvComponent} from "./cv/cv.component";

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule,
    PagesRoutingModule,
  ],
  declarations: [
    ComicsListComponent,
    ComicsDetailComponent,
    BioComponent,
    CvComponent,
  ],
  exports: [
    ComicsListComponent,
    ComicsDetailComponent,
    BioComponent,
    CvComponent,
  ],
})
export class PagesModule {
}
