import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EmployeeService {

  options;
  domain = this.authService.domain;


  constructor( private authService: AuthService,
    private http: Http) { }

    // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
      })
    });
  }

  // Function to create a new blog post
  newBlog(blog) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(res => res.json());
  }

}
