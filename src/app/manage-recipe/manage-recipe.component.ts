import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';
import { RecipeViewModalComponent } from '../recipe-view-modal/recipe-view-modal.component';
@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrls: ['./manage-recipe.component.css']
})
export class ManageRecipeComponent implements OnInit {
  recipeList : {name: string}[];
  constructor(public dialog: MatDialog) {
    this.recipeList = []

  }

  ngOnInit(): void {
    if(localStorage.getItem('recipe') !== null)
      this.recipeList = JSON.parse(localStorage.getItem('recipe')|| '{}');
    else
      this.recipeList = [];
  }

  onAddRecipe() {
    const dialogRef = this.dialog.open(RecipeModalComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.recipeList = JSON.parse(localStorage.getItem('recipe')|| '{}');
    });
  }

  deleteRecipe(index: number) {
    this.recipeList.splice(index, 1);
    localStorage.setItem('recipe', JSON.stringify(this.recipeList))
  }

  onViewRecipe(index: number) {
    localStorage.setItem('selected recipe', JSON.stringify(index));
    const dialogRef = this.dialog.open(RecipeViewModalComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.recipeList = JSON.parse(localStorage.getItem('recipe')|| '{}');
    });
  }
}
