import { Component, OnInit  , Input} from '@angular/core';
import {Post} from '../../post';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {
  @Input()
  post!: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
