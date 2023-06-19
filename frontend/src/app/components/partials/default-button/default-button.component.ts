import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent implements OnInit {
  @Input()
  type: 'submit' | 'button' = 'submit';  // for type we use :
  @Input()
  text: String = 'Submit';
  @Input()
  bgColor = '#e72929';  // for vale we use =
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem =  12;
  @Output()
  onClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}
