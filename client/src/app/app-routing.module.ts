import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { ListingComponent } from './components/listing/listing.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './components/employee/delete-employee/delete-employee.component';


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {path:'navbar', component: NavbarComponent},
  {path:'register', component: RegisterComponent},
  {path:'listing', component:ListingComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'edit-employee/:id', component:EditEmployeeComponent},
  {path:'delete-employee/:id', component:DeleteEmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
