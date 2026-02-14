import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { environment } from '../../Environment/environment';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z\s]+$/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }



  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const payload = {
      Name: this.contactForm.value.name,
      Email: this.contactForm.value.email,
      Message: this.contactForm.value.message
    };
    
   

    // Send POST request
    this.http.post(environment.apiUrl, payload,{ responseType: 'text' }).subscribe({
      next: (res: any) => {
        console.log('Success:', res);
        // Optionally, show success message
        alert('Message sent successfully!');
        this.contactForm.reset();
      },
      error: (err) => {
        alert('Something went wrong. Please try again.');
      }
    });
  }




}
