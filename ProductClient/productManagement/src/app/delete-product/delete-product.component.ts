import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  constructor(private service:ProductServiceService,private activated:ActivatedRoute){}
  isDeleted:boolean=false;
  prod:Product=new Product();
  ngOnInit(): void {
    let id=this.activated.snapshot.params['id'];
    // console.log(id);
    this.service.deleteProduct(id)
    .subscribe(data=>{
      this.prod=data;
      this.isDeleted=true;
    });
  }

  
  
}
