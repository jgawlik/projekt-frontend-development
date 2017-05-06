import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category } from './../data-models';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.categoriesUrl)
      .map(response => response.json().data as Category[])
      .catch(this.handleError);
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Category)
      .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  update(category: Category): Observable<Category> {
    const url = `${this.categoriesUrl}/${category.id}`;
    return this.http
      .put(url, JSON.stringify(category), { headers: this.headers })
      .map(() => category)
      .catch(this.handleError);
  }

  create(categoryName: string): Observable<Category> {
    return this.http
      .post(this.categoriesUrl, JSON.stringify({ categoryName: categoryName }), { headers: this.headers })
      .map(res => res.json().data as Category)
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    console.error('Wystąpił błąd', error);
    return Observable.throw(error.message || error);
  }
}
