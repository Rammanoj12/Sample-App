import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: any = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    isChecked: false
  };
   isDisplay=false;
  formvalue: any[] = []; // Initialize as an array to hold multiple students

  onSubmit() {
    this.isDisplay=true;
    // Push a copy of the student object to the array
    this.formvalue.push({ ...this.student });

    // Optionally clear the form
    this.onClear();
  }

  onClear() {
    this.student = {
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      isChecked: false
    };
  }
}
