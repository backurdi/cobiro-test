import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  responsive: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggleNav() {
    console.log('toggle');
    this.responsive = !this.responsive;
  }
}
