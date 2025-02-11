import { Component, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { Router, RouterModule } from '@angular/router';

import { AppSideNavMenuComponent } from '../app-side-nav-menu/app-side-nav-menu.component';

@Component({
  imports: [
    AppSideNavMenuComponent,
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  selector: 'app-toolbar',
  styleUrl: './app-toolbar.component.scss',
  templateUrl: './app-toolbar.component.html'
})

export class AppToolbarComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  public sidebarProductsItems = [
    { label: 'Products Main', description: 'Directiva productos', icon: 'inventory', url: '/products/product-main' },
  ];

  public sidebarSignalsItems = [
    { label: 'Counter', description: 'Signals Counter', icon: '123', url: '/signals/counter' },
    { label: 'user-info', description: 'Signals user-info', icon: 'info', url: '/signals/user-info' },
    { label: 'Properties', description: 'Signals properties', icon: 'settings', url: '/signals/properties' },
  ];

  constructor( private router: Router ) {};

  openDrawer = (): void => {
    this.drawer.toggle();
  };
}
