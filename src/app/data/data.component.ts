import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { AbstractComponent } from '../component/abstract-component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DataComponent),
      multi: true,
    }]
})
export class DataComponent extends AbstractComponent {

  public validate(c: FormControl) {
    return (this.data && this.data.length > 3) ? null : {
      data: {
        valid: false,
      },
    };
  }
}
