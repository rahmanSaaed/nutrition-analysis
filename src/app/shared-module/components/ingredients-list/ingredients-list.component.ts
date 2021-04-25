import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  @Input() ingredients: any;
  invalidINgredient: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('ingredients', this.ingredients);
    this.checkIftherIsInvalidINgrediant();
    console.log('checkIftherIsInvalidINgrediant')
  }

  checkIftherIsInvalidINgrediant() {
    console.log('this.invalidINgredient', this.invalidINgredient)
    this.ingredients.forEach((el: any) => {
      el?.parsed ? '' : this.invalidINgredient = true;
      console.log(el?.parsed);
      console.log('this.invalidINgredient', this.invalidINgredient)
    });
  }

}
