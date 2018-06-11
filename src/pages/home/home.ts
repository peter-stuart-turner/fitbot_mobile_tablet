import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageFormComponent } from '../../modules/chatbot/components/message_form/message_form.component';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
