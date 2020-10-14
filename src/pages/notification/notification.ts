import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController,
  ViewController
} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {BaseUI} from "../../common/baseui";
import {Bmobconfig} from "../../common/getBmob";
import {WritePage} from "../write/write";
import {MessagePage} from "../message/message";
import {LikesPage} from "../likes/likes";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage extends BaseUI {
  notificationList:any;
  receive_notification:1;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public storage: Storage,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public http: HttpClient) {
    super();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    // this.getNotification();
  }

  gotoDetails(questionId) {

  }
  gotoMessagePage(){
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(MessagePage);
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }

  gotoLikesPage(){
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(LikesPage);
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }


  // sleep(d){
  //   for(var t = Date.now();Date.now() - t <= d;);
  // }

  // getNotification()
  // {
  //   this.receive_notification=1;
  //   var Bmob = Bmobconfig.getBmob();
  //   let last_time;
  //   Bmob.timestamp().then(res => {
  //     console.log(res);
  //     last_time=res;
  //   });
  //
  //   while(true)
  //   {
  //
  //     var first=true;
  //
  //     if(this.receive_notification==1)
  //     {
  //       if(first)
  //       {
  //         Bmob.timestamp().then(res => {
  //           console.log(res);
  //           last_time=res;
  //         })
  //       }
  //       console.log(last_time);
  //
  //     }
  //     this.sleep(2000);
  //   }
  // }

}
