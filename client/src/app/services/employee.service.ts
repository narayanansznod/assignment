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
  newBlog(employee) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/employeeroutes/empDet', employee, this.options).map(res => res.json());
  }

  getBlog() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/employeeroutes/empGet', this.options).map(res => res.json());
  }

  getSingleBlog(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/employeeroutes/singleEmp/' + id, this.options).map(res => res.json());
  }

  editBlog(employee){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/employeeroutes/updateEmp/' + employee, this.options).map(res => res.json());
  }

  deleteBlog(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + '/employeeroutes/deleteEmp/' + id, this.options).map(res => res.json());
  }

}