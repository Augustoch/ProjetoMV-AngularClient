import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgnfComponent } from './pgnf.component';

describe('PgnfComponent', () => {
  let component: PgnfComponent;
  let fixture: ComponentFixture<PgnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
