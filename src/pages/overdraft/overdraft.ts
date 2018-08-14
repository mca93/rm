import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OverdraftService } from '../../services/overdraft.service';

/**
 * Generated class for the OverdraftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overdraft',
  templateUrl: 'overdraft.html',
})
export class OverdraftPage {

  constructor(private overdraftService: OverdraftService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverdraftPage');
  }

  onAddOverdraft(value: {customer: string, balance: number, amount: number, overdraf: number}){
    this.overdraftService.addOverdraft(value);
    this.navCtrl.pop();
  }

}
