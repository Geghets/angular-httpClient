import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurShopComponent } from './our-shop.component';

describe('OurShopComponent', () => {
  let component: OurShopComponent;
  let fixture: ComponentFixture<OurShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
