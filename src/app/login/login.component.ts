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

  constructor(private yafiService: YafiService) { }

  ngOnInit() {
  }

  login() {
    this.yafiService.login('root', 'root').subscribe();
  }

}
