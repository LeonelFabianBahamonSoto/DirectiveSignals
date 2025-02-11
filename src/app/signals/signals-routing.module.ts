import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './page/counter/counter.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'counter',    component: CounterComponent },
      { path: 'user-info',  component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignalsRoutingModule { }
