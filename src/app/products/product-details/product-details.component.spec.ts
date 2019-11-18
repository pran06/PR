import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductServiceStub } from '../product.service.mock';
import { ProductService } from '../product.service';
import { ConvertToSpacePipe } from 'src/app/shared/pipes/convert-to-space.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      providers: [{ provide: ProductService, useClass: ProductServiceStub }],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ProductDetailsComponent, ConvertToSpacePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
