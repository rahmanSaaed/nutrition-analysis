import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.scss']
})
export class NutritionFactsComponent implements OnInit {
  @Input() ingredients: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('ingredients', this.ingredients);
    this.checkIfNOData();
  }

  checkIfNOData() {
    this.ingredients ? "" :  this.router.navigate(['/'])
  }

}
