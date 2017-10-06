import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() pageName: string;
  @Input() icon: string;
  @Input() lastImportDate: string;

  constructor() {}

  ngOnInit(): void {}
}
