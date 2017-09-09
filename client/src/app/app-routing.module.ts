import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { ListingComponent } from './components/listing/listing.component';


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {path:'navbar', component: NavbarComponent},
  {path:'register', component: RegisterComponent},
  {path:'listing', component:ListingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
