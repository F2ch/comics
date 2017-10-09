import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { ComicsService } from '../../../core/services/comics.service';
import { Comic } from '../comics.model';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.scss'],
})
export class ComicsDetailComponent implements OnInit {
  modalAction = new EventEmitter<string | MaterializeAction>();
  comic: Comic;


  constructor(private comicsService: ComicsService) {
  }

  ngOnInit(): void {
  }

  @Input()
  set currentComic(value) {
    this.comic = value;
    if (value && value.hasOwnProperty('id')) {
      this.modalAction.emit({action: 'modal', params: ['open']});
    }
  }

  parseDate(comicDate) {
    return comicDate.find(it => it.type === 'onsaleDate').date;
  }
}



