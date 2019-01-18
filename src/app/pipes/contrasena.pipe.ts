import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    let retorno = '';
    if (activar) {
      for (let index = 0; index < value.length; index++) {
        retorno += '*';
      }
    } else { retorno = value; }
    return retorno;
  }
}
