import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'welcome'
})
export default class WelcomePipe implements PipeTransform {
  transform(value: string): string {
    let message = "Welcome " + value;
    return message;
  }
}