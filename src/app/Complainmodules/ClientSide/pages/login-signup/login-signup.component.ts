import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { ToastServiceService } from '../../services/toast-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  
  constructor(private route: Router ,private userService : UserServiceService , private toast: ToastServiceService) { }

  ngOnInit(): void {
     
  }
  signUp(form: NgForm){
    this.userService.AddUsers(form.value).subscribe(res=> {
      this.toast.getSignupMsgSuccess();
      form.resetForm();
    }, err => {
      alert("Something went wrong!");
    });
  }
  Login(login: NgForm){
     this.userService.getUser(login.value.password, login.value.password)
     .subscribe(res=>{
       const user = res.find((a:any)=>{
        return a.email === login.value.email && a.password === login.value.password
       });
       if(user){
         this.toast.getSuccess("Login Successfully","Welcome " + user.username);
         this.route.navigate(['/Home']);
         localStorage.setItem("CurrentUser" , JSON.stringify(user));
       }else{
        this.toast.getWarning("Account not found ","Please try again.. ");
       }
     });
  }

}
