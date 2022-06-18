import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { PostServiceService } from '../../services/post-service.service';

@Component({
  selector: 'app-complain-url',
  templateUrl: './complain-url.component.html',
  styleUrls: ['./complain-url.component.css']
})
export class ComplainURLComponent implements OnInit {
 
  posts: Post[] = [];
  fetch: any;
 constructor(private r: Router,private http: HttpClient ,private post: PostServiceService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
      this.fetchdata();
      this.getPost();
      
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

}
