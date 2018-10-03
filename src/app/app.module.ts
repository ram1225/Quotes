import { Alert } from './../util/utils';

import { firebaseConfig } from './../environments/firebase.config';
import { TabsPage } from './../pages/tabs/tabs';
import { QuotesPage } from './../pages/quotes/quotes';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingsPage } from '../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Menu } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';


import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from 'angularfire2';
import { QuotesProvider } from '../providers/quotes/quotesProvider'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    FavoritePage,
    QuotesPage,
    TabsPage
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    FavoritePage,
    QuotesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // GetquotesProvider,
    QuotesProvider,
    Alert
  ]
})
export class AppModule {}
