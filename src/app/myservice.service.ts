import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class MyserviceService {
  api_url = environment.HOST.link;
  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post(this.api_url +'/users/register', body,{
      observe:'body'
    });
  }
  answerStore(body:any){
    return this._http.post(this.api_url+ '/users/answerstore', body,{
      observe:'body'
    });
  }
  answerGet(body:any){
    return this._http.post(this.api_url+ '/users/answerget', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post(this.api_url+ '/users/login', body,{
      observe: 'body'
    });
  }

  getUserName() {
    return this._http.get(this.api_url+'/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}
