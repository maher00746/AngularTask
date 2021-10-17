import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingTxt: BehaviorSubject<string>;
  private loadingTxtVar: string;
  constructor(private spinner: NgxSpinnerService) {
    this.loadingTxt = new BehaviorSubject<string>('Loading ...');
  }
  getloadingTxt(): Observable<string> {
    return this.loadingTxt.asObservable();
  }
  setloadingTxt(u: string) {
    this.loadingTxtVar = u;
    this.loadingTxt.next(u);
  }
  getLoadingVar() {
    return this.loadingTxtVar;
  }
  showloading(u: string) {
    if (u != undefined && u != '' && u != null) this.loadingTxt.next(u);
    else this.loadingTxt.next('Loading ...');

    this.spinner.show();
  }
  hide() {
    this.spinner.hide();
  }
}
