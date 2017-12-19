import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Rutas*/
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//servirces
import { UsersService } from './services/users.service';
import { MailDirective } from './directives/mail.directive';
import { PasswordDirective } from './directives/password.directive';
import { DateFilePipe } from './pipes/date-file.pipe';
import { SerachFilePipe } from './pipes/serach-file.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    NavBarComponent,
    MailDirective,
    PasswordDirective,
    DateFilePipe,
    SerachFilePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
