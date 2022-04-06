import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, display: boolean = false): string {
    return display ? '*'.repeat(value.length) : value;
  }
}
