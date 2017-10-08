import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
// Services
import { Http, Response } from '@angular/http';

/**
 * Comics service.
 */
@Injectable()
export class ComicsService implements OnInit {
  // Marvel key to request API
  private privateKey = 'eb674b8c1b41d15e664982ae40a20115209d5bb5';
  private publicKey = '878c5eb2b3650ccbb6e4fbb2d8be62fc';

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

  /**
   * function that return comics from marvel API
   * @returns {any} Observable
   */
  public getComics(): Observable<any> {

    //Get the md5 Hash
    let timeStamp = Date.now();
    let hash = this.createHash(timeStamp);
    let url = 'http://gateway.marvel.com/v1/public/comics?ts='+timeStamp+'&apikey='+this.publicKey+'&hash='+hash;

    //call Marvel API
    let dataFromMarvelApi =  this._http.get(url)
      .map((response: Response) => response.json());
    return dataFromMarvelApi;
  }

}
