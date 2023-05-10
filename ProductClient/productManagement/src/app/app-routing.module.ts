import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SearchBetweenComponent } from './search-between/search-between.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"add", component:AddProductComponent},
  {path:"view", component:ViewProductComponent},
  {path:"detail/:id", component:ProductDetailComponent},
  {path:"update/:id", component:UpdateProductComponent},
  {path:"delete/:id", component:DeleteProductComponent},
  {path:"filter", component:SearchBetweenComponent},
  {path:"", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
