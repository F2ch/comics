import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("init du composant bio")
  }
}



