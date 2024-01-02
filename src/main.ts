import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './customerApp/home/customerapp.mainModule';


platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
