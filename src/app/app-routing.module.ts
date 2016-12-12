import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent }      from './components/demo/demo.component';
import { AlertsComponent }   from './components/alerts/alerts.component';

const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: '',
        redirectTo: '/alerts',
        pathMatch: 'full'
    },
    {
        path: 'alerts',
        component: AlertsComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AlertsComponent, DemoComponent];
