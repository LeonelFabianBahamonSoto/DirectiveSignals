import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'appSideNavMenu',
  imports: [ MaterialModule ],
  templateUrl: './app-side-nav-menu.component.html',
  styleUrl: './app-side-nav-menu.component.scss'
})

export class AppSideNavMenuComponent {

  @Output() toggleDrawer = new EventEmitter<void>();

  constructor() {};

  onToggleDrawer = (): void => {
    this.toggleDrawer.emit();
  };

}
