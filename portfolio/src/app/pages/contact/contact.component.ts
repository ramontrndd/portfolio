import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { GlobalConstants } from '../../../assets/global-constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  themeService: ThemeService = inject(ThemeService);
  constructor(
    private snackBar: MatSnackBar 
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required,Validators.pattern(GlobalConstants.nameRegex)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]),
      message: new FormControl(null, Validators.required),
    });
  }

  handleSubmit(): void {
    if (this.contactForm.valid) {
      const serviceId: string = 'service_68gud2x';
      const templateId: string = 'template_xfm2h6w';
      const publicKey: string = 'hH2s5w8nLcl-9xW5x';

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        to_name: 'Ramon Trindade',
        message: this.contactForm.value.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response);
          this.contactForm.reset();
          this.snackBar.open('Email enviado com sucesso!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['green-snackbar'],
          }); // Exibir snackbar de sucesso!
        })
        .catch((error: any) => {
          console.error('Error sending email:', error);
          this.snackBar.open('Erro ao enviar email.', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['black-snackbar'],
          }); // Exibir snackbar de erro!
        });
    } else {
      this.snackBar.open(
        'Por favor, preencha todos os campos corretamente.',
        'fechar',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['black-snackbar'],
        }
      );
    }
  }

  ngOnInit(): void {}
}
