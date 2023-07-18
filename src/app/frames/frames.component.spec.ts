/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramesComponent } from './frames.component';

describe('FramesComponent', () => {
  let component: FramesComponent;
  let fixture: ComponentFixture<FramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
