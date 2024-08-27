import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomepageComponent, LoginformComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  //   student:FormGroup = new FormGroup({
  //     firstname: new FormControl(" ",[Validators.required,Validators.minLength(3)]),
  //     lastname:new FormControl(" ",[Validators.required,Validators.minLength(3)]),
  //     email:new FormControl("",Validators.email),
  //     phonenumber:new FormControl(0,[Validators.required,Validators.minLength(10)]),
  //     isChecked:new FormControl(false)
  //   })


  //  showresult=false;


  //   formValue='';

  //   onSubmit=()=>{
  //    this.formValue=this.student.value;
  //    this.showresult=true;

  //  }

  //  onReset(){
  //   this.showresult=false;
  //   this.student.reset({
  //     firstname:'',
  //     lastname:'',
  //     email:'',
  //     phonenumber:'',
  //     isChecked:false
  //   })
  //  }



//   automobiles:any[]=[
//     {
//       id:1,
//       vehicleType:'bike',
//       brand:'Honda',
//       price:20000,
//       type:'TwoWheeler'
//     }
// ,
//     {
//       id:2,
//       vehicleType:'car',
//       brand:'Hyundai',
//       price:1500000,
//       type:'Lightmotor'
//     }
// ,
//     {
//       id:3,
//       vehicleType:'Bus',
//       brand:'AshokLeyland',
//       price:3000000,
//       type:'Heavymotor'
//     }
// ,
//     {
//       id:4,
//       vehicleType:'Lorry',
//       brand:'TATA',
//       price:3500000,
//       type:'Heavymotor'
//     }
// ,
//     {
//       id:5,
//       vehicleType:'Aeroplane',
//       brand:'Indigo',
//       price:500000000,
//       type:'Airvehicle'
//     }
// ,
//     {
//       id:6,
//       vehicleType:'Jet',
//       brand:'Rafale',
//       price:2000000000,
//       type:'Airvehicle'
//     }
// ,

//   ]

//   selectedtype:any=null;


//   onChange(event: Event) {
//     const selectElement = event.target as HTMLSelectElement;
//     const index = parseInt(selectElement.value, 10);
//     this.selectedtype = this.automobiles[index];
//   }




// constructor(private http:HttpClient){

// }

// userList:any[]=[];

// onGetAllUsers(){
//   this.http.get("https://pokeapi.co/api/v2/pokemon/").subscribe((req:any)=>{
//     this.userList =req.results;
//     console.log(this.userList);
//   })
// }

// constructor(private http:HttpClient){

// }

//    departmentObj:any={
//     departmentId:1092,
//     departmentName:"",
//     departmentLogo:""
//    }


//   onSave=()=>{
//     this.http.post("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment",this.departmentObj).subscribe((req:any)=>{
//       if(!req.result){
//         alert(req.message);
//       }else{
//         alert("Department Created successfully");
//       }

//     })
//   }

}
