import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'app-recipe-view-modal',
  templateUrl: './recipe-view-modal.component.html',
  styleUrls: ['./recipe-view-modal.component.css']
})
export class RecipeViewModalComponent implements OnInit {
  recipeProductList : {name: string, description: string, products:any}[];
  selectedRecipeNo = "";
  productList: {name: string}[];
  ingredients:{name: string}[];
  selectedRecipeData={name: "", description: "", products:[]};
  selectedProductNo: any;
  constructor(public dialogRef: MatDialogRef<RecipeViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.ingredients = [];
      this.productList = [];
      this.recipeProductList = [];
      if(localStorage.getItem('product') !== null)
        this.productList = JSON.parse(localStorage.getItem('product')|| '{}');
      else
        this.productList = [];
      if (localStorage.getItem('recipe') !== null)
        this.recipeProductList = JSON.parse(localStorage.getItem('recipe')|| '{}');
      else
        this.recipeProductList = []
      this.selectedRecipeNo = localStorage.getItem('selected recipe')|| "";
      this.selectedRecipeData = this.recipeProductList[parseInt(this.selectedRecipeNo)];
      this.ingredients = this.selectedRecipeData.products;
    }

  ngOnInit(): void {
  }
  addProductToIngredients() {
    if(this.selectedProductNo === undefined)  {
      alert('select Product first')
      return;
    }
    this.ingredients.push(this.productList[this.selectedProductNo])
  }
  setCurrentProduct(event: MatSelectChange):void {
    this.selectedProductNo = event.value
  }

  onUpdateRecipe(): void {
    if (this.selectedRecipeData.name ==="") {
      alert("input recipe name!")
      return;
    }
    if (this.ingredients.length === 0) {
      alert("ingredients empty! please add product.")
      return ;
    }
    this.recipeProductList[parseInt(this.selectedRecipeNo)].name = this.selectedRecipeData.name;
    this.recipeProductList[parseInt(this.selectedRecipeNo)].description = this.selectedRecipeData.description;
    this.recipeProductList[parseInt(this.selectedRecipeNo)].products=this.ingredients;
    localStorage.setItem('recipe',JSON.stringify(this.recipeProductList) )
    this.dialogRef.close({
    });
  }
  removeIngredient(index:number): void {
    this.ingredients.splice(index, 1);

  }

  onCancelClick(): void{
    this.dialogRef.close({
    });
  }

}
