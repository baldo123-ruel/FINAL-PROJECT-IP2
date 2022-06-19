import { Component, OnInit  , Input , Output , EventEmitter} from '@angular/core';
import {Post} from '../../post';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {
  @Input()  post!: Post;
  currentUser: any;
  @Output() viewSpecific: EventEmitter<Post> = new EventEmitter();
  @Output() DeletePost: EventEmitter<Post> = new EventEmitter();
  
  constructor(){
    }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("CurrentUser") || '{}');
  }
  getPost(Data: any){
     this.viewSpecific.emit(Data);
  }
  Delete(post: Post){
     this.DeletePost.emit(post);
  }
  
  
  
}
