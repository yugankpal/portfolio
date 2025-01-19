import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [MatFormFieldModule,FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ContactsComponent {
  constructor(private snackBar: MatSnackBar) {}

  onSubmit(contactForm: NgForm) {
    this.snackBar.open('Your request has been sent successfully. Yugank will connect with you in some time.', 'Close', {
      duration: 5000, // Snackbar will close after 5 seconds
    });
    contactForm.resetForm();
  }
}
