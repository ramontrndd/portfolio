import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { ScrollBehaviorService } from '../../services/scroll-behavior.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbar,
    MatButtonToggleModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuActive = false;
  private scrollService = inject(ScrollBehaviorService);
  constructor(
    private eRef: ElementRef,
    private scrollBehavior: ScrollBehaviorService
  ) {}

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  closeMobileMenu(): void {
    this.isMobileMenuActive = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (
      this.isMobileMenuActive &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.closeMobileMenu();
    }
  }

  scrollToTecnology(): void {
    this.scrollBehavior.scrollToSection('project');
    this.closeMobileMenu();
  }

  scrolToExperience(): void {
    this.scrollBehavior.scrollToSection('experience');
    this.closeMobileMenu();
  }

  scrollToAbout(): void {
    this.scrollBehavior.scrollToSection('about');
    this.closeMobileMenu();
  }

  scrolToContact(): void {
    this.scrollBehavior.scrollToSection('contact');
    this.closeMobileMenu();
  }
}
