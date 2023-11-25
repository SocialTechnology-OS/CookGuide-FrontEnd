import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Account } from '../../../shared/models/account/account.model';
import {map, tap} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Users: Account[] = [];

  constructor(private http: HttpClient) {}

  private userChangedSubject = new Subject<void>();

  private onUserChangedSubject(){
    this.userChangedSubject.next();
  }
  userChanged$=this.userChangedSubject.asObservable();

  getUserList(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.baseURL}/accounts`)
      .pipe(tap((users: any) => console.log(users.data)));
  }

  getUserById(id: number) {
    return this.http
      .get<Account>(`${environment.baseURL}/accounts/${id}`)
      .pipe(tap((user:any) => console.log(user.data)));
  }

  createUser(user : Account){
    return this.http.
        post(`${environment.baseURL}/accounts`, user).pipe(tap(()=>{
          this.onUserChangedSubject();
    }))
  }

  login(email: string, password: string): Observable<Account | undefined> {
    return this.getUserList().pipe(
      map((response: any) => response.data),
      map((users: Account[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('userId', user.id.toString());
          this.onUserChangedSubject();
        }
        return user;
      })
    );
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? Number(userId) : null;
  }

  logout() {
    localStorage.removeItem('userId');
    this.onUserChangedSubject();
  }
}
