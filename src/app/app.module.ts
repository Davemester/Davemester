import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material/material.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ToggleButtonsComponent } from './components/toggle-buttons/toggle-buttons.component';
import { MatIconsComponent } from './components/mat-icons/mat-icons.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatlistComponent } from './components/matlist/matlist.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { MatCardsComponent } from './components/mat-cards/mat-cards.component';
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';
import { MatStepperComponent } from './components/mat-stepper/mat-stepper.component';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatAutocompleteComponent } from './components/mat-autocomplete/mat-autocomplete.component';
import { MatCheckboxComponent } from './components/mat-checkbox/mat-checkbox.component';
import { MatDatepickerComponent } from './components/mat-datepicker/mat-datepicker.component';
import { MatTooltipsComponent } from './components/mat-tooltips/mat-tooltips.component';
import { MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component'

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ToggleButtonsComponent,
    MatIconsComponent,
    SidenavComponent,
    MatlistComponent,
    ExpansionPanelComponent,
    MatCardsComponent,
    MatTabsComponent,
    MatStepperComponent,
    MatInputComponent,
    MatSelectComponent,
    MatAutocompleteComponent,
    MatCheckboxComponent,
    MatDatepickerComponent,
    MatTooltipsComponent,
    MatSnackbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
