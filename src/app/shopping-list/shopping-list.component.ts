import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList : {name: string}[];
  checkList :{name: string}[];
  productList: {name: string}[];
  productName = "";

  constructor() {
    this.shoppingList = [];
    this.checkList = [];
    this.productList = []
   }

  ngOnInit(): void {
    console.log(localStorage.getItem('product'))
    if(localStorage.getItem('product') !== null)
      this.productList = JSON.parse(localStorage.getItem('product'));
    else
      this.productList = [];
  }
  onAddProduct() {
    if (this.productName !== "") {
      let data = {name: this.productName};
      this.productList.push(data);
      localStorage.setItem('product', JSON.stringify(this.productList))
      this.productName = "";
    }
  }

  removeItemFromShoppingList(index : number) {
    this.shoppingList.splice(index, 1)
  }

  addItemCheckList(item: any, index: number) {
    this.shoppingList.splice(index, 1)
    this.checkList.push(item);
  }

  removeItemFromCheckList(index:number) {
    this.checkList.splice(index, 1);
  }

  removeProduct(index:number) {
    this.productList.splice(index, 1)
    localStorage.setItem('product', JSON.stringify(this.productList))
  }

  addItemShoppingList(item: any, index: number) {
    this.checkList.splice(index, 1);
    this.shoppingList.push(item);
  }

  addProductToShoppingList(item: any) {
    this.shoppingList.push(item)
  }
}
