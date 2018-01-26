import { Validator, ControlValueAccessor, FormControl } from '@angular/forms';

export abstract class AbstractComponent implements Validator, ControlValueAccessor {

    protected data = '';

    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
        }
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public validate(c: FormControl) {
        return (this.data) ? null : {
            data: {
                valid: false,
            },
        };
    }

    public registerOnTouched() { }

    private onChange(event) {
        this.data = event.target.value;
        this.propagateChange(this.data);
    }

    private propagateChange = (_: any) => { };

}
