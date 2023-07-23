import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'his-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  imports: [RouterLink, SidebarModule, ButtonModule, TieredMenuModule]
})
export class AsideComponent {
  public sidebarVisible: boolean = false;

  public asideTitle:string = `病人清單`;
  public asideElement:string = `診斷開立`;

  user: MenuItem[] | undefined;

  ngOnInit() {
    this.user = [
        {
            label: 'Hi, Chris',
            icon: 'chrisimg'
        },
        {
            label: '個人資料',
            icon: 'pi pi-fw pi-user'
        },
        {
            label: '系統設定',
            icon: 'pi pi-fw pi-pencil'
        },
        {
            label: '權限管理',
            icon: 'pi pi-fw pi-spin pi-cog'
        },
        {
            separator: true
        },
        {
            label: '幫助中心',
            icon: 'pi pi-fw pi-question-circle'
        },
        {
            label: '深色模式',
            icon: 'pi pi-fw pi-moon'
        },
    ];
  }
}


