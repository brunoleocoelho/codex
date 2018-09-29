import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {

  }
  ngOnInit(): void {
    // const user = new User('test@test','test',0);
    // window.localStorage.setItem('user', JSON.stringify(user));
  }
}
