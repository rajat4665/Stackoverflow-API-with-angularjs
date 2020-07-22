import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackApiComponent } from './stack-api.component';

describe('StackApiComponent', () => {
  let component: StackApiComponent;
  let fixture: ComponentFixture<StackApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
