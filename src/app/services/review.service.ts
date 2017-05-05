import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Review, Cosmetic } from './../data-models';

@Injectable()
export class ReviewService {
  private reviewsUrl = 'api/reviews';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getReviewsForCosmetic(cosmeticId: number) {
    return this.http.get(this.reviewsUrl)
      .map(res => <Review[]> res.json().data)
      .map((reviews) => {
        return reviews.filter((reviews) => reviews.cosmetic.id === cosmeticId);
          })
      .catch(this.handleError);
  }
  getReviews(): Observable<Review[]> {
    return this.http.get(this.reviewsUrl)
      .map(response => response.json().data as Review[])
      .catch(this.handleError);
  }

  getReview(id: number): Observable<Review> {
    const url = `${this.reviewsUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Review)
      .catch(this.handleError);
  }

  update(review: Review): Observable<Review> {
    const url = `${this.reviewsUrl}/${review.id}`;
    return this.http
      .put(url, JSON.stringify(review), { headers: this.headers })
      .map(() => review)
      .catch(this.handleError);
  }

  create(review: string, nickname: string, cosmetic: Cosmetic, raiting: number): Observable<Review> {
    return this.http
      .post(this.reviewsUrl, JSON.stringify({
        review: review, nickname: nickname, cosmetic: cosmetic, raiting: raiting
      }), { headers: this.headers })
      .map(res => res.json().data as Review)
      .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.reviewsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('Wystąpił błąd', error);
    return Observable.throw(error.message || error);
  }

}
