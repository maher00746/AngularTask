import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import * as EventEmitter from 'events';
import { MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { FilterService } from '../Services/filter.service';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let debugElement: DebugElement, element: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      imports: [RouterTestingModule, HttpClientModule, TableModule],
      providers: [MessageService, FilterService]
    })
      .compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement; fixture.detectChanges();

  }));

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
  it(`should populate data table`, waitForAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.items.length).toBeGreaterThan(0);
    });
  }));
});
