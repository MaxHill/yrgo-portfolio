import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor() {}

  send(form) {
    // Make request to send email

    // Replace this with response from sending email
    return of({
      status: 'success',
      message: 'Email skickades utan problem, hörs snart'
    });
  }
}
