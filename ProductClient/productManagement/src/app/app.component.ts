import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService } from './product-service.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productManagement';

  get isEntered(){
    return this.searchBar.get('search');
  }
  constructor(private fb:FormBuilder,private service:ProductServiceService){}
  id;
  ifSearched:boolean=false;
  ifNull:boolean;
  prod:Product=new Product();
  search(){
    this.ifSearched=true;
    this.id=Number(this.isEntered.value);
    
    this.service.viewProductById(this.id)
    .subscribe(data=>{
      this.prod=data;
      if(data!==null)
        this.ifNull=false;
      else
        this.ifNull=true;
    });
  }
  toggle(){
    this.ifSearched=false;
    this.ifNull=false;
  }
  searchBar=this.fb.group({
    search:['',[Validators.required]]
  })

}
