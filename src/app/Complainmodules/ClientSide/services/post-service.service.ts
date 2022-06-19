import { Injectable } from '@angular/core';
import { Post } from '../post';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';


 @Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  private url = 'http://localhost:5000/posts'

  constructor(private http: HttpClient) { 
  
  }

  getPost(): Observable <Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  getSpec(id: any): Observable <Post[]>{
    const url = `${this.url}/${id}`;
    return this.http.get<Post[]>(url);
  }
  AddPost(Data: any): Observable <Post[]> {
    return this.http.post<Post[]>(this.url, Data);
  }
  
  
  
}
