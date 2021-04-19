import { Injectable, Injector } from '@angular/core';
import { IngredientService } from '../ingredient/ingredient.service';
import { SharingDataService } from '../sharing-data/sharing-data.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _ingredientService: IngredientService | undefined;
  public get ingredientService(): IngredientService {
    if (!this._ingredientService){
      this._ingredientService = this.injector.get(IngredientService);
    }
    return this._ingredientService;
  }

  private _sharingDataService: SharingDataService | undefined;
  public get sharingDataService(): SharingDataService {
    if (!this._sharingDataService) {
      this._sharingDataService = this.injector.get(SharingDataService);
    }
    return this._sharingDataService;
  }

  constructor(private injector: Injector) { }

  getOrderList(data: any) {
    return this.ingredientService.nutritionAnalysis(data);
  }

  getStateAnalysis() {
    return this.sharingDataService.analysisData;
  }

  setStateAnalysis(data: any) {
    return this.sharingDataService.transferAnalaysisData(data);
  }

}
