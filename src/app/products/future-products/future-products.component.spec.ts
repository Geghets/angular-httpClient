import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProductsComponent } from './future-products.component';

describe('FutureProductsComponent', () => {
  let component: FutureProductsComponent;
  let fixture: ComponentFixture<FutureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
