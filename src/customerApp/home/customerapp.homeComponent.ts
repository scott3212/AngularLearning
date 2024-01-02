import { Component } from '@angular/core';
import { ConsoleLogger, ILogger } from '../utility/customerApp.Logger';

@Component({
  templateUrl: './customerapp.homeView.html'
})
export class HomeComponent {
  logger : ILogger = new ConsoleLogger();
  constructor() {
    this.logger.log();
  }
}
