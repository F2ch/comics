import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {SideNavComponent} from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
