import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) {}


  getUserList() {
    return this.http
      .get<User[]>(`${environment.baseURL}/users`)
  }
  
  
  getUserById(id: number) {
    return this.http
      .get<User>(`${environment.baseURL}/users/${id}`)
  }

     
}
