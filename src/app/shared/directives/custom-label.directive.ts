import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})

export class CustomLabelDirective implements OnInit {

  private htmlElement: ElementRef<HTMLElement>;
  private _color: string = '';
  private _errors?: ValidationErrors | null;

  // @Input() myColorCustomLabel?: string;
  @Input() set myColorCustomLabel( value: string ){
    this._color = value;
    this.setStyle();
  };

  @Input() set errorsCustomLabel( value: ValidationErrors | null | undefined ){
    this._errors = value;
    this.setErrors();
  }

  constructor( private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
    // this.htmlElement.nativeElement.innerHTML = "Hi, my directive";
  }

  ngOnInit(): void {
    // console.info('Directiva iniciada con color:', this._color);
  }

  setStyle = (): void => {
    if( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  };

  setErrors = (): void => {
    if( !this.htmlElement ) return;
    if( !this._errors ){
      this.htmlElement!.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys( this._errors );

    if( errors.includes('required') ){
      this.htmlElement!.nativeElement.innerText = 'El campo es requerido';
      return;
    };

    if( errors.includes('minlength') ){
      this.htmlElement!.nativeElement.innerText = 'El campo debe tener minimo 6 caracteres';
      return;
    };

    if( errors.includes('email') ){
      this.htmlElement!.nativeElement.innerText = 'No es un correo valido';
      return;
    };
  }

}
