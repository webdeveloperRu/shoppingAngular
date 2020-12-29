<template>
  <div>
    <mat-card class="add-product-card">
      <div class="add-product-title">Add Product</div>
      <div
        style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;"
      >
        <mat-form-field style="width: 50%">
          <mat-label>product name</mat-label>
          <input matinput="" [(ngmodel)]="productName" [value]="productName" />
        </mat-form-field>
        <button
          mat-raised-button=""
          color="primary"
          class="add-product-button"
          (click)="onAddProduct()"
        >
          Add Product
        </button>
      </div>
      <div class="shopping-list-title">Products</div>
      <h3 style="text-align: center;">
        please select product to add shopping list
      </h3>
      <mat-list role="list" *ngfor="let item of productList; index as i">
        <mat-list-item role="listitem">
          <div class="shopping-list-item">
            <div>{{ item.name }}</div>
            <div>
              <button
                mat-icon-button=""
                color="primary"
                aria-label="Example icon button with a home icon"
                (click)="addProductToShoppingList(item)"
              >
                <mat-icon>add_circle_outline</mat-icon>
              </button>
              <button
                mat-icon-button=""
                aria-label="Example icon button with a menu icon"
                (click)="removeProduct(i)"
              >
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-list-item>
        <mat-divider style="width: 95%; margin-left: 3%"></mat-divider>
      </mat-list>
    </mat-card>
    <mat-card class="shopping-list-card">
      <div class="shopping-list-title">Shopping List</div>
      <h3 style="text-align: center;">
        please select product to add check list
      </h3>
      <mat-list role="list" *ngfor="let item of shoppingList; index as i">
        <mat-list-item role="listitem">
          <div class="shopping-list-item">
            <div>{{ item.name }}</div>
            <div>
              <button
                mat-icon-button=""
                color="primary"
                aria-label="Example icon button with a home icon"
                (click)="addItemCheckList(item, i)"
              >
                <mat-icon>check_circle_outline</mat-icon>
              </button>
              <button
                mat-icon-button=""
                aria-label="Example icon button with a menu icon"
                (click)="removeItemFromShoppingList(i)"
              >
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-list-item>
        <mat-divider style="width: 95%; margin-left: 3%"></mat-divider>
      </mat-list>
      <div class="check-list-title" style="margin-top: 30px;">Check List</div>
      <mat-list role="list" *ngfor="let item of checkList; index as i">
        <mat-list-item role="listitem">
          <div class="check-list-item">
            <div>{{ item.name }}</div>
            <div>
              <button
                mat-icon-button=""
                color="primary"
                aria-label="Example icon button with a home icon"
                (click)="addItemShoppingList(item, i)"
              >
                <mat-icon>add_circle_outline</mat-icon>
              </button>
              <button
                mat-icon-button=""
                aria-label="Example icon button with a menu icon"
                (click)="removeItemFromCheckList(i)"
              >
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </mat-list-item>
        <mat-divider style="width: 95%; margin-left: 3%"></mat-divider>
      </mat-list>
    </mat-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
