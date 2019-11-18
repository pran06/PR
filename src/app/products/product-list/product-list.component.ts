import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from 'src/app/core/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  errorMessage: string;
  pageTitle: string = 'Product List';
  
  _filterString: string;
  
  get filterString() : string  {
    return this._filterString;
  }

  set filterString(value : string){
    this._filterString = value;
    this.filteredProducts = this._filterString?this.performFilter(this._filterString):this.products;
  }


  showImages: boolean = false;

  filteredProducts: IProduct[];

  products: IProduct[] ;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products,
        this.filteredProducts = this.products
      },
      error: err => this.errorMessage = err
    }); 
    this.filteredProducts = this.products;
  }

  toggleImage(): void  {
    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message:string) : void{
    this.pageTitle = "Product List: " + message; 

  }
}
