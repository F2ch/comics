import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';
// Services
import { HttpService } from "./http.service";
import {Http} from "@angular/http";
import {Comic} from "../../pages/comics/comics.model";



/*
 * Comics service.
 */
@Injectable()
export class ComicsService implements OnInit {
  private privateKey = 'eb674b8c1b41d15e664982ae40a20115209d5bb5';
  private publicKey = '878c5eb2b3650ccbb6e4fbb2d8be62fc';
  // comicsList : Comics[] = [];


  constructor(private _http: Http) {
  }

  ngOnInit(): void {
  }


  /**
   * Create MD5 Hash
   */

  private createHash(timeStamp): string {
    var toBeHashed = timeStamp + this.privateKey + this.publicKey;
    var hashedMessage = computeMD5(toBeHashed);

    function computeMD5(str: string): string {
      let res = Md5.hashStr(str).toString();
      return res;
    }
    return hashedMessage;
  }


  public getCurrentTime(){
    return this._http.get('http://date.jsontest.com')
      .map((response: any) => response.json());

  }

  /**
   * @param credentials : user credentials
   * @returns {any} Observable
   */
  public getComics(): Observable<any> {

    //Get the md5 Hash
    let timeStamp = Date.now();
    let hash = this.createHash(timeStamp);
    let url = 'http://gateway.marvel.com/v1/public/comics?ts='+timeStamp+'&apikey='+this.publicKey+'&hash='+hash;

    //call Marvel API
    let a =  this._http.get(url)
      .map(data => data.json());
    return a;
  }

}
