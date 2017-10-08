import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * Service to provide a way to display error modals from anywhere.
 */
@Injectable()
export class AlertService {

  /*
   * Use subject instead of observable.
   * It can be observer allowing us to push values in addition to subscribe to it (though it can't take an array).
   */
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) { // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  /**
   *Display success message.
   *
   * @param message
   * @param keepAfterNavigationChange
   */
  success(message: string, keepAfterNavigationChange: boolean = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'success', text: message});
  }

  /**
   * Display Error message.
   *
   * @param message
   * @param keepAfterNavigationChange
   */
  error(message: string, keepAfterNavigationChange: boolean = false): void {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'error', text: message});
  }

  /**
   *  Observable that is used by the alert component to subscribe to notifications for whenever a
   *  message should be displayed.
   *
   * @returns {Observable<any>}
   */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
