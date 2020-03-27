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
import {FormsModule} from '@angular/forms';
import { MatlistComponent } from './components/matlist/matlist.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { MatCardsComponent } from './components/mat-cards/mat-cards.component'

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
