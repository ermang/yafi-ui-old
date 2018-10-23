import { Component, OnInit } from '@angular/core';
import { YafiService } from '../yafi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  loggedIn: boolean;

  constructor(private yafiService: YafiService) {
    this.loggedIn = false;
   }

  ngOnInit() {
  }

  login() {
    this.yafiService.login(this.username, this.password).subscribe(() => this.loggedIn = true);
  }

}
