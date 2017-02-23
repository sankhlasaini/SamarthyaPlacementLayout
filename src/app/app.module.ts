import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ValidationService } from 'app/services/validation.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    AppbarComponent,
    LoginComponent,
    LayoutComponent,
    ControlMessagesComponent,
    RegisterComponent,
  ]
})
export class AppModule { }
