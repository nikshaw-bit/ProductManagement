import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  id:number;
  modifiedDate:Date= new Date();
  prod:Product=new Product();

  constructor(private fb:FormBuilder, private service:ProductServiceService){}
  productForm=this.fb.group({
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    quantity:['',[Validators.required]],
    mfgDate:['',[Validators.required]],
    expDate:['',[Validators.required]],
  });
  get name(){
    return this.productForm.get('name');
  }
  get price(){
    return this.productForm.get('price');
  }
  get quantity(){
    return this.productForm.get('quantity');
  }
  get mfgDate(){
    return this.productForm.get('mfgDate');
  }
  get expDate(){
    return this.productForm.get('expDate');
  }
  register(){
    this.prod.name=this.name.value;
    this.prod.price=Number(this.price.value);
    this.prod.quantity=Number(this.quantity.value);
    this.prod.mfgDate=this.mfgDate.value;
    this.prod.expDate=this.expDate.value;
    this.prod.modifiedDate=String(new Date());
    this.service.addProduct(this.prod)
    .subscribe(id=>{
      this.id=id;
     
    });
  }
}
