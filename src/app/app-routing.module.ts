import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent }      from './components/contacts/contact.component';
import { AlertsComponent }   from './components/alerts/alerts.component';

const routes: Routes = [
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: '',
        redirectTo: '/alerts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: ContactComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AlertsComponent, ContactComponent];
