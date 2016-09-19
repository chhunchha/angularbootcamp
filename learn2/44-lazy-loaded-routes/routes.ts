import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// Note there is no import of the NameComponent or reference to './nameComponent'.

import { HomeComponent } from './home.component';

// We rely on System being present until the browser has a solid native module
// loading system. Since this is loaded directly we are going to tell TS to
// assume that it is available for our use.
declare var System: any;

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // This is close to the right syntax, but it needs different development
  // tooling than this kit provides.
  { path: 'hello', loadChildren: './name.component#NameComponent' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);
export const ROUTED_COMPONENTS = [HomeComponent];

// Behind the scenes, CLI converts the above syntax to something like this.
// loadChildren: () => System.import('./Home').then(({HomeModule}) => HomeModule)
