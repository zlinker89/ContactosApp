import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateContactoComponent } from './components/create-contacto/create-contacto.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contacto'
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'create-contacto',
    component: CreateContactoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
