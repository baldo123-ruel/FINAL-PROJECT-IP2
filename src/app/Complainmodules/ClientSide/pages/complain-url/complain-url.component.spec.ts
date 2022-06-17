import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainURLComponent } from './complain-url.component';

describe('ComplainURLComponent', () => {
  let component: ComplainURLComponent;
  let fixture: ComponentFixture<ComplainURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
