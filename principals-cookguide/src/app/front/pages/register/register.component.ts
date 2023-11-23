import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "../../services/user/user-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form1!: FormGroup;
    selectedType: string = '';
    selectedGender: string = '';

    constructor(
        private fb: FormBuilder,
        private userService: UserServiceService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.form1 = this.fb.group({
            id: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            phone: ['', Validators.required],
            birthday: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }

    onTabChange(event: MatTabChangeEvent): void {
        this.selectedType = event.tab.textLabel.toLowerCase().includes('estudiante') ? 'estudiante' : 'chef';
    }

    setSelectedGender(gender: string): void {
        this.selectedGender = gender;
    }

    onSubmit(): void {
        if (this.form1.valid && this.selectedType) {
            this.createUser();
        } else {
            this.snackBar.open('Por favor completa todos los campos', 'Ok', { duration: 5000 });
        }
    }

    createUser(): void {
        this.userService.createUser({
            ...this.form1.value,
            type: this.selectedType,
            gender: this.selectedGender,
            // Resto de propiedades aquí
        }).subscribe({
            next: () => this.snackBar.open('Usuario registrado correctamente', 'Ok', { duration: 5000 }),
            error: () => this.snackBar.open('Error al registrar usuario', 'Ok', { duration: 5000 })
        });
    }
}