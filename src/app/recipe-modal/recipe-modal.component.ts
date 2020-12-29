import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent implements OnInit {
  products : {name: string}[];
  recipeName = "";
  preparationDescription = "";
  recipeProductList : {name: string, description: string, products:any}[];
  selectedProduct : {selected: any}[];
  constructor(public dialogRef: MatDialogRef<RecipeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.products = [];
    this.selectedProduct=[];
    if (localStorage.getItem('product') !== null) {
      this.products = JSON.parse(localStorage.getItem('product')|| '{}');
      for (let i = 0; i < this.products.length; i++) {
        this.selectedProduct.push({selected: false})
      }
    }

    if (localStorage.getItem('recipe') !== null)
      this.recipeProductList = JSON.parse(localStorage.getItem('recipe')|| '{}');
    else
      this.recipeProductList = []
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close({
    });
  }

  addSelectedProduct(checked: boolean, index:number) {
    this.selectedProduct[index].selected = checked;
  }
  onAddRecipe(): void {
    let productsSelected = [];
    for (let i = 0; i < this.selectedProduct.length; i++) {
      if( this.selectedProduct[i].selected) {
        productsSelected.push(this.products[i])
      }
    }
    if(this.recipeName === "") {
      alert('please input name!')
      return;
    }
    if(this.preparationDescription === "") {
      alert('please input description!')
      return;
    }
    if(productsSelected.length === 0) {
      alert('select products!')
      return;
    }


    let recipeItem = {name: this.recipeName, description: this.preparationDescription, products: productsSelected};
    this.recipeProductList.push(recipeItem)
    localStorage.setItem('recipe', JSON.stringify(this.recipeProductList))
    this.dialogRef.close({
    });
  }
}
