import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade/facade.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  ingridient: string = '';
  isAnalyzing: boolean = false;

  constructor(
    private facadeService: FacadeService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }


  analyze() {
    this.isAnalyzing = true;
    this.facadeService.getOrderList({ingr: this.ingridient.split("\n")}).subscribe(res => {
      if (res) {
        this.isAnalyzing = false;
        this.facadeService.setStateAnalysis(res);
        this.router.navigate(['ingredient-analysis']);
      }
    }, error => {
      this.isAnalyzing = false;
    });
  }

}
