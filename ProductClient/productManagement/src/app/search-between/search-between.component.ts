import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-between',
  templateUrl: './search-between.component.html',
  styleUrls: ['./search-between.component.css']
})
export class SearchBetweenComponent {
  constructor(private fb:FormBuilder,private service:ProductServiceService){}

  
  ifSearched:boolean=false;
  prod:Product[];
  get from(){
    return this.searchForm.get('from');
  }
  get to(){
    return this.searchForm.get('to');
  }
  searchForm=this.fb.group({
    from:['',[Validators.required]],
    to:['',[Validators.required]]
  });


  search(){
    this.ifSearched=true;
    let from=Number(this.from.value);
    let to=Number(this.to.value);
    this.service.viewProductInRange(from,to)
    .subscribe(data=>{
      this.prod=data;
    })
    
  }

  // fromm:number;
  // too:number;
  // search(){
  //   this.ifSearched=true;
  //   this.fromm=this.from.value;
  //   this.too=this.to.value;
  //   console.log(this.fromm);
    
    // this.service.viewProductInRange(this.fromm,this.too)
    // .subscribe(data=>{
    //   this.prod=data;
    //   console.log(this.prod); 
    // });
  // }
 

  toggle(){
    this.ifSearched=false;
  }
}
