import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'manage-recipe', component: ManageRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
