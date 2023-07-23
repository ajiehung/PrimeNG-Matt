import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'his-login',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterOutlet, InputTextModule, PasswordModule, FormsModule],
  templateUrl: "./login.Component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  public account:string ='';
  public password:string='';

  dologin(){
    console.log('dologin click');
    this.router.navigate(['/home-page']);
  }
}
