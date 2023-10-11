import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class BundlesService {
  product!:Product;
  constructor(private http: HttpClient) { }

  getAllBundles(){
    return this.http.get('http://localhost:3000/api/v1/bundles');
  }

}
