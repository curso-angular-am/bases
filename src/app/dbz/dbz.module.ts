import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzRoutingModule } from './dbz-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    DbzRoutingModule
  ]
})
export class DbzModule { }
