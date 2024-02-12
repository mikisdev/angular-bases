import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { DbzlistComponent } from './components/dbz-list/dbzlist.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';



@NgModule({
  declarations: [MainPageComponent, DbzlistComponent, DbzAddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
