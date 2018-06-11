import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message/message.class';

@Component({
  selector: 'message-item',
  templateUrl: './message_item.component.html',
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;

  constructor() { }

  ngOnInit() {
  }

}
