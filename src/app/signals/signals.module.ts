import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { MaterialModule } from '../material/material.module';

import { AppToolbarComponent } from '../shared/components/app-toolbar/app-toolbar.component';
import { CounterComponent } from './page/counter/counter.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';

@NgModule({
  declarations: [
    CounterComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SignalsLayoutComponent,
    UserInfoPageComponent,
  ],
  imports: [
    AppToolbarComponent,
    CommonModule,
    MaterialModule,
    SignalsRoutingModule,
  ]
})
export class SignalsModule { }
