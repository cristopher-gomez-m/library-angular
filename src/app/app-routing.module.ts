import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SesionComponent } from './sesion/sesion.component';

const routes: Routes = [
  {path:'',component:InitialPageComponent},
  {path:'home',component:InitialPageComponent},
  {path:'sesion',component:SesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
