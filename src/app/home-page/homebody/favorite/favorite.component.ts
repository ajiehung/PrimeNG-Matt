import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'home-favorite',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  version:string = `1.0.0`;
}
