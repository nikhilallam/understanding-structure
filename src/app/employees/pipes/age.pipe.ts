import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageWithSuffix',
})
export class AgeWithSuffixPipe implements PipeTransform {
  transform(age: number): string {
    return `${age} years old`;
  }
}
