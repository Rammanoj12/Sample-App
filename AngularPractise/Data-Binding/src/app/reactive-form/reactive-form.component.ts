import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
   studentList:FormGroup = new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(4)]),
    email:new FormControl("",[Validators.required,Validators.minLength(4)]),
    phonenumber:new FormControl("",[Validators.required,Validators.minLength(10)]),
    isChecked:new  FormControl(false,Validators.requiredTrue)
   })

  formValue:any[]=[];
isDisplay=false;
  onSubmit(){
    this.isDisplay=true;
    this.formValue.push({ ...this.studentList.value });
  }
// onClear(){

// }

   }
