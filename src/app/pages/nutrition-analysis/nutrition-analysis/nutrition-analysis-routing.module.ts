import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientAnalysisComponent } from './ingredient-analysis/ingredient-analysis.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  { path: '', component: IngredientComponent },
  { path: 'ingredient-analysis', component: IngredientAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NutritionAnalysisRoutingModule { }
