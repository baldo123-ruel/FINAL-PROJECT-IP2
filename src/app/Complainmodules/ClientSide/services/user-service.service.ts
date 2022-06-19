import { Injectable } from '@angular/core';
import { Users } from '../UserInterface';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private url = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }

  AddUsers(Data: any): Observable <Users[]>{
     return this.http.post<Users[]>(this.url , Data);
  }
  getUser(email: any , password:any ): Observable<any>{
    return this.http.get(this.url);
  }
  
}
