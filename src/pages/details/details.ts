import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Result {
  title: string;
  author: string;
  date: number;
  image: string;
}

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  result: Result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
