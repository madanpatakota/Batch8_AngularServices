import { Component } from '@angular/core';
import { ProductService } from './products.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ProductService]
})
export class AppComponent {
  //title = 'Batch8_AngularServices';
  constructor(private productService : ProductService){
  }

  productsList = [];
  ngOnInit(){
     this.productsList = this.productService.getProducts();
  }
}
