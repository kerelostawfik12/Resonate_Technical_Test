import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'connections'
})
export class ConnectionsPipe implements PipeTransform {

  transform(n: number): any {
    return (n * 23) % 32 ;
  }

}
