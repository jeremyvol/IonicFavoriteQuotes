import { Component } from '@angular/core';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
import { QuotePage } from '../quote/quote';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    quotes: Quote[];

    constructor(
        private quotesService: QuotesService,
        private modalCtrl: ModalController,
        private settingsService: SettingsService
    ) {}

    ionViewWillEnter() {
        this.quotes = this.quotesService.getFavoriteQuotes();
    }

    onViewQuote(quote: Quote) {
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if (remove) {
                this.onRemoveFromFavorites(quote);
            }
        });
    }

    onRemoveFromFavorites(quote: Quote) {
        this.quotesService.removeQuoteToFavorites(quote);
        //this.quotes = this.quotesService.getFavoriteQuotes();
        const position = this.quotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id === quote.id;
        });
        this.quotes.splice(position, 1);
    }

    getBackground() {
        return this.settingsService.isAltBackground()
            ? 'altQuoteBackground'
            : 'quoteBackground';
    }

    isAltBackground() {
        return this.settingsService.isAltBackground();
    }
}
