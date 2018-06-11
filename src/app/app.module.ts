import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Feature modules
import { ChatbotModule } from '../modules/chatbot/chatbot.module';
//import { MessageFormComponent } from '../components/message_form/message_form.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //
    FormsModule,
    // Feature modules
    ChatbotModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
