import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import {Post} from '../../post'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
 
  constructor(private route: Router,private postservice: PostServiceService) { }

  ngOnInit(): void {
     this.postservice.getPost().subscribe((posts) => this.posts = posts);

  }
 
  view(post: Post){
    this.route.navigate(['/complain/', post.id]);
  }
 
  

}
