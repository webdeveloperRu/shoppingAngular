<template>
  <div>
    <h1 mat-dialog-title="">Name</h1>
    <mat-form-field style="width: 100%">
      <input
        matinput=""
        [(ngmodel)]="selectedRecipeData.name"
        [value]="selectedRecipeData.name"
      />
    </mat-form-field>
    <h1 mat-dialog-title="" style="margin-top: 30px">Ingredients</h1>
    <mat-divider></mat-divider>
    <div style="height: 180px; overflow-y: auto">
      <mat-list role="list" *ngfor="let item of ingredients; index as i">
        <mat-list-item role="listitem">
          <div class="ingredient-list-item">
            <div>{{ item.name }}</div>
            <div>
              <button
                mat-icon-button=""
                aria-label="Example icon button with a menu icon"
                (click)="removeIngredient(i)"
              >
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-list-item>
        <mat-divider></mat-divider>
      </mat-list>
    </div>
    <div style="display: flex; align-items: center">
      <mat-form-field appearance="fill" style="width: 100%; margin-top: 20px">
        <mat-label>Select product to add ingredients</mat-label>
        <mat-select (selectionchange)="setCurrentProduct($event)">
          <mat-option
            *ngfor="let product of productList; index as i"
            [value]="i"
          >
            {{ product.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <button
        mat-mini-fab=""
        color="primary"
        aria-label="Example icon button with a menu icon"
        (click)="addProductToIngredients()"
        style="margin-left: 20px;"
      >
        <mat-icon>add_circle</mat-icon>
      </button>
    </div>
    <h1 mat-dialog-title="" style="margin-top: 30px">Preparation</h1>
    <mat-form-field style="width: 100%">
      <textarea
        matinput=""
        [(ngmodel)]="selectedRecipeData.description"
        [value]="selectedRecipeData.description"
        style="height: 100px"
      ></textarea>
    </mat-form-field>
    <div mat-dialog-actions="" style="display: flex; justify-content: flex-end">
      <button mat-raised-button="" color="primary" (click)="onUpdateRecipe()">
        update
      </button>
      <button mat-button="" color="accent" (click)="onCancelClick()">
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
