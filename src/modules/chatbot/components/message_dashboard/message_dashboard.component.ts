import { NavController } from 'ionic-angular';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'message-dashboard',
  templateUrl: './message_dashboard.component.html',
})
export class MessageDashboardComponent implements OnInit {
  answer;

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "4d0069fc287741b693ea30296cc505de"
      })
        .then((result) => console.log(result))
    });
  }
  ngOnInit() {
    console.log("Started, in oninit");
  }
  // Functions
  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
      .then(({ result: { fulfillment: { speech } } }) => {
        this.ngZone.run(() => {
          this.answer = speech;
        });
      })
  }
}
// import { NavController } from 'ionic-angular';
// import { Component, OnInit, Input } from '@angular/core';
// import { Message } from '../../models/message/message.class';
//
// @Component({
//   selector: 'message-dashboard',
//   templateUrl: './message_dashboard.component.html',
// })
// export class MessageDashboardComponent implements OnInit {
//   public message: Message;
//   public messages: Message[];
//   constructor(public navCtrl: NavController) {
//     this.message = new Message('', 'assets/images/user.png');
//     this.messages = [];
//   }
//
//   ngOnInit() {
//     console.log("WTF")
//   }
//
//
// }
