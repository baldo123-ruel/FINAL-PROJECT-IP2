import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  
  constructor(private toast: NgToastService) { }

  getSuccess() {
     this.toast.success({detail: "Successfully Post Compains", summary: "You can interact from your post replies!"});
  }
  getWarning() {
    this.toast.warning({detail: "Login First", summary: "Feel free to sign-up"});
 }
}
