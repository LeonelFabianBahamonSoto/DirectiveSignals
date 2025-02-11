import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  standalone: false,
})
export class CounterComponent {

  public counter = signal( 10 );
  public squaredCounter = computed( () => this.counter() * this.counter() );

  increaseBy = ( value: number ): void => {
    this.counter.update( current => current + value );
  };

  decreaseBy = ( value: number ): void => {
    this.counter.update( current => current - value );
  };

}
