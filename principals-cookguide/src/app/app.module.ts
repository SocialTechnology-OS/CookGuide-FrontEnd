import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from "@angular/material/table";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { FrontCardsComponent } from './front/components/front-cards/front-cards.component';
import { HttpClientModule} from '@angular/common/http';

import { ManageRecipesComponent } from './front/components/manage-recipes/manage-recipes.component';
import { FormCreateRecipesComponent } from './front/components/form-create-recipes/form-create-recipes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from './public/components/sidenav/sidenav.component';
import { BodyComponent } from './public/components/body/body.component';
import { FromUpdateRecipesComponent } from './front/components/from-update-recipes/from-update-recipes.component';
import { RecipesDetailsComponent } from './front/components/recipes-details/recipes-details.component';
import { RegisterComponent } from './front/components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    FrontCardsComponent,
    SidenavComponent,
    BodyComponent,
    ManageRecipesComponent,
    FormCreateRecipesComponent,
    FromUpdateRecipesComponent,
    RecipesDetailsComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
