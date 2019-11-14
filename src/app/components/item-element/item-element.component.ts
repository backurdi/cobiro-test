import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-item-element',
  templateUrl: './item-element.component.html',
  styleUrls: ['./item-element.component.scss'],
})
export class ItemElementComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}
}
