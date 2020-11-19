import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment as GENERALS } from 'src/environments/environment.generals';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMenu()
  }

  private loadMenu(): void {
    this.items = GENERALS.menu_items;
  }

  public jumpToClick(event: any): void {
    let _jump = (event.toElement.text) ? event.toElement.text : event.toElement.innerHTML;
    
    this.router.navigate(['/' + _jump.toLowerCase()]);
  }
}
