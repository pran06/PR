import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from 'src/app/shared/pipes/convert-to-space.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductServiceStub } from '../product.service.mock';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ConvertToSpacePipe ],
      imports: [ RouterTestingModule ],
      providers: [{ provide: ProductService, useClass: ProductServiceStub }        ],
      schemas: [ NO_ERRORS_SCHEMA ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent, );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
