import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-product-page',
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  // constructor() { private fb: FormBuilder() };
  //EN VERSIONES NUEVAS DE ANGULAR SE HACE DE ESTE MODO.
  private fb = inject( FormBuilder );

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ], []]
  });

  public myColor: string = 'green';

  constructor() {};

}
