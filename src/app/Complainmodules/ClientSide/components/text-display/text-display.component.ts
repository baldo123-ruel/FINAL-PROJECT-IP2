import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit {
  @Input()
  text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
