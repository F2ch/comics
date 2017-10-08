import { Component, Input, OnInit } from '@angular/core';
import {ComicsService} from "../../../core/services/comics.service";
import {Comic} from "../comics.model";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  comics: Comic[];



  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {
    /*this.comicsService.getComics()
      .subscribe(
        comics => this.comics = comics)
    console.log(this.comics.title);*/
  }

  clicked() {
    this.comicsService.getComics()
      .subscribe(
        comics => { this.comics = comics;
    console.log('>>>>>>>>>>>>>>>>>>>', this.comics);
        });
  }
  }



