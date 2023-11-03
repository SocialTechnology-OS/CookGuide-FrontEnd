import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToogle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'principals-cookguide';
  

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToogle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getMoment(){
    if (this.router.url === '/login' || this.router.url === '/register'){
      return true;
    } else {
      return false;
  }
}
}
