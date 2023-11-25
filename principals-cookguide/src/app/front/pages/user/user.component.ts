import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/front/services/user/user-service.service'
import { Account } from 'src/app/shared/models/account/account.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: Account = {
    id: '',
    type: '',
    email: '',
    user: '',
    password: '',
    firstname: '',
    lastname: '',
    picture: '',
    phone: '',
    birthday: '',
    gender: '',
    diet: '',
    height: '',
    weight: '',
    dni: '',
  };

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (userData) => {
          this.user = userData.data;
        },
        (error) => {
          console.error('Error al obtener el usuario', error);
        }
      );
    } else {
      console.error('No hay un usuario logueado.');

      this.router.navigate(['/login']);
    }
  }





}
