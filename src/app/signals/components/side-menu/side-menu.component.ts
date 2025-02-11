import { Component, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  styleUrl: './side-menu.component.scss',
  templateUrl: './side-menu.component.html',
})

export class SideMenuComponent {

  // public menuItems = [
  //   { label: 'Contador', icon: '123', route: '/signals/counter' },
  //   { label: 'Usuario', icon: 'info', route: '/signals/user-info' },
  //   { label: 'Mutaciones', icon: 'settings', route: '/signals/properties' },
  // ];

  public menuItems = signal([
    { label: 'Contador', icon: '123', route: '/signals/counter' },
    { label: 'Usuario', icon: 'info', route: '/signals/user-info' },
    { label: 'Mutaciones', icon: 'settings', route: '/signals/properties' },
  ]);

  constructor( private router: Router ) {};

  changeMenuValue = ( value: string ): void => {
    const items = this.menuItems();
    const item = items.find( item => item.label == value );

    ( item && item.route ) && this.navigateToOption( item.route );
  };

  navigateToOption = ( itemRoute: string ) => {
    this.router.navigateByUrl( itemRoute );
  };
}
