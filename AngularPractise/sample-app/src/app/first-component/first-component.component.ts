import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  // theWord: string = 'This is the first component';
  // isChanged=false;

  // automobiles: any[]=[
  //   {id:1,Brand:'Maruthi',CC:200},
  //   {id:2,Brand:'Hyundai',CC:1500},
  //   {id:3,Brand:'Toyota',CC:600},
  //   {id:4,Brand:'Ferrari',CC:2200},
  //   {id:5,Brand:'LAMBORGHINI',CC:2500}

  // ]

  // selectedAutomobile: any = '';


  // displayItem(event:any) {
  //   const ans= event.target.value;
  //   this.selectedAutomobile = this.automobiles.find(car => car.id === ans);

  // }
  // changetheword() {
  //   this.theWord = 'Hello, It is changed';
  //   this.isChanged=true;
  // }





    word = 'This is the first component';
    counter=1;

    automobiles:any[]=[
      {
        id:1,
        type:'Car',
        brand:'Hyundai'
      },
      {
        id:2,
        type:'Car',
        brand:'Maruti'
      },
      {
        id:3,
        type:'Bike',
        brand:'Honda'
      },
      {
        id:4,
        type:'Bus',
        brand:'Volvo'
      },
      {
        id:5,
        type:'Lorry',
        brand:'TATA'
      }
    ]
  selectType:any=null;
    onChange() {
      if(this.counter>=1){
        this.word = 'It has been changed';
        this.counter--;
      }else {
        this.word = 'This is the first component';
        this.counter++;
      }

    }

    displayItem(event:Event){
  const element = event.target as HTMLSelectElement;
  const index =parseInt(element.value,10);
  this.selectType = this.automobiles[index];

    }


}
