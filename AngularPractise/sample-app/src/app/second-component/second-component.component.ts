import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  // theWord: string = 'This is the Second component';
  // isChanged=true;

  // changetheword() {
  //   this.theWord = 'Hello, It is changed';
  //   this.isChanged=false;
  // }
}
