export class ProductService {
  products: any = [];

  constructor() {
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

       console.log(this.products);
       return this.products;
  }
  

}
