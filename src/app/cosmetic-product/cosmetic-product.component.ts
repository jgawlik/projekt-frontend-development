import { Component, OnInit, AfterViewChecked, Inject, forwardRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Cosmetic, Category, Review, raitings } from './../data-models';
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
  myForm: FormGroup;
  raitings;

  review: AbstractControl;
  nickname: AbstractControl;
  raiting: AbstractControl;

  constructor(
    private CosmeticService: CosmeticService,
    private ReviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) { }

  getReviewsForCosmetic(cosmeticId: number) {
    this.ReviewService
      .getReviewsForCosmetic(cosmeticId)
      .subscribe(reviews => this.reviewsForCosmetic = reviews);
  }

  ngOnInit() {
    this.raitings = raitings;
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getReviewsForCosmetic(id);
      this.CosmeticService.getCosmetic(id)
        .subscribe(cosmetic => this.cosmetic = cosmetic);
    });
    this.myForm = this.fb.group({
      'review': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(300)])],
      'nickname': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'raiting': [null, Validators.required],
    });

    this.review = this.myForm.controls['review'];
    this.nickname = this.myForm.controls['nickname'];
    this.raiting = this.myForm.controls['raiting'];
  }

  addReview(): void {
    if (this.myForm.invalid) {
      return;
    }
    const formModel = this.myForm.value;
    this.ReviewService.create(formModel.review, formModel.nickname, formModel.raiting, this.cosmetic)
      .subscribe(newReview => this.reviewsForCosmetic.push(newReview));
    this.myForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

}
