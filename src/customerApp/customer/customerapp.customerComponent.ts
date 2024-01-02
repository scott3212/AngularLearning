import { Component } from '@angular/core';
import { Customer } from "./customerapp.model"
import {ILogger, ConsoleLogger} from "../utility/customerApp.Logger"

@Component({
  templateUrl: './customerapp.customerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>;
  logger : ILogger = new ConsoleLogger();
  constructor() {
    this.logger.log()
  }

  add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeOfValidator:string, controlName:string) : boolean {
      return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeOfValidator);
  }
}
