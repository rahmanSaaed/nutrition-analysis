import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { SharingDataService } from 'src/app/services/sharindData/sharing-data.service';

@Component({
  selector: 'app-ingredient-analysis',
  templateUrl: './ingredient-analysis.component.html',
  styleUrls: ['./ingredient-analysis.component.scss']
})
export class IngredientAnalysisComponent implements OnInit {
  analysisData: any;
  ingredientsData: any;

  constructor(private fcaade: FacadeService) { }

  ngOnInit(): void {
    this.getAnalysisData();
  }

  getAnalysisData() {
    this.fcaade.getStateAnalysis().subscribe(data => {
      this.ingredientsData = data;
      console.log('data', data);
    })
  }

}
