import {
  Component,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatTooltipModule,
    MatSidenavModule,
    RouterOutlet,
    SidenavComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }

  collapsed = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidenavVisibility();
  }

  ngOnInit() {
    this.updateSidenavVisibility();
  }

  private updateSidenavVisibility() {
    if (window.innerWidth >= 768) {
      this.collapsed.set(false);
    } else {
      this.collapsed.set(true);
    }
  }
}
