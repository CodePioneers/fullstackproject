import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username:String='Pioneers'
  private password:String=''
  private errormessage='inavalid Login'
  private invalidlogin=false
  

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  handleLogin()
  {
    if(this.username==='Pioneers'&& this.password==='dummy'){
      console.log('valid login')
      this.invalidlogin=false
     console.log(this.invalidlogin)
   
     
    }
    else{
      this.invalidlogin=true
      console.log(this.invalidlogin)
    }
    
  }

}
