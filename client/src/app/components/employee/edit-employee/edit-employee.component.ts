import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

message=false;
messageClass=false;
employee = {
  firstname: String,
  secondname: String,
  dob: Number
}
  constructor() { }

  updateEmployeeSubmit(){

  }

  ngOnInit() {
  }

}
