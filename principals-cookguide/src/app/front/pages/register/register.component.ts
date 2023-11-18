import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserServiceService } from "../../services/user/user-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTabChangeEvent } from "@angular/material/tabs";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    hide = true;
    form1!: FormGroup;
    selectedType: string = '';

    selectedGender: string = '';



    constructor(
        private fb: FormBuilder,
        private userservice : UserServiceService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit():void{
        this.form1 = this.fb.group(
            {
                id: ['', Validators.required],
                email: ['', Validators.required],
                password: ['', Validators.required],
                name: ['', Validators.required],
                lastname: ['', Validators.required],
                phone: ['', Validators.required],
                birthday: ['', Validators.required],
                gender: ['', Validators.required]
            }
        );
    }
    onSubmit() {
        // Handle form submission logic here
    }
    createUser() {
        if (this.selectedType === 'estudiante' || this.selectedType === 'chef') {
            this.userservice.createUser({
                id: this.form1.value.id,
                type: this.selectedType,
                email: this.form1.value.email,
                user: 'username',
                password: this.form1.value.password,
                name: this.form1.value.name,
                lastname: this.form1.value.lastname,
                picture: 'link',
                phone: this.form1.value.num,
                birthday: this.form1.get('birthday')?.value,
                gender: this.selectedGender,
                diet: 'hola',
                allergies: 'hola',
                preferences: 'hola',
                needs: 'hola',
                height: 'hola',
                weight: 'hola',

            }).subscribe({
                next: () => {
                    this.openSnackBar('Usuario registrado correctamente', 'Ok');
                },
                error: () => {
                    this.openSnackBar('Error al registrar Usuario', 'Ok')
                }
            });
        }else {
            // Manejar el caso en el que selectedType no se ha establecido
            this.openSnackBar('Selecciona el tipo de usuario (Estudiante o Chef)', 'Ok');
        }
    }
    openSnackBar(message: string, action?: string) {
        this._snackBar.open(message, action, { duration: 5_000 });
    }
    onTabChange(event: MatTabChangeEvent) {
        const selectedTabLabel = event.tab.textLabel; // Obtiene el texto de la pestaña seleccionada

        if (selectedTabLabel === 'Soy Estudiante') {
            this.selectedType = 'estudiante';
        } else if (selectedTabLabel === 'Soy Chef') {
            this.selectedType = 'chef';
        }
    }
    setSelectedGender(gender: string) {
        this.selectedGender = gender;
    }

}
