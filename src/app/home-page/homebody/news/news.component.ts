import { NewsService } from '../../../news.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-news',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterLink],
  templateUrl : './news.component.html',
  styleUrls : ['./news.component.css']
})
export class NewsComponent {

  public NewsService = inject(NewsService)
  news = this.NewsService.news;
}
