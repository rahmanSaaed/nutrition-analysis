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

  constructor(
    private facadeService: FacadeService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }


  analyze() {
    console.log('data', this.ingridient.split("\n"));
    this.facadeService.getOrderList({ingr: this.ingridient.split("\n")}).subscribe(res => {
      console.log('res', res);
      if (res) {
        this.facadeService.setStateAnalysis(res);
        this.router.navigate(['ingredient-analysis']);

      }

    });
  }

}
