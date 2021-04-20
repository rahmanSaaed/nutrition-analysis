import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { NutritionFactsComponent } from './components/nutrition-facts/nutrition-facts.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [IngredientsListComponent, NutritionFactsComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [IngredientsListComponent, NutritionFactsComponent, HeaderComponent]
})
export class SharedModule { }
