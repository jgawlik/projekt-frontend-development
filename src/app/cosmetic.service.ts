import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Cosmetic } from './data-models';

@Injectable()
export class CosmeticService {
  private cosmeticsUrl = 'api/cosmetics';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCosmetics(): Promise<Cosmetic[]> {
    return this.http.get(this.cosmeticsUrl)
                .toPromise()
                .then(response => response.json().data as Cosmetic[])
                .catch(this.handleError);
  }

  getCosmetic(id: number): Promise<Cosmetic> {
      const url = `${this.cosmeticsUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Cosmetic)
        .catch(this.handleError);
  }

  update(cosmetic: Cosmetic): Promise<Cosmetic> {
    const url = `${this.cosmeticsUrl}/${cosmetic.id}`;
    return this.http
      .put(url, JSON.stringify(cosmetic), {headers: this.headers})
      .toPromise()
      .then(() => cosmetic)
      .catch(this.handleError);
  }

  create(name: string): Promise<Cosmetic> {
      return this.http
        .post(this.cosmeticsUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Cosmetic)
        .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.cosmeticsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Wystąpił błąd', error);
    return Promise.reject(error.message || error);
  }
  // getCosmetics(): Cosmetic[] {
  //   return COSMETICS;
  // }

  // getCosmetic(id: number) {
  //     return this.getCosmetics().find(cosmetic => cosmetic.id === id);
  // }
  // getCosmetics(): Promise<Cosmetic[]> {
    // return Promise.resolve(COSMETICS);
  // }

  // getCosmetic(id: number): Promise<Cosmetic> {
      // return this.getCosmetics()
                //  .then(cosmetics => cosmetics.find(cosmetic => cosmetic.id === id));
    // }
}


