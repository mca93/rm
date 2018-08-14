import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OverdraftPage } from '../overdraft/overdraft';
import { OverdraftService } from '../../services/overdraft.service';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    overdrafts: {customer: string, balance: number, amount: number, overdraf: number} [] = [];

  constructor(private overdraftService: OverdraftService, public navCtrl: NavController) {

  }
  ionViewWillEnter(){
    this.overdrafts= this.overdraftService.getOverdrafts();
  }
  setNewOverdraft(){
    this.navCtrl.push(OverdraftPage);
  }


    showOverdraft(event, overdraft){
      this.navCtrl.push(ItemDetailsPage , {overdraft: overdraft});
    }
}
