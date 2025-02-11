import { Component, inject, OnInit, signal } from '@angular/core';

import { UsersServiceService } from '../../services/users-service.service';

import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: false,
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss'
})

export class UserInfoPageComponent implements OnInit {

  private userService = inject( UsersServiceService );

  public userId = signal(1);
  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(false);

  constructor() {};

  ngOnInit(): void {
    this.getUser();
  }

  loadUser = ( index: number ) => {
    if( this.userId() == 1 && index == -1 ) return;

    this.currentUser.set( undefined );

    this.userId.update( currentId => currentId + ( index ));
    this.getUser();
  };

  getUser = (): void => {
    if( this.userId() <= 0 ) return;

    this.userService.getUserById( this.userId() )
      .subscribe({
        next: response => {
        this.currentUser.set( response );
        this.userWasFound.set( true );
      },
      error: error => {
        this.currentUser.set( undefined );
        this.userWasFound.set( false );
      }
    });
  }
}
