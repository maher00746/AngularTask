import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../Services/loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query = '';
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  search() {
    if (!this.query) {
      this.messageService.add({ severity: 'Tip', summary: 'Search Results', detail: 'Enter Search Word' });
    } else {
      this.router.navigate(['results', this.query]);
    }
  }
}
