import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularUpgrade16To17';
  product:any;

  constructor(private productService:ProductService){

  }

  getTitle(){
    return this.title;
  }

  getProducts(){
    this.productService.getProducts().subscribe(res=>{
      this.product=res;
    })
  }
}
