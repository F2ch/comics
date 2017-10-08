import { Component, Input, OnInit } from '@angular/core';
import {HttpService} from "../../core/services/http.service";
import {ComicsService} from "../../core/services/comics.service";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {
results: string[];

  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {}

  clicked() {
    let a = this.comicsService.getComics().subscribe(data => {
        this.results = data['results'];
      },
    );


  }
}

