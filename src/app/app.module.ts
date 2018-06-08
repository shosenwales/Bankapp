import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const appRoutes: Routes = [
  {path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'login-form', component:LoginFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
