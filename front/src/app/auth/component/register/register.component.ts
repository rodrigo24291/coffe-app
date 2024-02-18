import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private authservice:AuthService) {}

  public formuser: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.minLength(4),Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
    password_repeat: ["", [Validators.required, Validators.minLength(4)]]
  }, {
    validators: this.confirmedValidator('password', 'password_repeat')
  });

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordMismatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  invalidField(field: string): boolean | null {
    return this.formuser.controls[field].errors && this.formuser.controls[field].touched;
  }

  errorMessage(field: string): string | null {
    if (!this.formuser.controls[field].errors) return null;
    const error = this.formuser.controls[field].errors || {};

    for (let key of Object.keys(error)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido";
        case 'minlength':
          return `El mínimo de caracteres debe ser ${error['minlength'].requiredLength}`;
        case 'passwordMismatch':
          return 'Las contraseñas no coinciden';
      }
    }
    return null;
  }

  registerUser() {
    if (this.formuser.invalid) {
      this.formuser.markAllAsTouched();
      return;
    }

const formData = { ...this.formuser.value };  // Clona el objeto
delete formData.password_repeat;  // Elimina la propiedad password_repeat

this.authservice.registro(formData).subscribe(
  (rodrigo) => {
    console.log(rodrigo);
  }
);

  }
}
