import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
// import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path:"", component: FormComponent},
  { path:"form", component: FormComponent },
  { path:"submit", component: FormComponent },
  { path:"reset", component: FormComponent },
  { path:"edit", component: FormComponent },
  { path:"delete", component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
