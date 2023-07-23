import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [LoginComponent, RouterOutlet],
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = `primeNG`

}
