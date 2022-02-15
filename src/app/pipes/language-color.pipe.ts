import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageColor'
})
export class LanguageColorPipe implements PipeTransform {

  transform(language: number, ...args: unknown[]): unknown {
    switch (language) {
      case 0: return 'list-group-item-primary'
      case 1: return 'list-group-item-secondary'
      case 2: return 'list-group-item-success'
      case 3: return 'list-group-item-danger'
      case 4: return 'list-group-item-warning'
      case 5: return 'list-group-item-info'
      case 6: return 'list-group-item-light'
      case 7: return 'custom-class-3'
      case 8: return 'custom-class-1'
      case 9: return 'custom-class-2'
    }
  }

}
