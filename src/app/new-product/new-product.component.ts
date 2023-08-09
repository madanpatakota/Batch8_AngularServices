import { Component, ViewChild , ElementRef} from '@angular/core';
import { LogService } from '../log.service';
import { ProductService } from '../products.services';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers : [LogService , ProductService]
})
export class NewProductComponent {


   constructor(private logService : LogService , private productService: ProductService){}

  //new NewProductComponent();



  @ViewChild('ProductName') vProdcutName : ElementRef;
  evtSubmit(){
     let elValue = this.vProdcutName.nativeElement.value;
     //console.log("Your Product Name is" , elValue);

     //let logService = new LogService();
     //logService.getLog();
     this.logService.getLogByName(elValue);

     this.productService.createProduct(elValue);

  }


}
