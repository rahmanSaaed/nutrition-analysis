import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionAnalysisRoutingModule } from './nutrition-analysis-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientAnalysisComponent } from './ingredient-analysis/ingredient-analysis.component';
import { FacadeModule } from 'src/app/services/facade/facade.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IngredientComponent, IngredientAnalysisComponent],
  imports: [
    CommonModule,
    NutritionAnalysisRoutingModule,
    FacadeModule,
    FormsModule
  ]
})
export class NutritionAnalysisModule { }
