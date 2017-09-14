import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  message;
  messageClass;
  foundBlog = false;
  processing = false;
  employee;
  currentUrl;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // Function to delete blogs
  deleteBlog() {
    this.processing = true; // Disable buttons
    // Function for DELETE request
    this.employeeService.deleteBlog(this.currentUrl.id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error bootstrap class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return bootstrap success class
        this.message = data.message; // Return success message
        // After two second timeout, route to employee page
        setTimeout(() => {
          this.router.navigate(['/employee']); // Route users to employee page
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve employee
    this.employeeService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      // Check if request was successfull
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return error message
      } else {
        // Create the employee object to use in HTML
        this.employee = {
          firstname: data.employee.firstname, // Set title
          lastname: data.employee.lastname, // Set body
          dob: data.employee.dob, // Set created_by field
        }
        this.foundBlog = true; // Displaly employee window
      }
    });
  }

}

