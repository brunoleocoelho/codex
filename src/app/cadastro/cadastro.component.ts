import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User();
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
  }

  saveLogin() {
    if (this.user.password === this.user.passwordComfirm) {
      window.localStorage.setItem('user', JSON.stringify(this.user));
      this.userService.users.push(this.user);
      this.route.navigate(['workspace']);
    }
  }

}
