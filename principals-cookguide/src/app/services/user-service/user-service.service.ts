import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import {Subject} from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  private userChangedSubject = new Subject<void>();

  private onUserChangedSubject(){
    this.userChangedSubject.next();
  }
  userChanged$=this.userChangedSubject.asObservable();


  getUserList() {
    return this.http
      .get<User[]>(`${environment.baseURL}/users`)
  }


  getUserById(id: number) {
    return this.http
      .get<User>(`${environment.baseURL}/users/${id}`)
  }

  createUser(user : User){
    return this.http.
        post(`${environment.baseURL}/users`, user).pipe(tap(()=>{
          this.onUserChangedSubject();
    }))
  }


}
