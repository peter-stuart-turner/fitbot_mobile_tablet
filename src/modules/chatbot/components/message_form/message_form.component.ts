
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message/message.class';

@Component({
  selector: 'message-form',
  templateUrl: './message_form.component.html',
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  ngOnInit() {
    console.log("WTF")
    console.log("Message", this.message)
    console.log("Messages", this.messages)
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.message = new Message('k', 'assets/images/user.png');
  }

}
