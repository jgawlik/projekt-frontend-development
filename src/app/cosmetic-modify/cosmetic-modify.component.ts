import { Component, OnInit } from '@angular/core';
import { Cosmetic, Category } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CosmeticService } from './../cosmetic.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cosmetic-modify',
  templateUrl: './cosmetic-modify.component.html',
  styleUrls: ['./cosmetic-modify.component.css']
})
export class CosmeticModifyComponent implements OnInit {

   cosmetic: Cosmetic;

    constructor(
      private CosmeticService: CosmeticService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
    ) {}

    ngOnInit(): void {
      // Bez użycia Promise
      // this.cosmetic = this.service.getCosmetic(+this.route.snapshot.params['id']);
      this.route.params
        .switchMap((params: Params) => this.CosmeticService.getCosmetic(+params['id']))
        .subscribe(cosmetic => this.cosmetic = cosmetic);
    }

    save(): void {
      this.CosmeticService.update(this.cosmetic)
        .then(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

}