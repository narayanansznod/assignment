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

message;
messageClass;
employee;
processing = false;
currentUrl;
loading = true;
  constructor(   private location: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router) { }

  updateEmployeeSubmit(){
    this.processing=true;
    this.employeeService.editBlog(this.employee).subscribe(data => {
      if(!data.success){
        this.messageClass ='alert alert-danger';
        this.message = data.message;
        this.processing = false;

      } else {
        this.messageClass='alert alert-success';
        this.message= data.message;
        setTimeout(() => {
          this.router.navigate(['/employee']);
        }, 2000);
      }
    })
    
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current blog with id in params
    this.employeeService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = 'Blog not found.'; // Set error message
      } else {
        this.employee = data.employee;
        this.loading = false; // Save blog object for use in HTML
      }
    });
  }

}
