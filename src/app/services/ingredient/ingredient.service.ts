import { Injectable } from '@angular/core';
import { BaseServiceService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  // Request URL: https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92

  constructor(private baseSerevice: BaseServiceService) { }

  nutritionAnalysis(data?: any) {
   return this.baseSerevice.save(`nutrition-details?app_id=${environment.app_id}&app_key=${environment.app_key}`, data);
  }

}
