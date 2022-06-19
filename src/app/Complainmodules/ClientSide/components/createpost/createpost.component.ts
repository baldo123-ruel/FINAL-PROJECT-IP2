import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostServiceService } from '../../services/post-service.service';
import { ToastServiceService } from '../../services/toast-service.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  currentUser:any;
  constructor(private toast: ToastServiceService ,private posts: PostServiceService, private route: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
  }
  onSubmit(form: NgForm){
     const username = this.currentUser.username;
     const gender = this.currentUser.gender;
     const date = new Date();
     const getDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
     const userid = this.currentUser.id;

     let Post = {
        userid: userid,
        username: username,
        date: getDate,
        gender: gender,
        text: form.value.complaintext,
        userType: form.value.usertyp,
     }
     console.log(Post);
     this.posts.AddPost(Post).subscribe(res=>{
       this.toast.getSuccess("Your post has been uploaded!", "Feel free to view with others to see the suggestions");
       this.route.navigate(['/Home']);
     }, err=>{
       alert("Fields!");
     });
  }
}
