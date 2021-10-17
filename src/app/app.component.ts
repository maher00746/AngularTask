import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './Services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mahertask';
  loadingTxt$: Observable<string>;

  constructor(private loadingService: LoadingService) {
    this.syncLoadingTxt();
  }
  syncLoadingTxt() {
    this.loadingTxt$ = this.loadingService.getloadingTxt();
  }
}
