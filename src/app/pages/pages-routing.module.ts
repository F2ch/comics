import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ComicsListComponent} from "./comics/comics-list/comics-list.component";
import {BioComponent} from "./bio/bio.component";
import {CvComponent} from "./cv/cv.component";

const PagesRoutes = [
  {
    path: '',
    component: BioComponent,
  },
  {
    path: 'pages/bio',
    component: BioComponent,
  },
  {
    path: 'pages/cv',
    component: CvComponent,
  },
  {
    path: 'pages/comics-list',
    component: ComicsListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(PagesRoutes),
  ],
  exports: [
    RouterModule,

  ],
})
export class PagesRoutingModule {
}
