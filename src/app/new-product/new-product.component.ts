import { Component, ViewChild , ElementRef} from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers : [LogService]
})
export class NewProductComponent {


   constructor(private logService : LogService){}

  //new NewProductComponent();



  @ViewChild('ProductName') vProdcutName : ElementRef;
  evtSubmit(){
     let elValue = this.vProdcutName.nativeElement.value;
     //console.log("Your Product Name is" , elValue);

     //let logService = new LogService();
     //logService.getLog();
     this.logService.getLogByName(elValue);

  }


}
