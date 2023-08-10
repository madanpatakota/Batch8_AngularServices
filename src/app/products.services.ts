
import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';


@Injectable()
export class ProductService {
  products: any = [];
  statusEmitter = new EventEmitter<string>();
  /* we can emit data */

  constructor(private logService:LogService) {
    this.products = [
      {
        Id: 1,
        Name: 'Iphone',
      },
      {
        Id: 2,
        Name: 'Samsung',
      },
    ];
  }

  /* We can use this action for fetch the products*/
  getProducts() {
      return this.products;
  }

  /*Create the new product*/
  createProduct(product:string){
       /// Statements ... 
       console.log("product name is " , product);   //oppo
      //  .length
      //[1,3,3,4,55,5,55]  => 7
       //{ Id : 3 , Name : 'Oppo'};
       let latestRecord =  { Id : this.products.length + 1 , 'Name' :  product };
       this.products.push(latestRecord);   // 3 records
       this.statusEmitter.emit("You have entered the New value . you know i.e. is the " + product);
       this.logService.getLogByName("Log is " + product);
       return this.products;
  }
  

}
