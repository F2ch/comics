import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../../core/services/comics.service';
import { Comic } from '../comics.model';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  comics: Comic[];
  comic: Comic;



  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {
    this.comicsService.getComics()
      .subscribe(
        resComics => { this.comics = resComics;
          console.log('>>>>>>>>>1111111>>>>>>>>>>', this.comics);
        });
  }

  clicked() {
    this.comicsService.getComics()
      .subscribe(
        resComics => { this.comics = resComics;
    console.log('>>>>>>>>>222222222>>>>>>>>>>', this.comics);
        });
  }
  }



