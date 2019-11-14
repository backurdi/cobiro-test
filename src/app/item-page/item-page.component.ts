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
    //Get single item with Id from Url params
    this.route.paramMap.subscribe(params => {
      //Kunne ikke helt forstå hvorfor den giver fejl. Koden køre dog stadgi
      this.itemService.getItem(params.params.itemId).subscribe(item => {
        this.item = item;
      });
    });
  }

  //To toggle side nav in mobile version
  toggleNav() {
    console.log('toggle');
    this.responsive = !this.responsive;
  }
}
