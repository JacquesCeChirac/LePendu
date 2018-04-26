import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DICTIONARY} from '../../providers/globals';

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
    word =  "";
    try = [];
    letters = [];
    err = 0;
    goodPass = false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HangmanPage');
        const randomIndex = Math.round(Math.random() * DICTIONARY.length);
        this.word = DICTIONARY[randomIndex].key;
    }
    // griser valider +11
    public addStep(): void {
        this.step = this.step.toLowerCase();
        if (this.step.match(/[a-zA-Z]/) && this.err < 11) {
           for (let i = 0; i < this.word.length; i++) {
               if (this.step == this.word[i]) {
                 this.goodPass = true;
                   if (this.word[i]!==this.try[i]){
                       this.try[i]=this.step;
                   }
               } else if (this.word[i]!=this.try[i]) {
                 this.try[i]='-';
               }
           }
           if(!this.goodPass){
             this.letters.indexOf(this.step) ? this.err++ : this.err;
             this.letters.indexOf(this.step) ? this.letters.push(this.step) : null;
           } else {
             this.goodPass = false;
           }
           this.letters.indexOf(this.step) ? this.count++ : this.count;
           console.log(this.try);
           console.log(this.letters);
        } else if (this.err === 11){
            console.log("fini !");
            console.log(this.word);
        }
        this.step = '';
    }

}
