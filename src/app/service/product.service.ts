import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  getProducts(){
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
}
