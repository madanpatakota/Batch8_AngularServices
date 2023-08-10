import { Component, Input , OnInit } from '@angular/core';
import { ProductService } from '../products.services';

//Target : i need the products List in  my Component
//  1. I see that products List are available in the getProducts() method
// getProducts method is available in the product service.

/// 2(think) 95(code effort)

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : []
})

//1.DataBinding..
//2.Viewchild
export class ProductsComponent implements OnInit  {

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

    //subscription
    ngOnInit(): void {
        this.productService.statusEmitter.subscribe((latestData)=>{
            console.log("You are in the Products Component");
            console.log(latestData);
        })
    }






   
}
