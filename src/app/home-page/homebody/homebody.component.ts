import { Component, Input } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
  standalone: true,
  selector: 'his-homebody',
  imports: [NewsComponent, FavoriteComponent],
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
export class HeaderComponent {

 public headerElement:string = `Chris, 歡迎回來`;
}
