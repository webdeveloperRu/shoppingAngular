<template>
  <div>
    <mat-card class="recipe-list-card">
      <div class="recipe-list-title">Recipes</div>
      <mat-list role="list" *ngfor="let item of recipeList; index as i">
        <mat-list-item role="listitem">
          <div class="recipe-list-item">
            <div>{{ item.name }}</div>
            <div>
              <button
                mat-icon-button=""
                color="primary"
                aria-label="Example icon button with a home icon"
                (click)="onViewRecipe(i)"
              >
                <mat-icon>visibility</mat-icon>
              </button>
              <button
                mat-icon-button=""
                aria-label="Example icon button with a menu icon"
                (click)="deleteRecipe(i)"
              >
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-list-item>
        <mat-divider style="width: 95%; margin-left: 3%"></mat-divider>
      </mat-list>
      <button
        mat-raised-button=""
        color="primary"
        class="add-recipe-button"
        (click)="onAddRecipe()"
      >
        Add Recipe
      </button>
    </mat-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
