import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  constructor(private http: HttpClient) {
    // console.log('Hello RestProvider Provider');
  }
  private getURL(url:string):Observable<string[]> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: HttpResponse<any>) {
      let body = res.body.json();
      return JSON.parse(body) || {};
    }

  private handleError(error: HttpResponse<any> | any) {
      let errMsg: string;
      if (error instanceof HttpResponse) {
        const b = error.body.json() || '';
        const err = b.error || JSON.stringify(b);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }
      else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
    }

}
