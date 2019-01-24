import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    url = `https://www.youtube.com/embed/${url}?rel=0&amp;controls=0&amp;showinfo=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
