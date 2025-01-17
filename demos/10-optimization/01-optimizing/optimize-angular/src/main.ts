import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // used to demonstrate the change detection profiling
  // .then((moduleRef) => {
  //   const applicationRef = moduleRef.injector.get(ApplicationRef);
  //   const componentRef = applicationRef.components[0];
  //   // allows to run `ng.profiler.timeChangeDetection();`
  //   enableDebugTools(componentRef);
  // })
  .catch((err) => console.error(err));
