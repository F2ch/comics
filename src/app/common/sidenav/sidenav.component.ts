import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SideNavComponent implements OnInit {

  menuAction = new EventEmitter<string | MaterializeAction>();

  constructor() {
  }

  ngOnInit(): void {
    this.closeMenu();
  }

  private closeMenu(): void {
    this.menuAction.emit({action: 'sideNav', params: ['hide']});
  }

  private onLogout(): void {

  }


}
