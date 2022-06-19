import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  
  constructor(private toast: NgToastService) { }

  getSuccess(detail: any , summary: any) {
     this.toast.success({detail: detail, summary: summary});
  }
  getWarning(detail?: any , summary?: any) {
    this.toast.warning({detail: detail, summary: summary});
 }
  getSignupMsgSuccess(){
    this.toast.success({detail: "Signup Successfully", summary: "You may now login"});
  }
}
