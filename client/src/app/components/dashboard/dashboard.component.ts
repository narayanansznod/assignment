import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;

  constructor() { }

  newBlogForm(){
    this.newPost = true;
  }

  reloadBlogs(){
     this.loadingBlogs = true;
     setTimeout(() => {
       this.loadingBlogs = false;
     }, 4000);
  }
  ngOnInit() {
  }

}
