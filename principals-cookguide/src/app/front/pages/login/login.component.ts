import { Component } from '@angular/core';
import { UserServiceService } from "../../services/user/user-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  correo = ''; // Variable para almacenar el correo ingresado
  contrasena = ''; // Variable para almacenar la contraseña ingresada
  errorMensaje = '';

  constructor(
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  NgOnInit(): void {
    this.userService.getUserList();
  }

  onSubmit() {

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000, // Duración del aviso en milisegundos (opcional)
    });
  }

  onLogin() {
    this.userService.login(this.correo, this.contrasena)
      .subscribe(log => {
        if (log) {
          this.router.navigate(['/recipes']);
          console.log('Inicio de sesión exitoso', log);
        } else {
          this.openSnackBar(this.errorMensaje);
          console.log('Inicio de sesión fallido');
        }
      });
  }

}
