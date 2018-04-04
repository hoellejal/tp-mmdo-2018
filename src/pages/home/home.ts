import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { notImplemented } from '@angular/core/src/render3/util';
import { empty } from 'rxjs/Observer';

export interface Result {
  title: string;
  author: string;
  date: number;
  image:string;
}
const fakeResults: Result[] = [
  { title: 'Retour vers le futur', author: 'urgh', date: 2013, image:'http://www.w3im.com/css/img_lights.jpg'},
  { title: 'meh', author: '', date: 1998, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytlv79MtJ00cc0c_skEKa5MxZhaASjZxP9KchIIezgYW3lDz6qg'}
]

const fake: Result[] = null;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Result[];
  constructor(public navCtrl: NavController) {
   this.results = fake;
  }
  getItems($event:any) {
    let val = $event.target.value;
    if (val != '') {
      this.results = fakeResults;
    }
    else
    this.results = fake;
  }
}
