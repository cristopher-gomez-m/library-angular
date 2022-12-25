import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [
  {path:'',component:InitialPageComponent},
  {path:'home',component:InitialPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
