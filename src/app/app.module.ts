import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { HomePage} from "../pages/home/home";
import { ChatPage} from "../pages/chat/chat";
import { DiscoveryPage} from "../pages/discovery/discovery";
import { MorePage} from "../pages/more/more";
import { NotificationPage} from "../pages/notification/notification";
import { LoginPage} from "../pages/login/login";
import { RegisterPage} from "../pages/register/register";
import {HeadfacePage} from "../pages/headface/headface";
import {UserPage} from "../pages/user/user";
import {QuestionPage} from "../pages/question/question";
import {AnswerPage} from "../pages/answer/answer";
import {AddAnswerPage} from "../pages/add-answer/add-answer";
import {MomentPage} from "../pages/moment/moment";
import {WritePage} from "../pages/write/write";
import {MyMomentsPage} from "../pages/my-moments/my-moments";
import {CommentPage} from "../pages/comment/comment";
import {LikesPage} from "../pages/likes/likes";
import {MessagePage} from "../pages/message/message";
import {OneMomentPage} from "../pages/one-moment/one-moment";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { IonicStorageModule} from "@ionic/storage";
import { HttpClientModule } from '@angular/common/http';
import {HttpClient, HttpResponse} from '@angular/common/http';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ChatPage,
    DiscoveryPage,
    MorePage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    AnswerPage,
    AddAnswerPage,
    MomentPage,
    WritePage,
    MyMomentsPage,
    CommentPage,
    LikesPage,
    MessagePage,
    OneMomentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ChatPage,
    DiscoveryPage,
    MorePage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    AnswerPage,
    AddAnswerPage,
    MomentPage,
    WritePage,
    MyMomentsPage,
    CommentPage,
    LikesPage,
    MessagePage,
    OneMomentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    File,
    Transfer,
    FilePath,
    Camera
  ]
})
export class AppModule {}
