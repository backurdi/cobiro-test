import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  initialList: Item[];
  searchList: Item[];
  items: Item[];
  searchText: string = null;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.fetchList();
  }

  initiateList() {
    let sortedList: Item[] = [];
    let childList: Item[] = [];

    //Insert top level elements
    this.searchList.forEach(e => {
      if (e.parent_id === null || this.searchList.length === 1) {
        e.child = [];
        sortedList.push(e);
      } else {
        e.child = [];
        childList.push(e);
      }
    });

    childList.forEach(e => {
      this.findParent(sortedList, e);
    });

    this.items = sortedList;
  }

  fetchList() {
    this.itemService.getItems().subscribe(items => {
      this.initialList = items;
      this.searchList = this.initialList;
      this.initiateList();
    });
  }

  findParent(sortList, child) {
    for (let i = 0; i < sortList.length; i++) {
      if (child.parent_id === sortList[i].id) {
        sortList[i].child.push(child);
      } else if (sortList[i].child) {
        this.findParent(sortList[i].child, child);
      }
    }
  }

  getByKeyword(e) {
    e.preventDefault();
    const search = this.searchText.trim().toLowerCase();
    if (!search.length) this.searchList = this.initialList;
    this.searchList = this.initialList.filter(
      item => item.title.toLowerCase().indexOf(search) > -1,
    );

    this.initiateList();
  }
}
