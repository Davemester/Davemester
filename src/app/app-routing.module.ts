import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ToggleButtonsComponent } from './components/toggle-buttons/toggle-buttons.component';
import { MatIconsComponent } from './components/mat-icons/mat-icons.component';
import { MatlistComponent } from './components/matlist/matlist.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { MatCardsComponent } from './components/mat-cards/mat-cards.component';


const routes: Routes = [
  {path: 'typography', component: TypographyComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'button-toggles', component: ToggleButtonsComponent},
  {path: 'mat-icons', component: MatIconsComponent},
  {path: 'mat-list', component: MatlistComponent},
  {path: 'mat-exp-panel', component: ExpansionPanelComponent},
  {path: 'mat-cards', component: MatCardsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
