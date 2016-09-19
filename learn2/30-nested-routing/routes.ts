import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { Welcome } from './welcome';
import { Contacts } from './contact-manager/contacts.component';
import { People } from './contact-manager/people.component';
import { Companies } from './contact-manager/companies.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  {
    path: 'contacts',
    component: Contacts,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: People },
      { path: 'companies', component: Companies }
    ]
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, config);
export const ROUTED_COMPONENTS = [Welcome, Contacts, People, Companies];
