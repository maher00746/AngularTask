import { LoadingService } from 'src/app/Services/loading.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService, private loadingService: LoadingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err) => {
                this.loadingService.hide();
                const error = err.error || err.statusText;
                this.messageService.add({ severity: 'error', summary: 'Something went wrong', detail: error.message });
                return throwError(error);
            })
        );
    }
}
