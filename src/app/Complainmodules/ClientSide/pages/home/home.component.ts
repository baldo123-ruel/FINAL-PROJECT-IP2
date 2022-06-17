import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import {POSTS} from '../../complaintask';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = POSTS;
  constructor() { }

  ngOnInit(): void {
  }

}
