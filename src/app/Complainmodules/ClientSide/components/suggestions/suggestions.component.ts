import { Component, OnInit , Input } from '@angular/core';
import { Comment } from '../../comment';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  @Input()  comment!: Comment;
  currentUser: any;
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("CurrentUser") || '{}');
  }

}
