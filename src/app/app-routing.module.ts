import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'districts',component:DistrictsComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single',component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
