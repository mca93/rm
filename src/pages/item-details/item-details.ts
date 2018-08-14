import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {    }

  showPrompt() {
   const prompt = this.alertCtrl.create({
     title: 'Justify',
     message: "Enter a reason for this rejection",
     inputs: [
       {
         name: 'title',
         placeholder: 'Reason'
       },
     ],
     buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Save',
         handler: data => {
           console.log('Saved clicked');
         }
       }
     ]
   });
   prompt.present();
 }

}
