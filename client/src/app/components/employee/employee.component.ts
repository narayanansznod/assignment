import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  blogPosts;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeService
  ) {
    this.createNewBlogForm(); // Create new blog form on start up
  }

  // Function to create new blog form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation
      ])],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])],
      dob: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
      ])],
    })
  }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('firstname').enable(); // Enable firstname field
    this.form.get('lastname').enable(); // Enable lastname field
    this.form.get('dob').enable(); // Enable lastname field
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('firstname').disable(); // Disable firstname field
    this.form.get('lastname').disable(); // Disable lastname field
    this.form.get('dob').disable(); // Enable lastname field
  }

  // Validation for firstname
  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphaNumericValidation': true } // Return error in validation
    }
  }

  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }

  // Reload blogs on current page
  reloadBlogs() {
    this.loadingBlogs = true; // Used to lock button
    this.getBlog();
    // Get All Blogs
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }

  // Function to post a new comment on blog post
  draftComment() {

  }

  // Function to submit a new blog post
  onBlogSubmit() {
    console.log('Form');
    this.processing = true; // Disable submit button
    this.disableFormNewBlogForm(); // Lock form

    // Create blog object from form fields
    const employee = {
      firstname: this.form.get('firstname').value, // firstname field
      lastname: this.form.get('lastname').value, // lastname field
      dob: this.form.get('dob').value // lastname field
    }

    // Function to save blog into database
    this.employeeService.newBlog(employee).subscribe(data => {
      // Check if blog was saved to database or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewBlogForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        this.getBlog();
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewBlogForm(); // Enable the form fields
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }

   
 // Function to get all employees from the database
  getBlog() {
    this.employeeService.getBlog().subscribe(data => {
      this.blogPosts = data.employeeroutes;
    })
  }

  ngOnInit() {

    
    this.getBlog();
    // Get profile username on page load
  }

}
