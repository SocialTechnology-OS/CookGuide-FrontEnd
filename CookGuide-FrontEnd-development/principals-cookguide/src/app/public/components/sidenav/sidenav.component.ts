import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToogle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToogle> = new EventEmitter<SideNavToogle>();

  collapsed = false;
  screenWidth: number = 0;
  navDAta = navbarData;

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
