import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/models/user/user.model';
import {map, tap} from "rxjs/operators";
import { Subject } from "rxjs";

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
    verifyCredentials(email: string, password: string) {
        return this.getUserList().pipe(
            map((users: User[]) => {
                // Verifica si el usuario y la contraseña coinciden con algún usuario en la lista
                const validUser = users.find(user => user.email === email && user.password === password);
                return !!validUser; // Devuelve true si se encuentra un usuario válido
            })
        );
    }


}
