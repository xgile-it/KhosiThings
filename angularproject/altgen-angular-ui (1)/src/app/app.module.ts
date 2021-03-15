import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { NavbarComponent } from './shared-component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
