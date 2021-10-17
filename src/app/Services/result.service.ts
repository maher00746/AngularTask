import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterMetadata, SortMeta } from 'primeng/api';
import { userResult } from '../models/user-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  resourceUrl = 'https://api.github.com/search';


  constructor(protected http: HttpClient) { }

  getResults(key: string | null, filter: string): Observable<any> {
    let g = `users?q=${key} in:login` + filter;
    let q = `${this.resourceUrl}/${g}`;
    console.log(q)
    return this.http.get<userResult>(q);
  }
}

