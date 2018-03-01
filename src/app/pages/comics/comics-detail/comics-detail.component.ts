import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Comic } from '../comics.model';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.scss'],
})
export class ComicsDetailComponent implements OnInit, OnDestroy  {
  modalAction = new EventEmitter<string | MaterializeAction>();
  comic: Comic;
  @Output() closeModal: EventEmitter<any> = new EventEmitter;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.closeModal.emit();
  }

  @Input()
  set currentComic(value) {
    this.comic = value;
    if (value && value.hasOwnProperty('id')) {
      this.modalAction.emit({action: 'modal', params: ['open']});
    }
  }

  @Output()
  onCloseComicsDetails(): void {
    // Close the materialize modal
    this.comic = null;
    this.modalAction.emit({action: 'modal', params: ['close']});
  }

  parseDate(comicDate) {
    return comicDate.find(it => it.type === 'onsaleDate').date;
  }

  parsePrice(comicPrice){
    return comicPrice.find(it => it.type === 'printPrice').price;
  }
}



