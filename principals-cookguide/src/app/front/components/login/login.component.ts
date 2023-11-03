import { Component } from '@angular/core';
import { UserServiceService } from "../../../services/user-service/user-service.service";
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
  ) {}
  onSubmit() {

  }
  openSnackBar(message: string) {
      this.snackBar.open(message, 'Cerrar', {
          duration: 5000, // Duración del aviso en milisegundos (opcional)
      });
  }
  iniciarSesion() {
        this.userService.verifyCredentials(this.correo, this.contrasena).subscribe((isValid: boolean) => {
            if (isValid) {
                this.router.navigate(['/recipes']); // Redirigir al usuario a "/recipes"
            } else {
                this.errorMensaje = 'Credenciales incorrectas';
                this.openSnackBar(this.errorMensaje); // Mostrar mensaje de error
            }
        });
  }
}
