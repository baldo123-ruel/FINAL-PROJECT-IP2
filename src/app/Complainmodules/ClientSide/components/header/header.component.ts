import { Component, OnInit } from '@angular/core';
import {ToastServiceService} from '../../services/toast-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  constructor(private msg: ToastServiceService , private route: Router) { }
  
  ngOnInit(): void {
     this.getCurrentUser()
  } 
  isLoggined() {
    this.msg.getWarning();
  }
  getCurrentUser(){
    this.currentUser = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
  }
  logout(){
    localStorage.removeItem("CurrentUser");
    this.route.navigate(['/']);
  }
  
}


