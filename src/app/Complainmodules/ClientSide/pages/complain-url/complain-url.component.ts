import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import {Event, RouterEvent, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastServiceService } from '../../services/toast-service.service';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Comment} from '../../comment';
import { PostServiceService } from '../../services/post-service.service';
import { CommentService } from '../../services/comment.service';
import { NgForm } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { filter, Observable } from 'rxjs';




@Component({
  selector: 'app-complain-url',
  templateUrl: './complain-url.component.html',
  styleUrls: ['./complain-url.component.css']
})
export class ComplainURLComponent implements OnInit {
 
  posts: Post[] = [];
  comments: Comment[] = [];
  fetch: any;
  currentUser: any;
  constructor(
    private r: Router,
    private http: HttpClient ,
    private post: PostServiceService,
    private route: ActivatedRoute,
    private comment: CommentService,
    private toast: ToastServiceService,
    
    ) { }
  
  ngOnInit(): void {
      this.fetchdata();
      this.getPost();
      
      this.fetchComments();
      this.currentUser = JSON.parse(localStorage.getItem("CurrentUser") || '{}');
      
      
  }
  
  
  fetchdata(){
      let id = parseInt(this.route.snapshot.params['postid']);
      this.post.getSpec(id).subscribe((fetch)=> (this.fetch = fetch));
  }

  getPost(){
    let IdCurrent = parseInt(this.route.snapshot.params['postid']);
    this.post.getPost().subscribe((posts) => (this.posts = posts.filter((t) => t.id !== IdCurrent)));
  }

  view(id: any){
     this.r.navigate(['/complain/',id.id]);
     setTimeout(() => {
        location.reload();
     }, 1000);
  }

  fetchComments(){
    let IdCurrent = parseInt(this.route.snapshot.params['postid']);
    this.comment.getCommentlist().subscribe((comments) => (this.comments = comments.filter((t) => t.postid == IdCurrent )));
  }
  
  ReplyAsStudent(f: NgForm){
      const userID = this.currentUser.id;
      const username = this.currentUser.username;
      const gender = this.currentUser.gender;
      const postid = parseInt(this.route.snapshot.params['postid']);
      const text = f.value.textComment;
      const dateNow = new Date();
      const asstud = "Student"
      const getDate = `${dateNow.getDate()}-${dateNow.getMonth() + 1}-${dateNow.getFullYear()}`;

      let comments = {
        username: username,
        textComment: text,
        userid: userID,
        date: getDate,
        postid: postid,
        usertype: asstud,
        gender: gender
      }
     
      this.comment.AddComments(comments).subscribe(res=>{
         this.toast.getSuccess("Reply Successfully sent.", "Thank for your response!");
         f.resetForm();
         this.fetchComments();
      },err=>{
         this.toast.getWarning("Reply Successfully wasn't sent.", "Please try again!");
      })
      
  }
  
  ReplyAsInstructor(f: NgForm){
    const userID = this.currentUser.id;
    const username = this.currentUser.username;
    const postid = parseInt(this.route.snapshot.params['postid']);
    const text = f.value.textComment;
    const gender = this.currentUser.gender;
    const dateNow = new Date();
    const asInst = "Instructor"
    const getDate = `${dateNow.getDate()}-${dateNow.getMonth() + 1}-${dateNow.getFullYear()}`;

    let comments = {
      username: username,
      textComment: text,
      userid: userID,
      date: getDate,
      postid: postid,
      usertype: asInst,
      gender: gender
    }
    
     this.comment.AddComments(comments).subscribe(res=>{
       this.toast.getSuccess("Reply Successfully sent.", "Thank for your response!");
       f.resetForm();
       this.fetchComments();
     },err=>{
       this.toast.getWarning("Reply Successfully wasn't sent.", "Please try again!");
     })
     
  }

}
