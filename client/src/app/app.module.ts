import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListingComponent } from './components/listing/listing.component';
import { AuthService } from './services/auth.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    ListingComponent,
    EmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
