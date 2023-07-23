import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '../home-page/aside/aside.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { NewsService } from '../news.service';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'his-newspage',
  standalone: true,
  imports: [CommonModule, AsideComponent, TableModule, ButtonModule, RouterLink, AvatarModule],
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent {

  public NewsService = inject(NewsService)
  unFinishNews = this.NewsService.unFinishNews;
  normalNews = this.NewsService.normalNews;
  finishNews = this.NewsService.finishNews;
}
