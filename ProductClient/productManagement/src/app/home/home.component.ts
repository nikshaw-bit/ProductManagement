import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:ProductServiceService){}
  
  myDate=new Date('04/11/2023');
  subDate=new Date('04/14/2023');
  prod:Product[];
  ngOnInit() {
    this.service.viewProduct()
    .subscribe(data=>{
      this.prod=data;
    })
  }

}
