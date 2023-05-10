import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  
  istrue:boolean=true;
  
  mydate=String(new Date());
  isExpired:boolean=false;
  prod:Product[];
  isDeleted:boolean=false;
  constructor(private http:HttpClient,private service:ProductServiceService){}
  ngOnInit(): void {
    this.service.viewProduct()
    .subscribe(data=>{
      this.prod=data;
    })
  }
  // delete(e){
  //   let x=e.target.value;
  //   // let id=this.activated.snapshot.params['id'].value;
  //   this.service.deleteProduct(x)
  //   .subscribe(data=>{
  //     this.isDeleted=true;
  //   });
  // }
  
}
