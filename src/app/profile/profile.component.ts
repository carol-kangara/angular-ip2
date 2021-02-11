import { Component, OnInit } from '@angular/core';
import {GitSearchService} from '../git-search.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any= [];
  repos: any= [];
  username!: string;
  constructor(private _gitsearchService: GitSearchService) {
    this._gitsearchService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this._gitsearchService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
   }

  ngOnInit(): void {
  }
  searchUser() {
    this._gitsearchService.updateUser(this.username);
    this._gitsearchService.getUser().subscribe(user => {
      this.user = user;
    });
    this._gitsearchService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

  }

}
