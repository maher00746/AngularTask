import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { item } from '../models/user-result';
import { FilterService } from '../Services/filter.service';
import { LoadingService } from '../Services/loading.service';
import { ResultService } from '../Services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  items: item[];
  keyWord: string = 'test';
  totalRecords = 0;
  @ViewChild('table') table: Table;
  constructor(private messageService: MessageService, private loadingService: LoadingService,
    private resultService: ResultService, private filterService: FilterService,
    protected activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getkeyWord();
  }
  loadData(event: LazyLoadEvent) {
    this.loadingService.showloading('')
    this.getResults(this.filterService.buildFilter(event));
  }
  getResults(filter) {
    this.resultService.getResults(this.keyWord, filter).subscribe(
      (data) => {
        console.log('this.keyWord', this.keyWord)
        console.log('data', data)
        this.loadingService.hide();

        if (data.total_count === 0) {
          this.messageService.add({ severity: 'info', summary: 'Search Results', detail: 'No items found' });
          this.router.navigate(['search']);
        } else {
          this.items = data.items
          this.totalRecords = data.total_count - 1;

        }
      });
  }
  getkeyWord() {
    this.activatedRoute.params.subscribe(
      (data) => { this.keyWord = data.key ? data.key : this.keyWord });
  }
  back() {
    this.router.navigate(['search']);
  }
}

