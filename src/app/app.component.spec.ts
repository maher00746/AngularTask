import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ErrorInterceptor } from './Helpers/error-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        HttpClientModule,
        TableModule,
        NgxSpinnerModule,
        ToastModule
      ],
      providers: [MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'mahertask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mahertask');
  });

});
