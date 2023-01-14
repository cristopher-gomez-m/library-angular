import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBookCardComponent } from './pay-book-card.component';

describe('PayBookCardComponent', () => {
  let component: PayBookCardComponent;
  let fixture: ComponentFixture<PayBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
