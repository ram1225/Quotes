import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Alert {

    constructor(private alertDialog: AlertController) {

    }
    presentAlert(mesage: string) {
        let alert = this.alertDialog.create({
            title: 'Info',
            message: mesage,
            buttons: [{text:'OK', role:'Cancel'}]
        });

      return  alert.present();

    }
}