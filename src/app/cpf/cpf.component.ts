import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CpfComponent),
      multi: true,
    }
  ]
})
export class CpfComponent implements OnInit {

  @Input() cpf;
  @Output() cpfChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.cpfChange.emit(this.cpf);
  }

  validate(): { [key: string]: any; } {
    if (!this.cpf) {
      return { cpfCheck: true };
    }

    console.log('212121')
    return null;
  }
}
