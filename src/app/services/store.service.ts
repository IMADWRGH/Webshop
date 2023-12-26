import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/Product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAllProduct(limit = '12', sort = 'desc'): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`);
  }

  // getAllCategories(): Observable<Array<string>> {
  //   return this.http.get<Array<string>>(`${STORE_BASE_URL}/products?categories`);
  // }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<Product>>(`${STORE_BASE_URL}/products`).pipe(
      map(products => {
        // Assuming each product has a 'category' field
        const categories = products.map(product => product.category);
        // If categories are duplicated and you want unique categories, you can use the following line instead:
        // const categories = [...new Set(products.map(product => product.category))];
        return categories;
      })
    );
  }

}
