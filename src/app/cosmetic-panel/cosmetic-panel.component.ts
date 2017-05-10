import { Component, OnInit } from '@angular/core';
import { Cosmetic, Review } from './../data-models';
import { CosmeticService } from './../services/cosmetic.service';
import { ReviewService } from './../services/review.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cosmetic-panel',
  templateUrl: './cosmetic-panel.component.html',
  styleUrls: ['./cosmetic-panel.component.css']
})
export class CosmeticPanelComponent implements OnInit {
  cosmeticsList: Cosmetic[];
  selectedCosmetic: Cosmetic;

  constructor(
    private router: Router,
    private CosmeticService: CosmeticService,
    private ReviewService: ReviewService,
  ) { }

  getCosmetics(): void {
    this.CosmeticService
      .getCosmetics()
      .subscribe(cosmetics => this.cosmeticsList = cosmetics);
  }

  ngOnInit(): void {
    this.getCosmetics();
  }

  delete(cosmetic: Cosmetic): void {
    const idCosmToDelete = cosmetic.id;
    this.CosmeticService
      .delete(cosmetic.id)
      .subscribe(() => {
        this.cosmeticsList = this.cosmeticsList.filter(h => h !== cosmetic);
      });
    // Usuwamy powiązane z kosmetykiem recenzje!
    let reviewsForCosmetic: Review[];
    this.ReviewService
      .getReviewsForCosmetic(idCosmToDelete)
      .subscribe(reviews => {
        reviewsForCosmetic = reviews;
        for (let entry of reviewsForCosmetic) {
          this.ReviewService.delete(entry.id).subscribe(() => null);
        }
      });

  }

}
