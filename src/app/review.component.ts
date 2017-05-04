import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cosmetic, Review } from './data-models';
import { ReviewService } from './review.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, OnChanges {
  @Input() data: Cosmetic;
  @Input() allReviews: Review[];
  reviews: Review[];

  constructor(private ReviewService: ReviewService) { }

  ngOnInit() {
    // this.getReviews();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.reviews = this.getReviewsForCosmetic(this.data, this.allReviews);
    }
  }


  getReviewsForCosmetic(data: Cosmetic, allReviews: Review[]): Review[] {
    if (!data) return;
    if (!allReviews) return;
    let returnArray: Review[];
    // this.ReviewService
    //   .getReviews()
    //   .subscribe(result => returnArray.filter(review => review.cosmetic.id === data.id));
    // return returnArray;
    returnArray = [];
    for (let oneEntry of allReviews) {
      if (oneEntry.cosmetic.id == data.id) {
        returnArray.push(oneEntry);
      }

    }

    return returnArray;
  }
  getReviews(): void {
    this.ReviewService
      .getReviews()
      .subscribe(cosmetics => this.allReviews = cosmetics);
  }
  // getReviewsForCosmetic(cosmeticId): void {
  // 
  //   let returnArray: Review[];
  //   returnArray = [];
  //   alert(this.allReviews);
  //   if (this.allReviews) {
  //     for (let oneEntry of this.allReviews) {
  //       if (oneEntry.cosmetic.id === cosmeticId) {
  //         returnArray.push(oneEntry);
  //       }
  //     }
  //   }
  //   this.reviews = returnArray;
  // }
}
