import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
// Services
import { Http} from '@angular/http';
import {HttpService} from "./http.service";

/**
 * Comics service.
 */
@Injectable()
export class ComicsService implements OnInit {
  // Marvel key to request API
  private privateKey = 'eb674b8c1b41d15e664982ae40a20115209d5bb5';
  private publicKey = '878c5eb2b3650ccbb6e4fbb2d8be62fc';

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }


  /**
   * Create MD5 Hash
   * @returns {string} hashed value of timestamp+privateKey+publicKey
   */
  private createHash(timeStamp): string {
    const toBeHashed = timeStamp + this.privateKey + this.publicKey;
    const hashedMessage = computeMD5(toBeHashed);

    function computeMD5(str: string): string {
      const res = Md5.hashStr(str).toString();
      return res;
    }
    return hashedMessage;
  }

  /**
   * function that return comics from marvel API
   * @returns {any} Observable
   */
  public getComics(): Observable<any> {

    // Get the md5 Hash and set it to the url
    const timeStamp = Date.now();
    const hash = this.createHash(timeStamp);
    const url = '?ts=' + timeStamp + '&apikey=' + this.publicKey + '&hash=' + hash;

    // call Marvel API
    return this.http.get(url);
  }

}
