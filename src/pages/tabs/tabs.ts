import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
    selector: 'page-tabs',
    template: `
      <ion-tabs>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star" [tabBadge]="favoriteQuotesLength"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;

    //constructor(private quotesService: QuotesService) {}

    //private favoriteQuotesLength: number;

    // ngOnInit() {
    //     this.favoriteQuotesLength = this.quotesService.getFavoriteQuotes().length;
    // }
}
