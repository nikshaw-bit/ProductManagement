import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  prod:Product=new Product();
  constructor(private service:ProductServiceService, private activated:ActivatedRoute){}
  id=this.activated.snapshot.params['id'];
  ngOnInit(): void {
    this.service.viewProductById(this.id)
    .subscribe(data=>{
      this.prod=data;
    })
  }


}
