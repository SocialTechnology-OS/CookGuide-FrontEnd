import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/front/services/user/user-service.service'
import { User } from 'src/app/shared/models/user/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User = {
    id: '',
    type: '',
    email: '',
    user: '',
    password: '',
    name: '',
    lastname: '',
    picture: '',
    phone: '',
    birthday: '',
    gender: '',
    diet: '',
    allergies: [],
    preferences: [],
    needs: [],
    height: '',
    weight: ''
  };
  UserId: number = 5;

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserById(this.UserId).subscribe(
      (userData) => {
        this.user = userData;
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }





}
