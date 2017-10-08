import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {SideNavComponent} from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    SideNavComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class CommonsModule {
}
