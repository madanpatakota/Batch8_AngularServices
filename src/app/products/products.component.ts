import { Component, Input } from '@angular/core';
import { ProductService } from '../products.services';

//Target : i need the products List in  my Component
//  1. I see that products List are available in the getProducts() method
// getProducts method is available in the product service.

/// 2(think) 95(code effort)

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductService]
})

//1.DataBinding..
//2.Viewchild
export class ProductsComponent {

  // [
  //   {
  //     Id: 1,
  //     Name: 'Iphone',
  //   },
  //   {
  //     Id: 2,
  //     Name: 'Samsung',
  //   },
  //];
    // *ngFor  -- for loop in the javascript 
    // print the list of values(anything object , string , number , boolean)


    @Input('Products')  Products : any  ; 
    
    constructor(private productService : ProductService){
          
    }




   
}
