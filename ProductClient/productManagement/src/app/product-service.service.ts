import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  addProduct(prod:Product):Observable<number>{
    return this.http.post<number>('http://localhost:8081/productmanagement/add',prod);
  }
  viewProduct():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8081/productmanagement');
  }
  viewProductById(id):Observable<Product>{
    return this.http.get<Product>('http://localhost:8081/productmanagement/product/'+id);
  }
  updateProduct(prod:Product):Observable<number>{
    return this.http.post<number>('http://localhost:8081/productmanagement/update',prod);
  }
  deleteProduct(id):Observable<Product>{
    return this.http.get<Product>('http://localhost:8081/productmanagement/delete/'+id);
  }
  viewProductInRange(start:Number,end:Number):Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8081/productmanagement/product/'+start+"/"+end);
  }
}
