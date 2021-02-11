import { Component } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import{GitSearchService} from './git-search.service'

import {ProfileComponent} from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
}
