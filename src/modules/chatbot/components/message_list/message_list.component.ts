import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message/message.class';

@Component({
  selector: 'message-list',
  templateUrl: './message_list.component.html',
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  private messages : Message[];

  constructor() { }

  ngOnInit() {
  }

}
