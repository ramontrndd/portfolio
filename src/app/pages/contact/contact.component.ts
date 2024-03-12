import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

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
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
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
          this.contactForm.reset(); // Resetando o formulário após o envio bem-sucedido
        })
        .catch((error: any) => {
          console.error('Error sending email:', error);
        });
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }

  ngOnInit(): void {}
}
