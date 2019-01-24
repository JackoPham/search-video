import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitText',
})
export class SplitTextPipe implements PipeTransform {
  transform(value: any): any {
    if (value && value.length > 30) {
      return value.substring(0, 30) + '...';
    }
    return value;
  }
}
