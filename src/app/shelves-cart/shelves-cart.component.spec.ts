/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShelvesCartComponent } from './shelves-cart.component';

describe('ShelvesCartComponent', () => {
  let component: ShelvesCartComponent;
  let fixture: ComponentFixture<ShelvesCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelvesCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelvesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
