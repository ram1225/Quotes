
import { QuotesProvider } from '../../providers/quotes/quotesProvider';

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Alert } from './../../util/utils';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  public quotes: any = [];
  private categoryName: string;
  public isFavorite: boolean = false;
  public response: any;
  public loader;
  constructor(public navCtrl: NavController, private alert: Alert, private getQuotesData: QuotesProvider, private loadingCtrl: LoadingController, private navParam: NavParams, private alertDialog: AlertController/*private transfer: FileTransfer,private file: File*/) {
    this.categoryName = this.navParam.get('data');

  }

  ionViewDidLoad() {
    this.loader = this.getLoader();
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter " + this.categoryName);
    this.loader.present();
    this.loadData(this.categoryName);

  }

  loadData(categoryName: string) {
    this.getQuotesData.getData(categoryName.toLowerCase().toString()).subscribe(response => {
      console.log(response);
      this.quotes = response;
      this.loader.dismiss();
    });


  }
  presentConfirm(position: number) {
    let alert = this.alertDialog.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, Go ahead',
          handler: () => {
            console.log('yes clicked' + position);
            this.makeFavorite(position);
          }
        },
        {
          text: "No, I've changed my mind",
          role: 'cancel'
        }
      ]
    });

    alert.present();

  }
  // public pdfDownload() {
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   const mime = 'application/pdf';
  //   const pdfFile = 'http://www.pdf995.com/samples/pdf.pdf';
  //   // alert(this.file.dataDirectory);
  //   fileTransfer.download(pdfFile, this.file.externalDataDirectory + 'file.pdf', true)
  //     .then((entry) => {
  //       alert('download complete: ' + entry.toURL());
  //     }, (error) => {
  //       // handle error
  //     });
  // }

  makeFavorite(position: number) {
    this.getQuotesData.updateQuote(position + '', this.quotes[position]).then((response) => {
      this.alert.presentAlert('Successfully added to favorites');
    }).catch((error) => {
      console.log()
    });
    // this.getQuotesProvider.setFavoriteData(position, this.categoryName).then(
    //   res => {
    //     this.response = res;
    //     this.quotes = this.response[this.categoryName];
    //     this.isFavorite = this.quotes[position].favorite;
    //     console.log(this.response);
    //   }
    // );


  }

  getLoader() {

    return this.loader = this.loadingCtrl.create({
      spinner: "crescent",
      content: "Please wait while loading data..."
    });
  }


}
