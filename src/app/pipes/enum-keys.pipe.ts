import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'enumKey'
})
export class EnumKeyPipe implements PipeTransform {
  constructor() {}

  transform(itemValue: any, filter: any): any {
    if (!itemValue || !filter) {
      return itemValue;
    }

    return filter[itemValue];
  }

}
