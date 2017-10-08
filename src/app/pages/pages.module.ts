import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {ComicsListComponent} from "./comics/comics-list/comics-list.component";

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule,
  ],
  declarations: [
    ComicsListComponent,
  ],
  exports: [
    ComicsListComponent,
  ],
})
export class CommonsModule {
}
