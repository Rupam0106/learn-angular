import { AbstractControl } from '@angular/forms';

export class IdValidators {
  static validId(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value >= 0) resolve({ validId: true });
      resolve(null);
    });
  }
}
