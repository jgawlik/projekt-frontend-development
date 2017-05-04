import { Component, OnInit, AfterViewChecked, Inject, forwardRef } from '@angular/core';
import { Cosmetic, Category, Review } from './data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CosmeticService } from './cosmetic.service';
import { ReviewService } from './review.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cosmetic-product',
  templateUrl: './cosmetic-product.component.html',
  styleUrls: ['./cosmetic-product.component.css'],
  providers: [ CosmeticService, ReviewService ]
})
export class CosmeticProductComponent implements OnInit {
  cosmetic: Cosmetic;
  reviews:  Review[];
  allReviews: Review[];

  constructor(
    // @Inject(forwardRef(() => ReviewService)) ReviewService: ReviewService,
    private CosmeticService: CosmeticService,
    private ReviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  /**
   * Zwracamy pusty Review[] lub wypełniony recenzjami dla danego kosmetyku
   * @param cosmeticId
   * @return Review[]
   */
  // getReviewsForCosmetic(cosmeticId): void {
  //   this.getReviews();
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


   getReviews(): void {
    this.ReviewService
      .getReviews()
      .subscribe(cosmetics => this.allReviews = cosmetics);
  }

  ngOnInit() {
    this.getReviews();
    this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.CosmeticService.getCosmeticObservable(id)
                .subscribe(cosmetic => this.cosmetic = cosmetic);
        });
    // this.route.params
      // .switchMap((params: Params) => this.CosmeticService.getCosmetic(+params['id']))
      // .subscribe(cosmetic => this.cosmetic = cosmetic);
    // this.getReviewsForCosmetic(this.cosmetic.id);
    // this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }


  goBack(): void {
    this.location.back();
  }

}
