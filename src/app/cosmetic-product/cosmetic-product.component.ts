import { Component, OnInit, AfterViewChecked, Inject, forwardRef } from '@angular/core';
import { Cosmetic, Category, Review } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CosmeticService } from './../services/cosmetic.service';
import { ReviewService } from './../services/review.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cosmetic-product',
  templateUrl: './cosmetic-product.component.html',
  styleUrls: ['./cosmetic-product.component.css']
})
export class CosmeticProductComponent implements OnInit {
  cosmetic: Cosmetic;
  reviewsForCosmetic: Review[];

  constructor(
    private CosmeticService: CosmeticService,
    private ReviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  getReviewsForCosmetic(cosmeticId: number) {
    this.ReviewService
      .getReviewsForCosmetic(cosmeticId)
      .subscribe(reviews => this.reviewsForCosmetic = reviews);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getReviewsForCosmetic(id);
      this.CosmeticService.getCosmeticObservable(id)
        .subscribe(cosmetic => this.cosmetic = cosmetic);
    });
  }


  goBack(): void {
    this.location.back();
  }

}
