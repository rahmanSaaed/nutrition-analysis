import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './facade.service';
import { IngredientService } from '../ingredient/ingredient.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [FacadeService, IngredientService]
})
export class FacadeModule { }
