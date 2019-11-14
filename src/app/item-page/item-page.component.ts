import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  item: Item[];
  responsive: boolean = false;
  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemService.getItem(params.params.itemId).subscribe(item => {
        this.item = item;
      });
    });
  }

  toggleNav() {
    console.log('toggle');
    this.responsive = !this.responsive;
  }
}
