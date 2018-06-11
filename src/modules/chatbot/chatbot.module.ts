import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageFormComponent } from './components/message_form/message_form.component';
import { MessageListComponent } from './components/message_list/message_list.component';
import { MessageItemComponent } from './components/message_item/message_item.component';
import { MessageDashboardComponent } from './components/message_dashboard/message_dashboard.component';
import { FormsModule } from '@angular/forms';
import { IonicPageModule, IonicModule } from 'ionic-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  entryComponents: [
    MessageDashboardComponent,
    MessageFormComponent
  ],
  declarations: [
    MessageDashboardComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageItemComponent
  ]
})
export class ChatbotModule { }
