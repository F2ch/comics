import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {ComicsListComponent} from './comics/comics-list/comics-list.component';
import {ComicsDetailComponent} from './comics/comics-detail/comics-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule,
  ],
  declarations: [
    ComicsListComponent,
    ComicsDetailComponent,
  ],
  exports: [
    ComicsListComponent,
    ComicsDetailComponent,
  ],
})
export class CommonsModule {
}
