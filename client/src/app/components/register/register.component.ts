import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  newPost = false;
  loadingBlogs = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) 
    
  {
    this.createForm(); // Create Angular 2 Form when component loads
  }

  

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // firstname Input
      firstname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validatefirstname // Custom validation
      ])],
      // lastname Input
      lastname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validatelastname // Custom validation
      ])],
      // dob Input
      dob: ['', Validators.compose([
        Validators.required, // Field is required
        // this.validatedob // Custom validation
      ])],
      // Confirm dob Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingdobs('dob', 'confirm') }); // Add custom validator to form for matching dobs
  }

  // Function to validate e-mail is proper format
  validatefirstname(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test firstname against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid firstname
    } else {
      return { 'validatefirstname': true } // Return as invalid firstname
    }
  }

  // Function to validate lastname is proper format
  validatelastname(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test lastname against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid lastname
    } else {
      return { 'validatelastname': true } // Return as invalid lastname
    }
  }

  // Function to validate dob
  validatedob(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
    // Test dob against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid dob
    } else {
      return { 'validatedob': true } // Return as invalid dob
    }
  }

  // Funciton to ensure dobs match
  matchingdobs(dob, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[dob].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingdobs': true } // Return as error: do not match
      }
    }
  }

  // Function to submit form
  onRegisterSubmit() {
     
    const user = {
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      dob: this.form.get('dob').value
    }

    this.authService.registerUser(user).subscribe(data => {
    if(!data.success){
      this.messageClass = 'alert alert-danger'; // Set an error class
      this.message = data.message; // Set an error message
    } else {
      this.messageClass = 'alert alert-success'; // Set a success class
      this.message = data.message; // Set a success message
      setTimeout(() => {
        this.router.navigate(['/listing']); // Redirect to login view
      }, 2000);
    }
    });
  }

  newBlogForm() {
    this.newPost=true;
  }

  reloadBlogs() {
    this.loadingBlogs=true;

  }

  ngOnInit() {
  }

}
