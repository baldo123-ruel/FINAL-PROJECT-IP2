import { Injectable } from '@angular/core';
import {Comment}  from '../comment';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private fakeApi = 'http://localhost:5000/comments'
  constructor(private http: HttpClient) { }

  getCommentlist(): Observable<Comment[]>{
     return this.http.get<Comment[]>(this.fakeApi);
  }
  
  AddComments(Data: any): Observable<Comment[]>{
    return this.http.post<Comment[]>(this.fakeApi , Data);
  }
  DeleteComments(com: Comment ): Observable<Comment>{
    const urls = `${this.fakeApi}/${com.id}`;
    return this.http.delete<Comment>(urls);
 }

}
