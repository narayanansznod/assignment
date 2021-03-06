import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080"; // Development Domain - Not Needed in Production
  user;
  options;

  constructor(private http: Http
  ) { }
  

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  getProfile() {
    return this.http.get(this.domain + '/authentication/profile', this.options ).map(res => res.json());
  }

}

