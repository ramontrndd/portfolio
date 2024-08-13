/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guide-button',
  standalone: true,
  imports: [],
  templateUrl: './guide-button.component.html',
  styleUrl: './guide-button.component.scss',
})
export class GuideButtonComponent {
  @Input() title: string = '';
}
