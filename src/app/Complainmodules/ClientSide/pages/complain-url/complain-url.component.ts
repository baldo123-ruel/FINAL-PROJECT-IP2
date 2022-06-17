import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import {POSTS} from '../../complaintask';

@Component({
  selector: 'app-complain-url',
  templateUrl: './complain-url.component.html',
  styleUrls: ['./complain-url.component.css']
})
export class ComplainURLComponent implements OnInit {
  posts: Post[] = POSTS;
  constructor() { }

  ngOnInit(): void {
  }

}
