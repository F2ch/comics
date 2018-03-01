import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
   // { path: '', redirectTo: '/', pathMatch: 'full'}
  { path: '', loadChildren: './pages/pages.module#PagesModule', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule{}
