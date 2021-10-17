import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { MessageService } from "primeng/api";
import { EMPTY, Observable, of } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { userResult } from "../models/user-result";
import { FilterService } from "../Services/filter.service";
import { LoadingService } from "../Services/loading.service";
import { ResultService } from "../Services/result.service";

@Injectable({ providedIn: 'root' })
export class ResultsResolver implements Resolve<string> {
  constructor(private messageService: MessageService, private loadingService: LoadingService,
    private filterService: FilterService, private resultService: ResultService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const key = route.params.key;
    if (key) {
      this.loadingService.showloading('Fetching your results ...');
      return this.resultService.getResults(key, this.filterService.buildFilter(this.filterService.getdefaultFilter())).pipe(
        mergeMap((results: userResult) => {
          if (results.total_count != 0) {
            return of(results);
          } else {
            this.loadingService.hide();
            this.messageService.add({ severity: 'info', summary: 'Search Results', detail: 'No items found' });
            return EMPTY;
          }
        })
      );
    } else {
      return EMPTY;
    }
  }
}

