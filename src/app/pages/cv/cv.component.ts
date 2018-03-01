import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("init du composant cv")
  }
}



