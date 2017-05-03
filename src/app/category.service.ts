import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Category } from './data-models';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
                .toPromise()
                .then(response => response.json().data as Category[])
                .catch(this.handleError);
  }

  getCategory(id: number): Promise<Category> {
      const url = `${this.categoriesUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Category)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Wystąpił błąd', error);
    return Promise.reject(error.message || error);
  }
}
