import { AbstractControl } from '@angular/forms';
export class CPFValidators {
  static verifyCPF(control: AbstractControl) {
    const cpf = control.value;

    let sum: number = 0;
    let rest: number;
    let validated: boolean;

    const regex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

    if (
      cpf == '00000000000000' ||
      cpf == '0000000000000' ||
      cpf == '000000000000' ||
      cpf == '00000000000' ||
      cpf == '11111111111111' ||
      cpf == '1111111111111' ||
      cpf == '111111111111' ||
      cpf == '11111111111' ||
      cpf == '22222222222222' ||
      cpf == '2222222222222' ||
      cpf == '222222222222' ||
      cpf == '22222222222' ||
      cpf == '33333333333333' ||
      cpf == '3333333333333' ||
      cpf == '333333333333' ||
      cpf == '33333333333' ||
      cpf == '44444444444444' ||
      cpf == '4444444444444' ||
      cpf == '444444444444' ||
      cpf == '44444444444' ||
      cpf == '55555555555555' ||
      cpf == '5555555555555' ||
      cpf == '555555555555' ||
      cpf == '55555555555' ||
      cpf == '66666666666666' ||
      cpf == '6666666666666' ||
      cpf == '666666666666' ||
      cpf == '66666666666' ||
      cpf == '77777777777777' ||
      cpf == '7777777777777' ||
      cpf == '777777777777' ||
      cpf == '77777777777' ||
      cpf == '88888888888888' ||
      cpf == '8888888888888' ||
      cpf == '888888888888' ||
      cpf == '88888888888' ||
      cpf == '99999999999999' ||
      cpf == '9999999999999' ||
      cpf == '999999999999' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      validated = false;
    else {
      for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(cpf.substring(9, 10))) validated = false;

      sum = 0;
      for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 11;

      if (rest == 10 || rest == 11) rest = 0;
      if (rest != parseInt(cpf.substring(10, 11))) validated = false;

      validated = true;
    }

    if (validated) return null;

    return { cpfInvalidated: true };
  }
}
