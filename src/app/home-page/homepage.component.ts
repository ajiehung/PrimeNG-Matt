import { Component } from '@angular/core';
import { HeaderComponent } from './homebody/homebody.component';
import { AsideComponent } from './aside/aside.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'his-homepage',
  standalone: true,
  imports: [AsideComponent, HeaderComponent, RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
