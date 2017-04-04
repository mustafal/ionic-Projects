import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';
import { User } from '../models/users'



/*
  Generated class for the GithubUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUser {

  githubURL = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUser Provider');
  }

  load(): Observable<User[]>{
    return this.http.get(`${this.githubURL}/users`)
      .map(res => <User[]>res.json());
  }

  loadDetails(login : string):Observable<User>{
    return this.http.get(`${this.githubURL}/users/${login}`)
      .map(res => <User>(res.json()))
  }

}
