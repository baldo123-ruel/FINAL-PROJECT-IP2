import { Injectable } from '@angular/core';
import {Comment}  from '../comment';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private jakeApi = 'http://localhost:5000/comments'
  constructor(private http: HttpClient) { }

  getCommentlist(): Observable<Comment[]>{
     return this.http.get<Comment[]>(this.jakeApi);
  }
  
  AddComments(Data: any): Observable<Comment[]>{
    return this.http.post<Comment[]>(this.jakeApi , Data);
  }

}
