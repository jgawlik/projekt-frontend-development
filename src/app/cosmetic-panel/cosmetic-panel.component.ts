import { Component, OnInit } from '@angular/core';
import { Cosmetic } from './../data-models';
import { CosmeticService } from './../cosmetic.service';
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
    private CosmeticService: CosmeticService
    ) { }

  getCosmetics(): void {
    // Bez użycia Promise
    // this.cosmeticsList = this.CosmeticService.getCosmetics();
     this.CosmeticService
        .getCosmetics()
        .then(cosmetics => this.cosmeticsList = cosmetics);
  }

  ngOnInit(): void {
    this.getCosmetics();
  }

  // onSelect(cosmetic: Cosmetic) {
  //   this.router.navigate(['/information', cosmetic.id]);
  // }

  delete(cosmetic: Cosmetic): void {
      this.CosmeticService
          .delete(cosmetic.id)
          .then(() => {
            this.cosmeticsList = this.cosmeticsList.filter(h => h !== cosmetic);
          });
    }

}
