import { QuotesPage } from './../quotes/quotes';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public quotesCategories: Array<{name: string, icon: string}>;
  
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad(){}
  
  ionViewWillEnter(){
    console.log("ionViewWillEnter ");

    this.quotesCategories = [{
      name: "Inspirational",
      icon: "disc"
    },
    {
      name: "Motivational",
      icon: "eye"
    },
    {
      name: "Enthusiastic",
      icon: "logo-facebook"
    },
    {
      name: "Funny",
      icon: "eye"
    }]

  }

  goToCategory(categoryName: any){
    this.navCtrl.push(QuotesPage,{
      data: categoryName
    });
  }

}
