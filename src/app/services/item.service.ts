import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemUrl: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);
  }
  getItem(id): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemUrl}/${id}`);
  }
}
