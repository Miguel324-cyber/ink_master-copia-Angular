import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      correoCliente: new FormControl(''),
      contrasenaCliente: new FormControl('')
    });
  }

  onLogin() {
    if (this.form.valid) {
      const datos = this.form.value;
      this.http.post('http://localhost:8000/api/login', datos)
      .subscribe({
        next: (respuesta) => {
          console.log('Inicio de sesión exitosos', respuesta);
          this.router.navigate(['/principal']);
        },
        error: (error) => {
          console.log('Error en el inicio de sesion', error);
        }
      });
    } else {
      console.log('Formulario no valido');
    }
  }
}
