import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: ProductServiceService, private activated: ActivatedRoute) { }

  get id() {
    return this.productForm.get('id');
  }
  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }
  get mfgDate() {
    return this.productForm.get('mfgDate');
  }
  get expDate() {
    return this.productForm.get('expDate');
  }

  productForm = this.fb.group({
    id:[0],
    name:['', [Validators.required]],
    price: [0, [Validators.required]],
    quantity: [0, [Validators.required]],
    mfgDate: ['', [Validators.required]],
    expDate: ['', [Validators.required]],
  });
  isUpdated: boolean = false;
  modifiedDate: Date = new Date();
  prod: Product = new Product();
  register() {
    this.isUpdated=true;
    this.prod.id=this.id.value;
    this.prod.name = this.name.value;
    this.prod.price = Number(this.price.value);
    this.prod.quantity = Number(this.quantity.value);
    this.prod.mfgDate = String(this.mfgDate.value);
    this.prod.expDate =String(this.expDate.value);
    this.prod.modifiedDate = String(new Date());
    console.log(this.prod.modifiedDate);
    
    this.service.updateProduct(this.prod)
    .subscribe(data=>{
      if(data!==null){
        this.isUpdated=true;
      }
    });

  }
  ngOnInit() {
    this.id.disable();
    let id = this.activated.snapshot.params['id'];
    this.service.viewProductById(id)
      .subscribe(data => {// this.employee=data;
        this.productForm.setValue({
          id: Number(data.id),
          name:data.name,
          price:Number(data.price),
          quantity: Number(data.quantity),
          mfgDate:data.mfgDate,
          expDate: data.expDate
        })
      });
  }
}
