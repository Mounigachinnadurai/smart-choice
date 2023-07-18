/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VaseComponent } from './vase.component';

describe('VaseComponent', () => {
  let component: VaseComponent;
  let fixture: ComponentFixture<VaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
