import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ToggleButtonsComponent } from './components/toggle-buttons/toggle-buttons.component';
import { MatIconsComponent } from './components/mat-icons/mat-icons.component';
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
import { MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component';



const routes: Routes = [
  {path: 'typography', component: TypographyComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'button-toggles', component: ToggleButtonsComponent},
  {path: 'mat-icons', component: MatIconsComponent},
  {path: 'mat-list', component: MatlistComponent},
  {path: 'mat-exp-panel', component: ExpansionPanelComponent},
  {path: 'mat-cards', component: MatCardsComponent},
  {path: 'mat-tabs', component: MatTabsComponent},
  {path: 'mat-stepper', component: MatStepperComponent},
  {path: 'mat-input', component: MatInputComponent},
  {path: 'mat-select', component: MatSelectComponent},
  {path: 'mat-autocomplete', component: MatAutocompleteComponent},
  {path: 'mat-checkbox', component: MatCheckboxComponent},
  {path: 'mat-datepicker', component: MatDatepickerComponent},
  {path: 'mat-tooltips', component: MatTooltipsComponent},
  {path: 'mat-snackbar', component: MatSnackbarComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
