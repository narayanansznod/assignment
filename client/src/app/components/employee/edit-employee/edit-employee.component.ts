import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

message = false;
messageClass = false;
employee = {
  firstname: String,
  secondname: String,
  dob: Number
}
processing = false;
currentUrl;
loading = true;
  constructor(   private location: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router) { }

  updateEmployeeSubmit(){
    
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current blog with id in params
    this.employeeService.getSingleBlog(this.currentUrl.id).subscribe(data => {
    
        this.employee = data.employee; // Save blog object for use in HTML
    
    });
  }

}
