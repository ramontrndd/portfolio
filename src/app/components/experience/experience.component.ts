import {
  NgxTimelineEvent,
  NgxTimelineItemPosition,
  NgxTimelineModule,
} from '@frxjs/ngx-timeline';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgxTimelineModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  events: (NgxTimelineEvent & { customClass?: string })[] = [
    {
      timestamp: new Date(2023, 5, 16, 10, 0), // Data válida
      title: 'DW Advogados & Associados',
      description:
        'Desenvolvi uma landing page para a empresa DW Advogados & Associados.',
      id: 2,
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date(2023, 6, 1, 10, 0), // Data válida
      title: 'FreeLancer',
      description:
        'Desde a presente data, estou trabalhando como freelancer, desenvolvendo sites e sistemas web para diversos clientes.',
      id: 1,
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
      customClass: 'custom-class',
    },
  ];
}
