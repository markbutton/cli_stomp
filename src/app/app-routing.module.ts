import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent }      from './components/demo/demo.component';
import { AlarmsComponent }   from './components/alarms/alarms.component';

const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: '',
        redirectTo: '/alarms',
        pathMatch: 'full'
    },
    {
        path: 'alarms',
        component: AlarmsComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AlarmsComponent, DemoComponent];
