import { HomePage } from './../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { QuotesPage } from './../pages/quotes/quotes';
import { FavoritePage } from './../pages/favorite/favorite';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  pages: Array<{ title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Quotes Library',  component: HomePage },
      { title: 'Favorite',  component: FavoritePage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }

  ionViewDidLoad(){
     
 
  }

  openPage(page: any) {
    this.nav.setRoot(page.component);
  }
}

