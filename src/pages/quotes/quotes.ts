import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesService } from '../../services/quotes';

@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
    quoteGroup: { category: string; quotes: Quote[]; icon: string };

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController,
        private quotesService: QuotesService
    ) {}

    ngOnInit() {
        this.quoteGroup = this.navParams.data;
    }
    // ionViewDidLoad() {
    //     this.quoteGroup = this.navParams.data;
    // Add elvis operator (?) in template to use this approach
    // }
    onAddToFavorite(selectedQuote: Quote) {
        const alert = this.alertCtrl.create({
            title: 'Add Quote',
            //subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {}
                },
                {
                    text: 'Add',
                    handler: () => {
                        this.quotesService.addQuoteToFavorites(selectedQuote);
                    }
                }
            ]
        });

        alert.present();
    }
}
