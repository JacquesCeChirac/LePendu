import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HangmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hangman',
    templateUrl: 'hangman.html',
})
export class HangmanPage {

    step =  '';
    count =  0;
    word =  "tata";
    tiret: [''];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HangmanPage');
    }

    public addStep(): void {
        if (this.step.match(/[a-zA-Z]/) && this.count < 11) {
           for (let i = 0; i < this.word.length; i++) {
               if (this.step == this.word[i]) {
                   console.log(this.step+"/"+this.word);
               }
           }
        } else {
            this.count++;
        }
    }

}
