import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AlertService } from './alert/alert.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/**
 * Http Interceptor Service.
 */

@Injectable()
export class HttpService {

  /**
   *
   * @param backend
   * @param defaultOptions
   */
  constructor(private http: Http,
              public router: Router,
              public alertService: AlertService) {
  }


  /**
   *
   * @param {String} url url for the request
   * @returns {Observable<any>}
   */
  public get (url: string): Observable<any> {
    this.requestInterceptor();
    return this.http.get(this.getFullUrl(url))
        .map( res => {
        return res.json().data.results;
      });
  }
  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    return environment.apiEndpoint + url;
  }

  /**
   * Before any Request.
   */
  private requestInterceptor(): void {
  }
}
