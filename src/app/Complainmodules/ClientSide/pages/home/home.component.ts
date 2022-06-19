import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import {Post} from '../../post'
import { Router } from '@angular/router';
import { ToastServiceService } from '../../services/toast-service.service';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
 
  constructor(private com: CommentService,private toast: ToastServiceService ,private route: Router,private postservice: PostServiceService) { }

  ngOnInit(): void {
     this.postservice.getPost().subscribe((posts) => this.posts = posts);

  }
 
  view(post: Post){
    this.route.navigate(['/complain/', post.id]);
  }
  Delete(post: any){
   
    // this.postservice.DeletePost(post).subscribe(() => (this.posts = this.posts.filter((t) => t.id !== post.id)));
    this.postservice.DeletePost(post).subscribe(res=>{
      this.posts = this.posts.filter((t) => t.id !== post.id)
      this.toast.getSuccess("Deleted","Feel free to post");
    },err =>{
      alert("Something went wrong!");
    })
    this.com.DeleteComments(post).subscribe(res=>{
      console.log("Deleted");
    }, err=>{
      console.log("Error");
    })
    
  }
 
  

}
