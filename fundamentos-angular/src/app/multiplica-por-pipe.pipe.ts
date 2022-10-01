import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPorPipe'
})
export class MultiplicaPorPipePipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
