import { Component } from '@angular/core';
import { Ingredient } from '../shared/igredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent {
  ingredients: Ingredient[]= [
    new Ingredient('Lettuce',5),
    new Ingredient('Avacado',6)
  ]; 

}
