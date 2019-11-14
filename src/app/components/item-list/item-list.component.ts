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

  //Fetch list from server
  fetchList() {
    this.itemService.getItems().subscribe(items => {
      this.initialList = items;
      this.searchList = this.initialList;
      //Process list and set it up with children
      this.initiateList();
    });
  }

  initiateList() {
    let sortedList: Item[] = [];
    let childList: Item[] = [];

    //Split list into top level components and children
    this.searchList.forEach(e => {
      if (e.parent_id === null || this.searchList.length === 1) {
        e.child = [];
        sortedList.push(e);
      } else {
        e.child = [];
        childList.push(e);
      }
    });

    //Find the parent component for all the children
    childList.forEach(e => {
      this.findParent(sortedList, e);
    });

    //Add the finished list to Items(The list which is displayed in the DOM)
    this.items = sortedList;
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

  //Search function
  getByKeyword(e) {
    e.preventDefault();
    //Get search text, trim it and make it lowercase
    const search = this.searchText.trim().toLowerCase();
    if (!search.length) this.searchList = this.initialList;
    this.searchList = this.initialList.filter(
      item => item.title.toLowerCase().indexOf(search) > -1,
    );

    //Process list and set it up with children
    this.initiateList();
  }
}
