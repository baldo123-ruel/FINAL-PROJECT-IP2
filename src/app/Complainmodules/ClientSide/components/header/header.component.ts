import { Component, OnInit } from '@angular/core';
import {ToastServiceService} from '../../services/toast-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private msg: ToastServiceService) { }
  
  ngOnInit(): void {
     
  } 
  isLoggined() {
    this.msg.getWarning();
  }
}


