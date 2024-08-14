import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { GlobalConstants } from '../../shared/GlobalConstants';
import { SnackBarService } from '../../services/snack-bar.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(private snackBarService: SnackBarService) {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(GlobalConstants.nameRegex),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(GlobalConstants.emailRegex),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  handleSubmit(): void {
    if (this.contactForm.valid) {
      const serviceId = 'service_68gud2x';
      const templateId = 'template_xfm2h6w';
      const publicKey = 'hH2s5w8nLcl-9xW5x';

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        from_phone: this.contactForm.value.phone,
        to_name: 'Ramon Trindade',
        message: this.contactForm.value.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response);
          this.contactForm.reset();
          this.snackBarService.openSnackBar(
            'Email enviado com sucesso!',
            'Fechar'
          );
        })
        .catch((error: string) => {
          console.error('Error sending email:', error);
          this.snackBarService.openSnackBar('Erro ao enviar email.', 'Fechar');
        });
    } else {
      this.snackBarService.openSnackBar(
        'Por favor, preencha todos os campos corretamente.',
        'fechar'
      );
    }
  }
}
