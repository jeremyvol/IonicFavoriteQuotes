import { QuotesService } from '../../services/quotes';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-quote',
    templateUrl: 'quote.html'
})
export class QuotePage {
    person: string;
    text: string;
    quotesService: QuotesService;

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams
    ) {}

    ionViewDidLoad() {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    }
    onClose(remove: boolean = false) {
        this.viewCtrl.dismiss(remove);
    }
}
