import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    let words = value.toLocaleLowerCase().split(' ');
    if (all) {
      words = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      });
    } else {
      words[0] = words[0][0].toUpperCase() + words[0].substring(1);
    }
    return words.join(' ');
  }
}
