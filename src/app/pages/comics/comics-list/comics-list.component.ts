import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import { ComicsService } from '../../../core/services/comics.service';
import { Comic } from '../comics.model';
import {ComicsDetailComponent} from '../comics-detail/comics-detail.component';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
  comics: Comic[] = [];
  selectedComic: Comic;

  @ViewChild(ComicsDetailComponent)
  private modalComponent: ComicsDetailComponent;

  constructor(private comicsService: ComicsService) {
  }

  ngOnInit(): void {
    this.comicsService.getComics()
      .subscribe(
        resComics => {
          console.log(resComics);
          this.comics = resComics;
        });
  }

  openDetails(comic) {
    this.selectedComic = comic;
  }

  parseDate(comicDate) {
    return comicDate.find(it => it.type === 'onsaleDate').date;
  }
  }



