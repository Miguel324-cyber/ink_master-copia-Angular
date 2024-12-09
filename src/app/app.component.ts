import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";
import { NavegacionComponent } from "./componentes/navegacion/navegacion.component";
import { PieComponent } from "./componentes/pie/pie.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, NavegacionComponent, PieComponent, InicioComponent, FormularioComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ink_master';
}
