import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { NutritionFactsComponent } from './components/nutrition-facts/nutrition-facts.component';



@NgModule({
  declarations: [IngredientsListComponent, NutritionFactsComponent],
  imports: [
    CommonModule
  ],
  exports: [IngredientsListComponent, NutritionFactsComponent]
})
export class SharedModule { }
