import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './public/components/header/header.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './public/components/sidenav/sidenav.component';
import { DashboardComponent } from './public/components/dashboard/dashboard.component';
import { BodyComponent } from './public/components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    FooterComponent, 
    FrontCardsComponent, 
    SidenavComponent, 
    DashboardComponent, 
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
