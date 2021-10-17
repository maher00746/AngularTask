import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  defaultFilter: LazyLoadEvent = {
    first: 1,
    rows: 9,
    sortField: 'login',
    sortOrder: 1,
  }
  constructor(
  ) { }

  getdefaultFilter() {
    return this.defaultFilter;
  }

  buildFilter(event: LazyLoadEvent) {
    let filter = '';
    filter = '&page=' + ((event.first / event.rows) + 1) + '&per_page=' + event.rows;
    let orderFilter = '';
    let sortOrder = event.sortOrder == 1 ? 'asc' : 'desc';
    if (event.sortField) {
      orderFilter = `&sort=${event.sortField}&order=${sortOrder}`;
    } else {
      orderFilter = `&sort=${this.defaultFilter.sortField}&order=asc`;
    }
    filter += orderFilter
    return filter;
  }
}
