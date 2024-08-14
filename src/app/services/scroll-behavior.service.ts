import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollBehaviorService {
  public scrollToSection(section: string): void {
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
