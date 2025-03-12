import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTdbComponent } from './product-list-tdb.component';

describe('ProductListTdbComponent', () => {
  let component: ProductListTdbComponent;
  let fixture: ComponentFixture<ProductListTdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListTdbComponent]
    });
    fixture = TestBed.createComponent(ProductListTdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
