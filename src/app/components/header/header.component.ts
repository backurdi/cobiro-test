import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  //Send toggle event to parent
  menuClicked() {
    return this.toggle.emit('toggle');
  }
}
