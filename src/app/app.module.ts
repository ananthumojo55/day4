import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DistrictsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    SingleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
