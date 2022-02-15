import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return "Java"
      case 2:
        return ".NET"
      case 3:
        return "NodeJS"
      case 4:
        return "Advanced Vanilla JS"
      case 5:
        return "React"
      case 6:
        return "Angular"
      case 7:
        return "Kotlin"
      case 8:
        return "Dart"
      case 9:
        return "Flutter"
    }

  }

}
