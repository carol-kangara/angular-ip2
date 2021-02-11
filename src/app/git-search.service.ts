import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import {User} from './user';
import {Repos} from './repos';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private username!:string;
  private clientid='38b92ceae39db369395d'
  private cliensecret='4a47eb8456136573212d7375e900d3a22ab54647'

  constructor(private http:HttpClient) {
    console.log("service is now ready!")
    this.username="carol-kangara"
   }
   getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .map(result => result);

  }
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .map(result => result);
  }
  updateUser(username: string) {
  this.username = username;
  }
}

