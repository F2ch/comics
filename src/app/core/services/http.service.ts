import { Injectable } from '@angular/core';
import { ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AlertService } from './alert/alert.service';
import { Subject } from 'rxjs/Subject';

/**
 * Http Interceptor Service.
 */

@Injectable()
export class HttpService extends Http {

  public fileUploadProgressObserver: any;
  public fileUploadProgress: any;

  /**
   *
   * @param backend
   * @param defaultOptions
   */
  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              public router: Router,
              public alertService: AlertService) {
    super(backend, defaultOptions);

    this.fileUploadProgress = Observable.create(observer => {
      this.fileUploadProgressObserver = observer;
    }).share();
  }


  /**
   *
   * @param {String} url url for the request
   * @returns {Observable<any>}
   */
  public get (url: string): Observable<any> {
    this.requestInterceptor();
    return super.get(this.getFullUrl(url))
      .map( res =>{
        console.log(res);
        return res.json()})
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


  /**
   * Event Handler
   */
  private onImported = new Subject<string>();
  onImported$ = this.onImported.asObservable();


}
