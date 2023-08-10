//import { Injectable } from "@angular/core";


// @Injectable(
//   {
//     providedIn:'root'
//   })
export class LogService {
  /*Action | event | method | function */
  /* Set of staments are executed at single time */
  getLog() {
    console.log('Its working!!!!!!');
  }

  getLogByName(name: string) {
    console.log('You have entered the ' + name);
  }



}
