import { Observable, of } from 'rxjs';
import { IProduct } from '../core/model/product';

export class ProductServiceStub {

    products : IProduct[];

    constructor(){
      this.products = [
        {
            "id": 1,
            "name": "Leaf Rake",
            "brand": "brand1",
            "code": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "id": 2,
            "name": "Garden Cart",
            "brand": "brand1",
            "code": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },      
      ];
    }

    getProducts(): Observable<IProduct[]> {
      return  of(this.products);
     
  }
}
