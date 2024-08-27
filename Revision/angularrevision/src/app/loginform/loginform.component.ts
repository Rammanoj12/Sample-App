import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
    userobj:any={
      username:'',
      password:''
    }


    router =inject(Router);
  openHomePage(){
  if(this.userobj.username === 'manoj' && this.userobj.password === 'Ironman@12'){
    this.router.navigateByUrl('app-homepage');
    alert("Login  Success");
  }else{
    alert("Wrong Credentials");
  }
   }
}


