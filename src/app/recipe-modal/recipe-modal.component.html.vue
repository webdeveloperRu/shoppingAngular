<template>
  <div>
    <h1 mat-dialog-title="">Name</h1>
    <mat-form-field style="width: 100%">
      <mat-label>name</mat-label>
      <input matinput="" [(ngmodel)]="recipeName" [value]="recipeName" />
    </mat-form-field>
    <h1 mat-dialog-title="" style="margin-top: 30px;">Ingredients</h1>
    <mat-divider></mat-divider>
    <div style="height: 180px; overflow-y: scroll;">
      <mat-list role="list" *ngfor="let item of products; index as i">
        <mat-list-item role="listitem">
          <div style="width: 100%; ">
            <mat-checkbox
              color="primary"
              (change)="addSelectedProduct($event.checked, i)"
              >{{ item.name }}</mat-checkbox
            >
          </div>
        </mat-list-item>
        <mat-divider></mat-divider>
      </mat-list>
    </div>
    <h1 mat-dialog-title="" style="margin-top: 30px;">Preparation</h1>
    <mat-form-field style="width: 100%">
      <mat-label>preparation</mat-label>
      <textarea
        matinput=""
        [(ngmodel)]="preparationDescription"
        [value]="preparationDescription"
      ></textarea>
    </mat-form-field>
    <div
      mat-dialog-actions=""
      style="display: flex; justify-content: flex-end;"
    >
      <button mat-raised-button="" color="primary" (click)="onAddRecipe()">
        Add
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
