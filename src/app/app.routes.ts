import { Routes } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TatuadoresComponent } from './componentes/tatuadores/tatuadores.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'clientes',component:ClientesComponent},
    {path:'tatuadores',component:TatuadoresComponent},
    {path:'citas',component:CitasComponent},
    {path:'tienda',component:TiendaComponent},
    {path:'formulario',component:FormularioComponent},
    {path: 'principal',component: PrincipalComponent}
];