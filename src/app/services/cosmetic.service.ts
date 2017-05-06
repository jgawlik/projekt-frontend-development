import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Cosmetic, Category } from './../data-models';

@Injectable()
export class CosmeticService {
  private cosmeticsUrl = 'api/cosmetics';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getCosmetics(): Observable<Cosmetic[]> {
    return this.http.get(this.cosmeticsUrl)
      .map(response => response.json().data as Cosmetic[])
      .catch(this.handleError);
  }

  getCosmetic(id: number): Observable<Cosmetic> {
    const url = `${this.cosmeticsUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Cosmetic)
      .catch(this.handleError);
  }

  getCosmeticsForCategory(categoryID: number): Observable<Cosmetic[]> {
    return this.http.get(this.cosmeticsUrl)
      .map(res => <Cosmetic[]>res.json().data)
      .map((cosmetics) => {
        return cosmetics.filter((cosmetic) => cosmetic.category.id === categoryID);
      })
      .catch(this.handleError);
  }

  update(cosmetic: Cosmetic): Observable<Cosmetic> {
    const url = `${this.cosmeticsUrl}/${cosmetic.id}`;
    return this.http
      .put(url, JSON.stringify(cosmetic), { headers: this.headers })
      .map(() => cosmetic)
      .catch(this.handleError);
  }

  create(name: string, ingredients: string, price: number, producer: string, category: Category): Observable<Cosmetic> {
    return this.http
      .post(this.cosmeticsUrl, JSON.stringify({
        name: name,
        ingredients: ingredients, price: price, producer: producer, category: category
      }), { headers: this.headers })
      .map(res => res.json().data as Cosmetic)
      .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.cosmeticsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('Wystąpił błąd', error);
    return Observable.throw(error.message || error);
  }


  // getCosmeticsByCategory(idCategory: number): Observable<Cosmetic[]> {
  //     // let allCosmetics = this.getCosmetics();
  //     // let returnArray : Cosmetic[];
  //     // for (let entry of allCosmetics) {

  //     // }
  //     let Observable = this.http.get(this.cosmeticsUrl)
  //
  //       .map(response => response.json().data as Cosmetic[])
  //       .map(cosmetics => { return })
  //       .catch(this.handleError);
  //     Observable.
  //       var uArr = [];
  //       for(promise.data, function ( value, key ) {
  //              uArr[value.id] = value.userName;
  //       })
  // }

  // getCosmetics(): Cosmetic[] {
  //   return COSMETICS;
  // }

  // getCosmetic(id: number) {
  //     return this.getCosmetics().find(cosmetic => cosmetic.id === id);
  // }
  // getCosmetics(): Observable<Cosmetic[]> {
  // return Observable.resolve(COSMETICS);
  // }

  // getCosmetic(id: number): Observable<Cosmetic> {
  // return this.getCosmetics()
  //  .map(cosmetics => cosmetics.find(cosmetic => cosmetic.id === id));
  // }
}


